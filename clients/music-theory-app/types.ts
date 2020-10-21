export class KeyboardLayout {
    private keyboardLayout: Note[]

    public constructor(naturalPitches: string[]) {
        this.keyboardLayout = this.createKeyboardLayout(naturalPitches)
    }

    public getKeyboardLayout(): Note[] {
        return this.keyboardLayout
    }

    private createKeyboardLayout(naturalPitches: string[]): Note[] {
        naturalPitches.push(naturalPitches[0])
        let notes = []
        let i = 0, j = 1
        while (j < naturalPitches.length) {
            if (naturalPitches[i] == "B" || naturalPitches[i] == "E") {
                notes.push(new Note([naturalPitches[i], naturalPitches[j] + "b"]))
                notes.push(new Note([naturalPitches[i] + "#", naturalPitches[j]]))
            } else {
                if (naturalPitches[i] != "C" && naturalPitches[i] != "F") {
                    notes.push(new Note([naturalPitches[i]]))
                }
                const blackKey: string[] = 
                    [naturalPitches[i] + "#", naturalPitches[j] + "b"]
                notes.push(new Note(blackKey))
            }
            i++
            j++
        }
        return notes
    }
}

export class Note {
    private labelSet: Set<string>
    private labelMap: Map<number, string>
    
    public constructor(pitches: string[]) {
        this.labelSet = new Set<string>(pitches)
        this.labelMap = new Map<number, string>()
        for (const pitch of pitches) {
            if (pitch.includes("b")) {
                this.labelMap.set(1, pitch)
            } else if (pitch.includes("#")) {
                this.labelMap.set(2, pitch)
            } else {
                this.labelMap.set(0, pitch)
            }
        }
    }

    public getLabels(): Set<string> {
        return this.labelSet
    }

    public getLabel(isFlat: boolean, isSharp: boolean, noteLabelSet: Set<string>): string {
        if (isFlat) {
            if (this.labelMap.has(1)) {
                const label = this.labelMap.get(1)
                if (!noteLabelSet.has(label.substring(0, 1))) {
                    return label
                }
            }
        }
        if (isSharp) {
            if (this.labelMap.has(2)) {
                const label = this.labelMap.get(2)
                if (!noteLabelSet.has(label.substring(0, 1))) {
                    return label
                }
            }
        }
        return this.labelMap.get(0)
    }
}

export class KeySignature {
    private notes: Note[]
    private noteLabels: string[]
    private accidentalLocations: number[]
    private accidentalTargets: number[]
    private startNote: string
    private pattern: number[] = [2, 2, 1, 2, 2, 2, 1]
    private flatKeySignatures: Set<string> = 
        new Set<string>(["F", "Bb", "Eb", "Ab", "Db", "Gb", "Cb"]) 
    private sharpKeySignatures: Set<string> =
        new Set<string>(["G", "D", "A", "E", "B", "F#", "C#"])

    public constructor(startNote: string, keyboardLayout: Note[]) {
        this.startNote = startNote
        this.notes = this.setKeySignature(keyboardLayout)

        const isFlat = this.isFlatKeySignature()
        const isSharp = this.isSharpKeySignature()
        const noteLabelsSet: Set<string> = new Set<string>();

        this.noteLabels = this.notes.map(note => {
            const label = note.getLabel(isFlat, isSharp, noteLabelsSet)   
            noteLabelsSet.add(label)
            return label
        })

        this.accidentalLocations = this.noteLabels.map((label, index) => {
            if (label.includes("b") || label.includes("#")) {
                return index + 1
            }
        }).filter(index => index !== undefined)

        this.accidentalTargets = this.setAccidentalTargetsOrder(this.accidentalLocations, isFlat, isSharp)
    }

    public getNotes(): Note[] {
        return this.notes
    }

    public getNoteLabels(): string[] {
        return this.noteLabels
    }

    public getAccidentalLocations(): number[] {
        return this.accidentalLocations
    }

    public getAccidentalOrder(): number[] {
        return this.accidentalTargets
    }
    
    public isFlatKeySignature(): boolean {
        return this.flatKeySignatures.has(this.startNote)
    }

    public isSharpKeySignature(): boolean {
        return this.sharpKeySignatures.has(this.startNote)
    }

    public getNumberAccidentals(): number {
        const count = this.accidentalLocations.length
        return this.accidentalLocations
            .includes(8, this.accidentalLocations.length - 1) ? 
            count - 1 : count
    }

    private setAccidentalTargetsOrder(accidentalLocations: number[], isFlat: boolean, isSharp: boolean): number[] {
        if (!isFlat && !isSharp) {
            return []
        }
        const accidentalTargets: number[] = []
        const targetsSet: Set<number> = new Set()
        let addRootOctave = false
        if (isFlat) {
            const center = accidentalLocations.length / 2
            let i = 0
            let j = center % 1 == 0 ? center - 1 : Math.floor(center)
            while (j < accidentalLocations.length && i != j) {
                const note2 = accidentalLocations[j]
                const note1 = accidentalLocations[i]
                if (note2 !== 8) {
                    if (!targetsSet.has(note2)) {
                        accidentalTargets.push(note2)
                        targetsSet.add(note2)
                    }
                } else {
                    addRootOctave = true
                }
                if (!targetsSet.has(note1)) {
                    accidentalTargets.push(note1)
                    targetsSet.add(note1)
                }
                j++, i++
            }

        }
        if (isSharp) {
            let j = accidentalLocations.length - 1
            if (accidentalLocations[j] === 8) {
                j--
                addRootOctave = true
            }
            let center = j / 2 
            let i = center % 1 == 0 ? center == 0 ? 0 : center - 1 : Math.floor(center)
            while (i >= 0 && i != j) {
                const note2 = accidentalLocations[j]
                const note1 = accidentalLocations[i]
                if (!targetsSet.has(note2)) {
                    accidentalTargets.push(note2)
                    targetsSet.add(note2)
                }
                if (!targetsSet.has(note1)) {
                    accidentalTargets.push(note1)
                    targetsSet.add(note1)
                }
                i--, j--
            }
            if (!targetsSet.has(accidentalLocations[j]) && this.accidentalLocations.length != 1) {
                accidentalTargets.push(accidentalLocations[j])
            }
        }
        if (this.accidentalLocations.length == 1) {
            accidentalTargets.push(accidentalLocations[0])
        }
        if (addRootOctave) {
            accidentalTargets.push(8)
        }
        return accidentalTargets
    }

    private setKeySignature(keyboardLayout: Note[]): Note[] {
        let notes: Note[] = []
        const startIndex = this.findStartNoteIndex(keyboardLayout)
        let index = startIndex
        for (const step of this.pattern) {
            notes.push(keyboardLayout[index])
            index += step
            if (index >= keyboardLayout.length) {
                index -= keyboardLayout.length
            }
        } 
        notes.push(keyboardLayout[startIndex])
        return notes
    }

    private findStartNoteIndex(keyboardLayout: Note[]): number {
        let i = 0
        for (const key of keyboardLayout) {
            if (key.getLabels().has(this.startNote)) {
                break;
            }
            i++
        }
        return i
    }   
}
