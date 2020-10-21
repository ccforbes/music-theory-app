import React, { useRef, useEffect, SetStateAction } from "react"
import anime, { AnimeInstance, AnimeInstanceParams, AnimeTimelineInstance } from "animejs"
import { TrebleClef } from "./MusicalComponents/TrebleClef"
import { BassClef } from "./MusicalComponents/BassClef"
import { KeySignature } from "../../../types"

const ACCIDENTAL_X_SPACING = 75
const PITCH_Y_SPACING = 25
const ACCIDENTAL_X_POS = Array.from({ length: 7 }, (_, i) => i * ACCIDENTAL_X_SPACING)

const START_NOTE_BUNDLE_X_POS = 540
const NOTE_BUNDLE_SPACING = 175
const NOTE_X_POS = Array.from({ length: 8 }, (_, i) => NOTE_BUNDLE_SPACING * i + START_NOTE_BUNDLE_X_POS)

const INIT_PITCH_Y_POS = 175
const START_PITCH_POS: number[] = Array.from({ length: 7 }, (_, i) => {
    return i * PITCH_Y_SPACING + INIT_PITCH_Y_POS
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

function findKeySignatureLocations(pitchMap: Map<string, number[]>, accidentals: string[], isFlat: boolean) {
        const locations = {}
        const highest = isFlat ? Math.min(...pitchMap.get("E")) : Math.min(...pitchMap.get("G"))
        const lowest = isFlat ? Math.max(...pitchMap.get("F")) : Math.max(...pitchMap.get("A"))
        accidentals.forEach((key: string, index: number) => {
            const positions = pitchMap.get(key)
            const posToUse = positions[0] >= highest && positions[0] <= lowest ? 
                positions[0] : positions[1]
            locations[index + 1] = [ACCIDENTAL_X_POS[index], posToUse]
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
    const classType = isTrebleClef ? "treble" : "bass"
    const startPitchMap = START_PITCH_POS.reduce((lineInfo: {}, position: number, index: number) => {
        lineInfo[orderToUse[index]] = position
        return lineInfo
    }, {})
    const pitchMap: Map<string, number[]> = getLetterPositions(orderToUse)
    const flatAccidentalPositions = findKeySignatureLocations(pitchMap, FLATS, true)
    const sharpAccidentalPositions = findKeySignatureLocations(pitchMap, SHARPS, false)
    
    // get key signature types for prev and curr key signatures
    const prevIsFlat = prevKeySignature.isFlatKeySignature()
    const prevIsSharp = prevKeySignature.isSharpKeySignature()
    const currIsFlat = currKeySignature.isFlatKeySignature()
    const currIsSharp = currKeySignature.isSharpKeySignature()
    const prevAccidentalType = prevIsFlat ? "flat" : prevIsSharp ? "sharp" : ""
    const currAccidentalType = currIsFlat ? "flat" : currIsSharp ? "sharp" : ""
    const prevAccidentalPositionsToUse = prevIsFlat ? flatAccidentalPositions : prevIsSharp ? sharpAccidentalPositions : []
    const currAccidentalPositionsToUse = currIsFlat ? flatAccidentalPositions : currIsSharp ? sharpAccidentalPositions : []

    // get prev and curr root position, and all other note positions
    const prevPos = startPitchMap[findStartPitch(prevRoot)]
    const currPos = startPitchMap[findStartPitch(currRoot)]
    const prevNotePos = NOTE_X_POS.reduce((object: {}, xPos: number, index: number) => {
        object[index + 1] = [xPos, -PITCH_Y_SPACING * index + prevPos]
        return object
    }, {})
    const currNotePos = NOTE_X_POS.reduce((object: {}, xPos: number, index: number) => {
        object[index + 1] = [xPos, -PITCH_Y_SPACING * index + currPos]
        return object
    }, {})

    // get accidental targets for prev and curr key signatures
    const prevAccidentalTargets = prevKeySignature.getAccidentalLocations().map(location => {
        return `.${classType}-notes > .${prevAccidentalType}-${location}`
    })
    const currAccidentalTargets = currKeySignature.getAccidentalLocations().map(location => {
        return `.${classType}-notes > .${currAccidentalType}-${location}`
    })

    // get key signature locations for prev and curr key signatures
    const prevAccidentalLocations = prevKeySignature.getAccidentalOrder()
    const currAccidentalLocations = currKeySignature.getAccidentalOrder()

    // animate when there is a new key signature
    useEffect(() => {
        animationRef.current = anime.timeline()
        animationRef.current.add({
            begin: () => setDisabled(true)
        })
        let prevAnimationPlayed = true

        let numFlats = prevKeySignature.getNumberAccidentals()
        let includesHigherRoot = false
        // remove prev accidentals if there are any
        if (prevAccidentalTargets.length > 0) {
            for (const location of prevAccidentalLocations) {
                if (location == 8) {
                    includesHigherRoot = true
                    continue
                }
                const [startX, startY] = prevAccidentalPositionsToUse[numFlats]
                const [endX, endY] = prevNotePos[location]
                animationRef.current.add({
                    targets: `.${classType}-notes > .${prevAccidentalType}-${location}`,
                    opacity: 0,
                    translateX: `+=${endX - startX}`,
                    translateY: `+=${endY - startY}`
                }, "-=1000")
                numFlats--
            }
            if (includesHigherRoot) {
                const [startX, startY] = prevAccidentalPositionsToUse[1]
                const [endX, endY] = prevNotePos[8]
                animationRef.current.add({
                    targets: `.${classType}-notes > .${prevAccidentalType}-8`,
                    opacity: 0,
                    translateX: `+=${endX - startX}`,
                    translateY: `+=${endY - startY}`
                }, "-=750")
            }
            prevAnimationPlayed = true
        } else {
            prevAnimationPlayed = false
        }

        
        // move notes to new position if it changed
        if (currPos - prevPos !== 0) {

            // check previous ledger lines
            if (prevPos >= 300) {
                animationRef.current.add({
                    targets: `.${classType}-lower-ledger-1`,
                    opacity: 0
                }, "-=1000")
                if (prevPos == 325) {
                    animationRef.current.add({
                        targets: `.${classType}-lower-ledger-2`,
                        opacity: 0
                    }, "-=1000")
                }
            }
            if (prevPos == 175) {
                animationRef.current.add({
                    targets: `.${classType}-higher-ledger`,
                    opacity: 0
                }, "-=1000")
            }

            animationRef.current.add({
                targets: `.${classType}-notes`,
                translateY: `+=${currPos - prevPos}`,
                delay: anime.stagger(150),
            }, prevAnimationPlayed ? "-=700" : "")
            prevAnimationPlayed = true

            // check current ledger lines
            if (currPos >= 300) {
                animationRef.current.add({
                    targets: `.${classType}-lower-ledger-1`,
                    opacity: 1
                }, "-=1000")
                if (currPos == 325) {
                    animationRef.current.add({
                        targets: `.${classType}-lower-ledger-2`,
                        opacity: 1
                    }, "-=1000")
                }
            }
            if (currPos == 175) {
                animationRef.current.add({
                    targets: `.${classType}-higher-ledger`,
                    opacity: 1
                }, "-=1000")
            }
        } else {
            prevAnimationPlayed = false
        }


        // reveal accidentals is there are any
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
        

        // move accidentals if there are any
        numFlats = currKeySignature.getNumberAccidentals()
        includesHigherRoot = false
        for (const location of currAccidentalLocations) {
            if (location == 8) {
                includesHigherRoot = true
                continue
            }
            const [startX, startY] = currNotePos[location]
            const [endX, endY] = currAccidentalPositionsToUse[numFlats]
            animationRef.current.add({
                targets: `.${classType}-notes > .${currAccidentalType}-${location}`,
                translateX: `+=${endX - startX}`,
                translateY: `+=${endY - startY}`
            }, "-=750")
            numFlats--
        }
        if (includesHigherRoot) {
            const [startX, startY] = currNotePos[8]
            const [endX, endY] = currAccidentalPositionsToUse[1]
            animationRef.current.add({
                targets: `.${classType}-notes > .${currAccidentalType}-8`,
                opacity: 0,
                translateX: `+=${endX - startX}`,
                translateY: `+=${endY - startY}`
            }, "-=750")
        }
        animationRef.current.add({
            complete: () => setDisabled(false)
        }, "-=1500")
    }, [currKeySignature])

    return <div className="staff">
        {isTrebleClef ? <TrebleClef /> : <BassClef />}
    </div>
}