export class Note {
    private labels: Set<string>
    private octave: number

    constructor(labels: string[], octave: number) {
        labels.forEach(label => {
            this.labels.add(label)
        })
        this.octave = octave;
    }

    public hasLabel(label: string): boolean {
        return this.labels.has(label)
    }
}