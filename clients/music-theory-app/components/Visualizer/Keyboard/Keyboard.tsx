import React, { Key, useEffect, useRef } from "react"
import anime, { AnimeTimelineInstance } from "animejs"
import { KeySignature, KeyboardLayout } from "../../../types"
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants"

type KeyboardProps = {
    prevRoot: string,
    currRoot: string,
    prevKeySignature: KeySignature,
    currKeySignature: KeySignature
}

const KEY_SPACING = 60
const KEYBOARD_LAYOUT = new KeyboardLayout(["C", "D", "E", "F", "G", "A", "B"])
const NOTES = KEYBOARD_LAYOUT.getKeyboardLayout()
const lastNote = NOTES.pop()
NOTES.unshift(lastNote)
console.log(NOTES)
const KEY_LOCATION_MAP: Map<string, number> = new Map<string, number>()
NOTES.forEach((note, index) => {
    note.getLabels().forEach(label => {
        KEY_LOCATION_MAP.set(label, index * KEY_SPACING)
    })
})
console.log(KEY_LOCATION_MAP)

export const Keyboard: React.FC<KeyboardProps> = ({ prevRoot, currRoot, prevKeySignature, currKeySignature }) => {
    const animationRef = useRef<AnimeTimelineInstance>(null)

    const prevPos = KEY_LOCATION_MAP.get(prevRoot)
    const currPos = KEY_LOCATION_MAP.get(currRoot)
    const prevNotes = prevKeySignature.getNotes()
    const currNotes = currKeySignature.getNotes()
    const prevNoteLabels = prevKeySignature.getNoteLabels()
    const currNoteLabels = currKeySignature.getNoteLabels()

    useEffect(() => {
        animationRef.current = anime.timeline()
        // for (let i = 0; i < prevNotes.length; i++) {
        //     const color = prevNotes[i].isBlackNote() ? "#000000" : "#FFFFFF"
        //     const targets = []
        //     prevNotes[i].getLabels().forEach(label => {
        //         targets.push(`.${label}`)
        //     })
        //     console.log(prevNoteLabels[i], prevNotes[i].isBlackNote())
        //     console.log(targets.join(", "))
        //     const label = prevNoteLabels[i]
        //     animationRef.current.add({
        //         targets: `.${label}`,
        //         fill: color,
        //     }, "-=750")
        // }

        animationRef.current.add({
            targets: ".arrow",
            translateX: `+=${currPos - prevPos}`,
            easing: "easeInOutExpo"
        })

        // for (let i = 0; i < currNotes.length; i++) {
        //     const color = currNotes[i].isBlackNote() ? "#156ED7" : "#138BFA"
        //     const targets = []
        //     currNotes[i].getLabels().forEach(label => {
        //         targets.push(`.${label}`)
        //     })
        //     console.log(targets.join(" "))
        //     const label = currNoteLabels[i]
        //     animationRef.current.add({
        //         targets: `.${label}`,
        //         fill: color,
        //     }, "-=750")
        // }
    }, [currKeySignature])

    return <>
        <svg width="90%" viewBox="0 0 2500 550" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="arrow" d="M1284.94 100.061C1285.53 100.646 1286.47 100.646 1287.06 100.061L1296.61 90.5147C1297.19 89.9289 1297.19 88.9792 1296.61 88.3934C1296.02 87.8076 1295.07 87.8076 1294.49 88.3934L1286 96.8787L1277.51 88.3934C1276.93 87.8076 1275.98 87.8076 1275.39 88.3934C1274.81 88.9792 1274.81 89.9289 1275.39 90.5147L1284.94 100.061ZM567.5 99C567.5 81.4655 574.785 68.3928 585.687 59.6713C596.627 50.9193 611.28 46.5 626 46.5C640.72 46.5 655.373 50.9193 666.313 59.6713C677.215 68.3929 684.5 81.4655 684.5 99H687.5C687.5 80.5345 679.785 66.6072 668.187 57.3287C656.627 48.0808 641.28 43.5 626 43.5C610.72 43.5 595.373 48.0807 583.813 57.3287C572.215 66.6072 564.5 80.5345 564.5 99H567.5ZM687.5 99C687.5 81.4655 694.785 68.3928 705.687 59.6713C716.627 50.9193 731.28 46.5 746 46.5C760.72 46.5 775.373 50.9193 786.313 59.6713C797.215 68.3929 804.5 81.4655 804.5 99H807.5C807.5 80.5345 799.785 66.6072 788.187 57.3287C776.627 48.0808 761.28 43.5 746 43.5C730.72 43.5 715.373 48.0807 703.813 57.3287C692.215 66.6072 684.5 80.5345 684.5 99H687.5ZM807.5 99C807.5 81.1901 811.213 67.9896 816.647 59.295C822.079 50.6041 829.153 46.5 836 46.5C842.847 46.5 849.921 50.6041 855.353 59.295C860.787 67.9897 864.5 81.1901 864.5 99H867.5C867.5 80.8099 863.713 67.0104 857.897 57.705C852.079 48.3959 844.153 43.5 836 43.5C827.847 43.5 819.921 48.3959 814.103 57.705C808.287 67.0103 804.5 80.8099 804.5 99H807.5ZM867.5 99C867.5 81.4655 874.785 68.3928 885.687 59.6713C896.627 50.9193 911.28 46.5 926 46.5C940.72 46.5 955.373 50.9193 966.313 59.6713C977.215 68.3929 984.5 81.4655 984.5 99H987.5C987.5 80.5345 979.785 66.6072 968.187 57.3287C956.627 48.0808 941.28 43.5 926 43.5C910.72 43.5 895.373 48.0807 883.813 57.3287C872.215 66.6072 864.5 80.5345 864.5 99H867.5ZM987.5 99C987.5 81.4655 994.785 68.3928 1005.69 59.6713C1016.63 50.9193 1031.28 46.5 1046 46.5C1060.72 46.5 1075.37 50.9193 1086.31 59.6713C1097.21 68.3929 1104.5 81.4655 1104.5 99H1107.5C1107.5 80.5345 1099.79 66.6072 1088.19 57.3287C1076.63 48.0808 1061.28 43.5 1046 43.5C1030.72 43.5 1015.37 48.0807 1003.81 57.3287C992.215 66.6072 984.5 80.5345 984.5 99H987.5ZM1107.5 99C1107.5 81.4655 1114.79 68.3928 1125.69 59.6713C1136.63 50.9193 1151.28 46.5 1166 46.5C1180.72 46.5 1195.37 50.9193 1206.31 59.6713C1217.21 68.3929 1224.5 81.4655 1224.5 99H1227.5C1227.5 80.5345 1219.79 66.6072 1208.19 57.3287C1196.63 48.0808 1181.28 43.5 1166 43.5C1150.72 43.5 1135.37 48.0807 1123.81 57.3287C1112.21 66.6072 1104.5 80.5345 1104.5 99H1107.5ZM1227.5 99C1227.5 81.1901 1231.21 67.9896 1236.65 59.295C1242.08 50.6041 1249.15 46.5 1256 46.5C1262.85 46.5 1269.92 50.6041 1275.35 59.295C1280.79 67.9897 1284.5 81.1901 1284.5 99H1287.5C1287.5 80.8099 1283.71 67.0104 1277.9 57.705C1272.08 48.3959 1264.15 43.5 1256 43.5C1247.85 43.5 1239.92 48.3959 1234.1 57.705C1228.29 67.0103 1224.5 80.8099 1224.5 99H1227.5Z" fill="black" />
            <rect className="B# C" x="542" y="106" width="98" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="D" x="644" y="106" width="97" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="E Fb" x="745" y="106" width="97" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="E# F" x="846" y="106" width="98" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="G" x="948" y="106" width="97" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="A" x="1049" y="106" width="97" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="B Cb" x="1150" y="106" width="98" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="B# C" x="1252" y="106" width="98" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="D" x="1354" y="106" width="97" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="E Fb" x="1455" y="106" width="98" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="E# F" x="1557" y="106" width="97" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="G" x="1658" y="106" width="98" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="A" x="1760" y="106" width="96" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="B Cb" x="1860" y="106" width="98" height="396" fill="white" stroke="black" strokeWidth="4" />
            <rect className="C# Db" x="599" y="107" width="60" height="240" fill="black" stroke="black" strokeWidth="4" />
            <rect className="D# Eb" x="718" y="107" width="61" height="240" fill="black" stroke="black" strokeWidth="4" />
            <rect className="F# Gb" x="898" y="107" width="59" height="240" fill="black" stroke="black" strokeWidth="4" />
            <rect className="G# Ab" x="1017" y="107" width="59" height="240" fill="black" stroke="black" strokeWidth="4" />
            <rect className="A# Bb" x="1136" y="107" width="58" height="240" fill="black" stroke="black" strokeWidth="4" />
            <rect className="C# Db" x="1313" y="107" width="60" height="240" fill="black" stroke="black" strokeWidth="4" />
            <rect className="D# Eb" x="1432" y="107" width="60" height="240" fill="black" stroke="black" strokeWidth="4" />
            <rect className="F# Gb" x="1610" y="107" width="59" height="240" fill="black" stroke="black" strokeWidth="4" />
            <rect className="G# Ab" x="1730" y="107" width="60" height="240" fill="black" stroke="black" strokeWidth="4" />
            <rect className="A# Bb" x="1847" y="107" width="59" height="240" fill="black" stroke="black" strokeWidth="4" />
        </svg>

    </>
}