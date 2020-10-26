import React, { CSSProperties, useState } from "react"
import { Staff } from "./Viewer/Staff/Staff"
import { KeyboardLayout, KeySignature } from "../../types/types"
import { Keyboard } from "./Viewer/Keyboard/Keyboard"
import styles from "./Visualizer.module.css"
import { Viewer } from "./Viewer/Viewer"
import { Sidebar } from "./Sidebar/Sidebar"

const MUSICAL_ALPHABET = ["A", "B", "C", "D", "E", "F", "G"]
const keyboardLayout = new KeyboardLayout(MUSICAL_ALPHABET)

const ROOT_NOTES = ["C♭", "G♭", "D♭", "A♭", "E♭", "B♭", "F", "C", "G", "D", "A", "E", "B", "F♯", "C♯"]
const keySignatures: Map<string, KeySignature> = new Map<string, KeySignature>()
ROOT_NOTES.map(startNote => {
    keySignatures.set(
        startNote, 
        new KeySignature(startNote, keyboardLayout.getKeyboardLayout())
    )
})

// const initStyle: CSSProperties = {
//     position: "absolute",
//     left: "50%",
//     top: "50%"
// }

export const Visualizer: React.FC = () => {
    // initial state
    const [prevRoot, setPrevRoot] = useState("C")
    const [currRoot, setCurrRoot] = useState("C");
    const [prevKeySignature, setPrevKeySignature] = useState(keySignatures.get("C"))
    const [currKeySignature, setCurrKeySignature] = useState(keySignatures.get("C"))
    const [disableSelector, setDisableSelector] = useState(false)

    // const handleChange = event => {
    //     event.preventDefault()
    //     const { value } = event.target
    //     setPrevRoot(currRoot)
    //     setCurrRoot(value)
    //     setPrevKeySignature(currKeySignature)
    //     setCurrKeySignature(keySignatures.get(value))
    // }

    return <div className={styles.visualizer}>
        <Viewer 
            prevRoot={prevRoot}
            currRoot={currRoot}
            prevKeySignature={prevKeySignature}
            currKeySignature={currKeySignature}
            setDisableSelector={setDisableSelector}
        />
        <Sidebar
            currRoot={currRoot}
            currKeySignature={currKeySignature}
            setPrevRoot={setPrevRoot}
            setCurrRoot={setCurrRoot}
            setPrevKeySignature={setPrevKeySignature}
            setCurrKeySignature={setCurrKeySignature}
            disableSelector={disableSelector}
        />
        {/* <Staff 
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
        /> */}


        {/* <select id="selector" onChange={handleChange} defaultValue={"C"} disabled={disableSelector}>
            {ROOT_NOTES.map(rootNote =>
                <option 
                    key={rootNote} 
                    value={rootNote} 
                >
                    {rootNote}
                </option>
            )}
        </select> */}
    </div>


}