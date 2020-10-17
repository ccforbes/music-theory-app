import React, { useState, useEffect, useRef } from "react"
import anime from "animejs"
import { Staff } from "./Staff/Staff"
import { KeyboardLayout, Note, KeySignature } from "../../types"

const MUSICAL_ALPHABET = ["A", "B", "C", "D", "E", "F", "G"]
const keyboardLayout = new KeyboardLayout(MUSICAL_ALPHABET)

const KEY_SIGNATURES_START_NOTES = ["Db", "Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B"]
const keySignatures: Map<string, KeySignature> = new Map<string, KeySignature>()
KEY_SIGNATURES_START_NOTES.map(startNote => {
    keySignatures.set(
        startNote, 
        new KeySignature(startNote, keyboardLayout.getKeyboardLayout())
    )
})

export const Visualizer: React.FC = () => {
    const [prevKey, setPrevKey] = useState("C")
    const [key, setKey] = useState("C");
    const [keySignature, setKeySignature] = useState(keySignatures.get("C"))
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

    useEffect(() => {
        setPrevKey("C")
        setKey("C")
        setKeySignature(keySignatures.get("C"))
    }, [])

    const handleChange = event => {
        event.preventDefault()
        const { value } = event.target
        setPrevKey(key)
        setKey(value)
        setKeySignature(keySignatures.get(value))
        console.log(prevKey)
        console.log(key)
        console.log(keySignature)
    }

    return <>
        <Staff 
            isTrebleClef={true} 
            currKey={key} 
            prevKey={prevKey} 
            keySignature={keySignature} />
        <Staff 
            isTrebleClef={false} 
            currKey={key} 
            prevKey={prevKey} 
            keySignature={keySignature} />

        <select onChange={handleChange}>
            {KEY_SIGNATURES_START_NOTES.map(keySignature =>
                <option 
                    key={keySignature} 
                    value={keySignature} 
                    selected={keySignature.includes("C")}
                >
                    {keySignature}
                </option>
            )}
        </select>
    </>
}