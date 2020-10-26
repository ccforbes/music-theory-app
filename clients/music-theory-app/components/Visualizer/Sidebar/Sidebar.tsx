import React, { useState, SetStateAction, CSSProperties } from "react"
import { KeySignature, KeyboardLayout } from "../../../types/types"
import styles from "./Sidebar.module.css"
import { Form, Button } from "react-bootstrap"

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

const initStyle: React.CSSProperties = {
    textAlign: "center"
}

export const Sidebar: React.FC<SidebarProps> = ({ currRoot, currKeySignature, setPrevRoot, setCurrRoot, setPrevKeySignature, setCurrKeySignature, disableSelector }) => {
    const [settings, setSettings] = useState(initialSettings)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target
        setSettings({
            ...settings,
            [name]: value
        })
    }

    const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.preventDefault()
        setPrevRoot(currRoot)
        setCurrRoot(settings.root)
        setPrevKeySignature(currKeySignature)
        setCurrKeySignature(keySignatures.get(settings.root))
    }

    return <div className={styles.sidebar}>
        <Form className={styles.settings}>
            <h3 className={styles.title}>Musical Scale</h3>
            <div className={styles.musicScaleSettings}>
                <Form.Group className="root-select" style={initStyle}>
                    <Form.Label>Root</Form.Label>
                    <Form.Control
                        as="select"
                        name="root"
                        onChange={handleChange}
                        defaultValue={initialSettings.root}
                    >
                        {ROOT_NOTES.map((root) => 
                            <option key={root} value={root}>
                                {root}
                            </option>
                        )}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mode-select" style={initStyle}>
                    <Form.Label>Mode</Form.Label>
                    <Form.Control
                        as="select"
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
                    </Form.Control>
                </Form.Group>
            </div>
        </Form>

        <style type="text/css">
            {`
            .btn-primary {
                background-color: #1C6E8C;
            }

            .btn-secondary {
                background-color: #274156;
            }
            `}
        </style>

        <div className={styles.settings}>
            <h3 className={styles.title}>Animation</h3>
            <div className={styles.animationSettings}>
                <Button variant="secondary" disabled>Back</Button>
                <Button variant="primary" disabled={disableSelector} onClick={handleClick}>Play</Button>
                <Button variant="secondary" disabled>Next</Button>
            </div>
        </div>
    </div>
}