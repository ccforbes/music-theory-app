import React, { SetStateAction } from "react"
import { KeySignature } from "../../../types/types"
import { Staff } from "./Staff/Staff"
import { Keyboard } from "./Keyboard/Keyboard"
import styles from "./Viewer.module.css"

type ViewerProps = {
    prevRoot: string,
    currRoot: string,
    prevKeySignature: KeySignature,
    currKeySignature: KeySignature,
    setDisableSelector: React.Dispatch<SetStateAction<boolean>>,
    toggle: boolean
}

export const Viewer: React.FC<ViewerProps> = ({ 
    prevRoot, 
    currRoot, 
    prevKeySignature, 
    currKeySignature, 
    setDisableSelector,
    toggle
}) => {
    return <div className={styles.viewer}>
        <div>
            <Staff 
                isTrebleClef={true} 
                currRoot={currRoot} 
                prevRoot={prevRoot} 
                prevKeySignature={prevKeySignature}
                currKeySignature={currKeySignature}
                setDisabled={setDisableSelector} 
                toggle={toggle}
            />
            <Staff 
                isTrebleClef={false} 
                currRoot={currRoot} 
                prevRoot={prevRoot} 
                prevKeySignature={prevKeySignature}
                currKeySignature={currKeySignature}
                setDisabled={setDisableSelector} 
                toggle={toggle}
            />
            <Keyboard 
                prevRoot={prevRoot}
                currRoot={currRoot}
                prevKeySignature={prevKeySignature}
                currKeySignature={currKeySignature}
            />
        </div>
    </div>
}