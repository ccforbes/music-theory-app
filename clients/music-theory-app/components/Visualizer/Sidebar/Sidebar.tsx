import { getPackedSettings } from "http2"
import React, { useState, SetStateAction } from "react"
import { KeySignature, KeyboardLayout } from "../../../types/types"
import styles from "./Sidebar.module.css"

const MUSICAL_ALPHABET = ["A", "B", "C", "D", "E", "F", "G"]
const keyboardLayout = new KeyboardLayout(MUSICAL_ALPHABET)

const ROOT_NOTES: string[] = ["C♭", "G♭", "D♭", "A♭", "E♭", "B♭", "F", "C", "G", "D", "A", "E", "B", "F♯", "C♯"]
const keySignatures: Map<string, KeySignature> = new Map<string, KeySignature>()
ROOT_NOTES.map(startNote => {
    keySignatures.set(
        startNote, 
        new KeySignature(startNote, keyboardLayout.getKeyboardLayout())
    )
})
const MODES: string[] = [
    "Ionian - Major",
    "Dorian (Coming Soon)",
    "Phrygian (Coming Soon)",
    "Lydian (Coming Soon)",
    "Mixolydian (Coming Soon)",
    "Aeolian - Minor (Coming Soon)",
    "Locrian (Coming Soon)",
]

const initialSettings = {
    root: "C",
    mode: "Ionian - Major"
}

type SidebarProps = {
    currRoot: string,
    currKeySignature: KeySignature,
    setPrevRoot: React.Dispatch<SetStateAction<string>>,
    setCurrRoot: React.Dispatch<SetStateAction<string>>,
    setPrevKeySignature: React.Dispatch<SetStateAction<KeySignature>>,
    setCurrKeySignature: React.Dispatch<SetStateAction<KeySignature>>,
    disableSelector: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({ currRoot, currKeySignature, setPrevRoot, setCurrRoot, setPrevKeySignature, setCurrKeySignature, disableSelector }) => {
    const [settings, setSettings] = useState(initialSettings)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target
        console.log(name)
        console.log(value)
        setSettings({
            ...settings,
            [name]: value
        })
    }

    const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
        console.log("clicked")
        event.preventDefault()
        setPrevRoot(currRoot)
        setCurrRoot(settings.root)
        setPrevKeySignature(currKeySignature)
        setCurrKeySignature(keySignatures.get(settings.root))
    }

    return <div className={styles.sidebar}>
        <div className="musical-scale-settings">
            <h3>Musical Scale</h3>
            <label htmlFor="root-select">Root</label>
            <select 
                id="root-select" 
                name="root"
                onChange={handleChange} 
                defaultValue={initialSettings.root}
            >
                {ROOT_NOTES.map((root) => 
                    <option key={root} value={root}>
                        {root}
                    </option>
                )}
            </select>

            <label htmlFor="mode-select">Mode</label>
            <select 
                id="mode-select"
                name="mode"
                onChange={handleChange} 
                defaultValue={initialSettings.mode}
            >
                {MODES.map((mode) => 
                    <option 
                        key={mode} 
                        value={mode} 
                        disabled={mode.includes("Coming Soon")}
                    >
                        {mode}
                    </option>
                )}
            </select>
        </div>

        <div className="animation-settings">
            <h3>Animation</h3>
            <button disabled>Back</button>
            <button disabled={disableSelector} onClick={handleClick}>Play</button>
            <button disabled>Next</button>
        </div>
    </div>
}