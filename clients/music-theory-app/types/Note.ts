export default class Note {
    private labelSet: Set<string>
    private labelMap: Map<number, string>
    
    public constructor(pitches: string[]) {
        this.labelSet = new Set<string>(pitches)
        this.labelMap = new Map<number, string>()
        for (const pitch of pitches) {
            if (pitch.includes("♭")) {
                this.labelMap.set(1, pitch)
            } else if (pitch.includes("♯")) {
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

    public isBlackNote(): boolean {
        let isBlackNote: boolean = true
        this.labelSet.forEach(label => {
            if (!label.includes("♭") && !label.includes("♯")) {
                isBlackNote = false
            } else if (label == "C♭" || label === "B♯" || label === "F♭" || label === "E♯") {
                isBlackNote = false
            }
        })
        return isBlackNote
    }
}
