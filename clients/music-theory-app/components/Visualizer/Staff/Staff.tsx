import React, { useRef, useState, useEffect } from "react"
// import { Flat } from "./MusicalComponents/Flat"
// import { Line } from "./MusicalComponents/Line"
// import { Sharp } from "./MusicalComponents/Sharp"
// import { Note } from "./MusicalComponents/Note"
// import { start } from "repl"
import anime, { AnimeTimelineInstance } from "animejs"
import { TrebleClef } from "./MusicalComponents/TrebleClef"
import { BassClef } from "./MusicalComponents/BassClef"
import { KeySignature } from "../../../types"

const VIEW_BOX_POS = {
    startX: 0,
    startY: 0,
    endX: 2000,
    endY: 400,
}

const LINE_INIT_POS: number = VIEW_BOX_POS.endY * 6 / 16

const PITCH_POS: number[] = Array.from({ length: 7 }, (_, i) => {
    return LINE_INIT_POS + (i * 25)
})

const BASS_PITCH_ORDER = ["C", "B", "A", "G", "F", "E", "D"]
const TREBLE_PITCH_ORDER = ["A", "G", "F", "E", "D", "C", "B"]
const KEY_SIGNATURES = ["Db", "Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B"]

type StaffProps = {
    isTrebleClef: boolean,
    prevKey: string,
    currKey: string,
    keySignature: KeySignature,
}

export const Staff: React.FC<StaffProps> = ({ isTrebleClef, currKey, prevKey, keySignature }) => {
    const orderToUse = isTrebleClef ? TREBLE_PITCH_ORDER : BASS_PITCH_ORDER
    const noteBundleType = isTrebleClef ? "treble-notes" : "bass-notes" 
    const pitchMap = PITCH_POS.reduce((lineInfo: {}, position: number, index: number) => {
        lineInfo[orderToUse[index]] = position
        return lineInfo
    }, {})
    const isFlat = keySignature.isFlatKeySignature()
    const isSharp = keySignature.isSharpKeySignature()
    const accidentalType = isFlat ? "flat" : isSharp ? "sharp" : ""
    const accidentalTargets = keySignature.getAccidentalLocations().map(location => {
        return `.${accidentalType}-${location}`
    })
    const targets = accidentalTargets.join(", ")
    const [prevPos, setPrevPos] = useState(pitchMap[prevKey])
    const [currPos, setCurrPos] = useState(pitchMap[currKey])
    const [prevTargets, setPrevTargets] = useState(keySignature.getAccidentalLocations().map(location => {
        return `.${accidentalType}-${location}`
    }))
    const [currTargets, setCurrTargets] = useState(keySignature.getAccidentalLocations().map(location => {
        return `.${accidentalType}-${location}`
    }))
    const animationRef = useRef<AnimeTimelineInstance>(null)
    
    useEffect(() => {
        setPrevPos(pitchMap[prevKey])
        setCurrPos(pitchMap[currKey])
        setCurrTargets(keySignature.getAccidentalLocations().map(location => {
            return `.${accidentalType}-${location}`
        }))
    }, [])

    useEffect(() => {
        const startKey: string = findStartKey(currKey)
        setPrevPos(currPos)
        setCurrPos(pitchMap[startKey])
        setPrevTargets(currTargets)
        setCurrTargets(keySignature.getAccidentalLocations().map(location => {
            return `.${accidentalType}-${location}`
        }))
    }, [currKey])

    useEffect(() => {
        animationRef.current = anime.timeline({
            loop: false,
            delay: anime.stagger(150)
        })

        animationRef.current.add({
            targets: prevTargets.join(", "),
            opacity: 0,
            duration: 1000
        }).add({
            targets: `.${noteBundleType}`,
            translateY: `+=${currPos - prevPos}`,
        })
    }, [currPos])

    useEffect(() => {
        animationRef.current.add({
            targets: currTargets.join(", "),
            opacity: 1,
            duration: 1000,
            begin: () => {
                console.log(currTargets)
            }
        })
        
    }, [currTargets])

    const findStartKey = (key: string): string => key.includes("b") ? key.substring(0, 1) : key

    return <div className="staff">
        {isTrebleClef ? <TrebleClef /> : <BassClef />}
    </div>
}