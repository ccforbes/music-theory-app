import Note from "./Note"

export default class KeyboardLayout {
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
                notes.push(new Note([naturalPitches[i], naturalPitches[j] + "♭"]))
                notes.push(new Note([naturalPitches[i] + "♯", naturalPitches[j]]))
            } else {
                if (naturalPitches[i] != "C" && naturalPitches[i] != "F") {
                    notes.push(new Note([naturalPitches[i]]))
                }
                const blackKey: string[] = 
                    [naturalPitches[i] + "♯", naturalPitches[j] + "♭"]
                notes.push(new Note(blackKey))
            }
            i++
            j++
        }
        return notes
    }
}
