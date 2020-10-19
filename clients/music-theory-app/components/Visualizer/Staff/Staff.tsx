import React, { useRef, useEffect, SetStateAction } from "react"
import anime, { AnimeInstance, AnimeInstanceParams, AnimeTimelineInstance } from "animejs"
import { TrebleClef } from "./MusicalComponents/TrebleClef"
import { BassClef } from "./MusicalComponents/BassClef"
import { KeySignature } from "../../../types"

const START_ACCIDENTAL_X_POS = 200
const ACCIDENTAL_X_SPACING = 75
const PITCH_Y_SPACING = 25
const ACCIDENTAL_X_POS = Array.from({ length: 7 }, (_, i) => START_ACCIDENTAL_X_POS + i * ACCIDENTAL_X_SPACING)

const START_PITCH_POS: number[] = Array.from({ length: 7 }, (_, i) => {
    return i * PITCH_Y_SPACING
})
const PITCH_Y_POS: number[] = Array.from({ length: 14 }, (_, i) => {
    return i * PITCH_Y_SPACING
})

const BASS_START_PITCH_ORDER = ["C", "B", "A", "G", "F", "E", "D"]
const TREBLE_START_PITCH_ORDER = ["A", "G", "F", "E", "D", "C", "B"]
const FLATS = ["B", "E", "A", "D", "G", "C", "F"]
const SHARPS = ["F", "C", "G", "D", "A", "E", "B"]

type StaffProps = {
    isTrebleClef: boolean,
    prevRoot: string,
    currRoot: string,
    prevKeySignature: KeySignature,
    currKeySignature: KeySignature,
    setDisabled: React.Dispatch<SetStateAction<boolean>> 
}

function getLetterPositions(orderToUse: string[]): Map<string, number[]> {
    const pitchMap: Map<string, number[]> = new Map<string, number[]>()
    let i = 0
    PITCH_Y_POS.forEach(position => {
        const key = orderToUse[i]
        if (!pitchMap.has(key)) {
            pitchMap.set(orderToUse[i], [])
        }
        const update = pitchMap.get(key)
        update.push(position)
        pitchMap.set(key, update)
        i++
        if (orderToUse.length == i) {
            i = 0
        }
    })
    return pitchMap
}

function findKeySignatureLocations(pitchMap: Map<string, number[]>, accidentals: string[],
    isTrebleClef: boolean, isFlat: boolean) {
        const locations = {}
        const highest = isFlat ? isTrebleClef ? 50 : 100 : isTrebleClef ? 0 : 50
        const lowest = isFlat ? isTrebleClef ? 225 : 275 : isTrebleClef ? 175 : 225
        accidentals.forEach((key: string, index: number) => {
            const positions = pitchMap.get(key)
            const posToUse = positions[0] > highest && positions[0] < lowest ? 
                positions[0] : positions[1]
            locations[key] = [ACCIDENTAL_X_POS[index], posToUse]
        })
        return locations
}

export const Staff: React.FC<StaffProps> = ({ isTrebleClef, currRoot, prevRoot, prevKeySignature, currKeySignature, setDisabled }) => {
    // hooks
    const animationRef = useRef<AnimeTimelineInstance>(null)

    // find start pitch function
    const findStartPitch = (root: string): string => root.includes("b") || root.includes("#") ? root.substring(0, 1) : root

    // figure out staff properties
    const orderToUse = isTrebleClef ? TREBLE_START_PITCH_ORDER : BASS_START_PITCH_ORDER
    const noteBundleType = isTrebleClef ? "treble-notes" : "bass-notes"
    const startPitchMap = START_PITCH_POS.reduce((lineInfo: {}, position: number, index: number) => {
        lineInfo[orderToUse[index]] = position
        return lineInfo
    }, {})
    const pitchMap: Map<string, number[]> = getLetterPositions(orderToUse)
    const flatAccidentalPositions = findKeySignatureLocations(pitchMap, FLATS, isTrebleClef, true)
    const sharpAccidentalPositions = findKeySignatureLocations(pitchMap, SHARPS, isTrebleClef, false)
    
    // get key signature types for prev and curr key signatures
    const prevIsFlat = prevKeySignature.isFlatKeySignature()
    const prevIsSharp = prevKeySignature.isSharpKeySignature()
    const currIsFlat = currKeySignature.isFlatKeySignature()
    const currIsSharp = currKeySignature.isSharpKeySignature()
    const prevAccidentalType = prevIsFlat ? "flat" : prevIsSharp ? "sharp" : ""
    const currAccidentalType = currIsFlat ? "flat" : currIsSharp ? "sharp" : ""

    // get prev and curr root position
    const prevPos = startPitchMap[findStartPitch(prevRoot)]
    const currPos = startPitchMap[findStartPitch(currRoot)]

    // get accidental targets for prev and curr key signatures
    const prevAccidentalTargets = prevKeySignature.getAccidentalLocations().map(location => {
        return `.${noteBundleType} > .${prevAccidentalType}-${location}`
    })
    const currAccidentalTargets = currKeySignature.getAccidentalLocations().map(location => {
        return `.${noteBundleType} > .${currAccidentalType}-${location}`
    })

    // animate when there is a new key signature
    useEffect(() => {
        animationRef.current = anime.timeline()
        animationRef.current.add({
            begin: () => setDisabled(true)
        })
        let prevAnimationPlayed = true
        if (prevAccidentalTargets.length > 0) {
            animationRef.current.add({
                targets: prevAccidentalTargets.join(", "),
                opacity: 0,
                duration: 1000,
                delay: anime.stagger(150),
            }, prevAnimationPlayed ? "-=700" : "")
            prevAnimationPlayed = true
        } else {
            prevAnimationPlayed = false
        }
        if (currPos - prevPos !== 0) {
            animationRef.current.add({
                targets: `.${noteBundleType}`,
                translateY: `+=${currPos - prevPos}`,
                delay: anime.stagger(150),
            }, prevAnimationPlayed ? "-=700" : "")
            prevAnimationPlayed = true
        } else {
            prevAnimationPlayed = false
        }
        if (currAccidentalTargets.length > 0) {
            animationRef.current.add({
                targets: currAccidentalTargets.join(", "),
                opacity: 1,
                duration: 1000,
                delay: anime.stagger(150),
            }, prevAnimationPlayed ? "-=700" : "")
            prevAnimationPlayed = true
        } else {
            prevAnimationPlayed = false
        }
        animationRef.current.add({
            complete: () => setDisabled(false)
        }, "-=1500")
    }, [currKeySignature])

    return <div className="staff">
        {isTrebleClef ? <TrebleClef /> : <BassClef />}
    </div>
}