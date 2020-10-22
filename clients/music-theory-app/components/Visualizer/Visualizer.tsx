import React, { useState } from "react"
import { Staff } from "./Staff/Staff"
import { KeyboardLayout, KeySignature } from "../../types"
import { Keyboard } from "./Keyboard/Keyboard"

const MUSICAL_ALPHABET = ["A", "B", "C", "D", "E", "F", "G"]
const keyboardLayout = new KeyboardLayout(MUSICAL_ALPHABET)

const ROOT_NOTES = ["Cb", "Gb", "Db", "Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B", "F#", "C#"]
const keySignatures: Map<string, KeySignature> = new Map<string, KeySignature>()
ROOT_NOTES.map(startNote => {
    keySignatures.set(
        startNote, 
        new KeySignature(startNote, keyboardLayout.getKeyboardLayout())
    )
})

export const Visualizer: React.FC = () => {
    // initial state
    const [prevRoot, setPrevRoot] = useState("C")
    const [currRoot, setCurrRoot] = useState("C");
    const [prevKeySignature, setPrevKeySignature] = useState(keySignatures.get("C"))
    const [currKeySignature, setCurrKeySignature] = useState(keySignatures.get("C"))
    const [disableSelector, setDisableSelector] = useState(false)

    const handleChange = event => {
        event.preventDefault()
        const { value } = event.target
        setPrevRoot(currRoot)
        setCurrRoot(value)
        setPrevKeySignature(currKeySignature)
        setCurrKeySignature(keySignatures.get(value))
    }

    return <>
        <Staff 
            isTrebleClef={true} 
            currRoot={currRoot} 
            prevRoot={prevRoot} 
            prevKeySignature={prevKeySignature}
            currKeySignature={currKeySignature}
            setDisabled={setDisableSelector} 
        />
        <Staff 
            isTrebleClef={false} 
            currRoot={currRoot} 
            prevRoot={prevRoot} 
            prevKeySignature={prevKeySignature}
            currKeySignature={currKeySignature}
            setDisabled={setDisableSelector} 
        />
        <Keyboard 
            prevRoot={prevRoot}
            currRoot={currRoot}
            prevKeySignature={prevKeySignature}
            currKeySignature={currKeySignature}
        />

        <select id="selector" onChange={handleChange} disabled={disableSelector}>
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