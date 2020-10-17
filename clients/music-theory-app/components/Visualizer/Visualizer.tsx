import React, { useState, useEffect, useRef } from "react"
import { Staff } from "./Staff/Staff"
import { KeyboardLayout, Note, KeySignature } from "../../types"

const MUSICAL_ALPHABET = ["A", "B", "C", "D", "E", "F", "G"]
const keyboardLayout = new KeyboardLayout(MUSICAL_ALPHABET)

const ROOT_NOTES = ["Db", "Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B"]
const keySignatures: Map<string, KeySignature> = new Map<string, KeySignature>()
ROOT_NOTES.map(startNote => {
    keySignatures.set(
        startNote, 
        new KeySignature(startNote, keyboardLayout.getKeyboardLayout())
    )
})

export const Visualizer: React.FC = () => {
    const [prevRoot, setPrevKey] = useState("C")
    const [currRoot, setKey] = useState("C");
    const [prevKeySignature, setPrevKeySignature] = useState(keySignatures.get("C"))
    const [currKeySignature, setCurrKeySignature] = useState(keySignatures.get("C"))
    // console.log(keyboardLayout)
    // const keySignature = new KeySignature(key, keyboardLayout.getKeyboardLayout())
    // console.log(keySignature)
    // const isFlat = keySignature.isFlatKeySignature()
    // const isSharp = keySignature.isSharpKeySignature()
    // const notes: Note[] = keySignature.getNotes()
    // const noteLabelsSet: Set<string> = new Set<string>();
    // const noteLabels: string[] = notes.map(note => {
    //     const label = note.getLabel(isFlat, isSharp, noteLabelsSet)   
    //     noteLabelsSet.add(label)
    //     return label
    // })

    // useEffect(() => {
    //     setPrevKey("C")
    //     setKey("C")
    //     setKeySignature(keySignatures.get("C"))
    // }, [])

    const handleChange = event => {
        event.preventDefault()
        const { value } = event.target
        setPrevKey(currRoot)
        setKey(value)
        setPrevKeySignature(currKeySignature)
        setCurrKeySignature(keySignatures.get(value))
    }

    return <>
        <Staff 
            isTrebleClef={true} 
            currRoot={currRoot} 
            prevRoot={prevRoot} 
            prevKeySignature={prevKeySignature}
            currKeySignature={currKeySignature} />
        <Staff 
            isTrebleClef={false} 
            currRoot={currRoot} 
            prevRoot={prevRoot} 
            prevKeySignature={prevKeySignature}
            currKeySignature={currKeySignature} />

        <select onChange={handleChange}>
            {ROOT_NOTES.map(rootNote =>
                <option 
                    key={rootNote} 
                    value={rootNote} 
                    selected={rootNote === "C"}
                >
                    {rootNote}
                </option>
            )}
        </select>
    </>
}