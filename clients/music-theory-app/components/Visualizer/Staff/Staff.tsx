import React, { useRef, useState, useEffect } from "react"
// import { Flat } from "./MusicalComponents/Flat"
// import { Line } from "./MusicalComponents/Line"
// import { Sharp } from "./MusicalComponents/Sharp"
// import { Note } from "./MusicalComponents/Note"
// import { start } from "repl"
import anime, { AnimeInstance, AnimeInstanceParams, AnimeTimelineInstance } from "animejs"
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
    prevRoot: string,
    currRoot: string,
    prevKeySignature: KeySignature,
    currKeySignature: KeySignature
}

export const Staff: React.FC<StaffProps> = ({ isTrebleClef, currRoot, prevRoot, prevKeySignature, currKeySignature }) => {
    const findStartPitch = (root: string): string => root.includes("b") ? root.substring(0, 1) : root

    const orderToUse = isTrebleClef ? TREBLE_PITCH_ORDER : BASS_PITCH_ORDER
    const noteBundleType = isTrebleClef ? "treble-notes" : "bass-notes"
    const pitchMap = PITCH_POS.reduce((lineInfo: {}, position: number, index: number) => {
        lineInfo[orderToUse[index]] = position
        return lineInfo
    }, {})
    const prevIsFlat = prevKeySignature.isFlatKeySignature()
    const prevIsSharp = prevKeySignature.isSharpKeySignature()
    const currIsFlat = currKeySignature.isFlatKeySignature()
    const currIsSharp = currKeySignature.isSharpKeySignature()
    const prevAccidentalType = prevIsFlat ? "flat" : prevIsSharp ? "sharp" : ""
    const currAccidentalType = currIsFlat ? "flat" : currIsSharp ? "sharp" : ""
    const prevPos = pitchMap[findStartPitch(prevRoot)]
    const currPos = pitchMap[findStartPitch(currRoot)]
    const prevAccidentalTargets = prevKeySignature.getAccidentalLocations().map(location => {
        return `.${noteBundleType} > .${prevAccidentalType}-${location}`
    })
    const currAccidentalTargets = currKeySignature.getAccidentalLocations().map(location => {
        return `.${noteBundleType} > .${currAccidentalType}-${location}`
    })
    const animationRef = useRef<AnimeTimelineInstance>(null)
    const testRef = useRef<AnimeInstance>(null)

    useEffect(() => {
        animationRef.current = null
        animationRef.current = anime.timeline({
            loop: false,
            delay: anime.stagger(150)
        })
        console.log("PREV", prevAccidentalTargets.join(", "))
        console.log("CURR", currAccidentalTargets.join(", "))
        animationRef.current
            .add({
                targets: `.${noteBundleType}`,
                translateY: `+=${currPos - prevPos}`,
            })
        if (prevAccidentalTargets.length > 0) {
            animationRef.current
                .add({
                    targets: prevAccidentalTargets.join(", "),
                    opacity: 0,
                    duration: 1000,
                })
            
        }
        if (currAccidentalTargets.length > 0) {
            animationRef.current.add({
                targets: currAccidentalTargets.join(", "),
                opacity: 1,
                duration: 1000,
            })
        }
        // testRef.current = anime({
        //     targets: prevAccidentalTargets.join(", "),
        //     opacity: 0,
        //     duration: 1000,
        // })
        // testRef.current = anime({
        //     targets: `.${noteBundleType}`,
        //     translateY: `+=${currPos - prevPos}`,
        // })
        // testRef.current = anime({
        //     targets: currAccidentalTargets.join(", "),
        //     opacity: 1,
        //     duration: 1000,
        // })
        console.log("done moving notes")
    }, [currPos])
    
    useEffect(() => {console.log("changed")}, [currKeySignature])


    return <div className="staff">
        {isTrebleClef ? <TrebleClef /> : <BassClef />}
    </div>
}