import React, { useRef } from "react"
import { Flat } from "./MusicalComponents/Flat"
import { Sharp } from "./MusicalComponents/Sharp"
import { Note } from "./MusicalComponents/Note"

const keySignatures: {} = {
    "C": { numAccidentals: 0, flats: false },
    "G": { numAccidentals: 1, flats: false },
    "D": { numAccidentals: 2, flats: false },
    "A": { numAccidentals: 3, flats: false },
    "E": { numAccidentals: 4, flats: false },
    "B": { numAccidentals: 5, flats: false },
    "F": { numAccidentals: 1, flats: true },
    "Bb": { numAccidentals: 2, flats: true },
    "Eb": { numAccidentals: 3, flats: true },
    "Ab": { numAccidentals: 4, flats: true },
    "Db": { numAccidentals: 5, flats: true },
}

export const Staff: React.FC = () => {
    const lineRef = useRef()
    return <div className="staff">
        <svg width="1945" height="356" viewBox="0 0 1945 356" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M114.721 1.00283C101.237 0.653142 85.4673 32.8144 85.9915 61.4965C86.1133 70.2324 88.8737 87.9499 92.9013 110.202C67.501 136.461 38.0061 163.411 38.0061 198.772C37.6011 231.176 57.4284 272.461 104.47 272.064C111.69 272.014 118.187 271.121 123.959 269.582C128.26 293.134 131.12 311.723 131.102 320.31C131.254 354.162 86.727 357.512 84.5927 338.055C93.9771 337.732 101.443 330.287 101.443 321.079C101.443 311.673 93.6467 304.005 83.9715 304.005C78.652 304.005 73.9113 306.337 70.6962 309.986C70.6217 310.06 70.5347 310.135 70.4627 310.209C69.7372 310.978 69.1259 311.897 68.5222 312.939C66.5395 316.289 65.2524 321.104 65.1828 327.979C65.1828 356.321 136.926 374.562 136.926 318.672C137.038 311.152 133.801 292.067 129.085 268.019C180.275 249.529 167.415 173.611 120.312 173.254C116.659 173.291 113.138 173.716 109.752 174.574C107.069 161.676 104.48 149.158 102.219 137.655C120.105 120.106 135.724 97.3906 135.373 55.5253C135.428 25.4609 125.4 1.35276 114.721 1.00283ZM117.904 30.0869C124.006 29.4987 128.851 35.1572 128.851 47.6133C129.346 69.0064 114.341 87.6893 96.4742 106.479C94.7647 96.1869 93.6442 87.8481 93.5224 82.9019C94.0293 49.4821 107.732 31.0672 117.904 30.0869ZM98.7252 140.991C100.904 152.196 103.257 164.002 105.635 175.892C74.4579 186.971 59.4956 230.377 103.694 249.802C76.7537 226.893 90.0141 199.774 109.439 195.049C114.324 219.41 119.094 243.449 122.95 264.221C117.715 266.058 111.605 267.125 104.47 267.175C86.6276 267.175 50.9733 255.833 50.9733 212.886C50.9733 176.915 75.9363 162.297 98.7252 140.991ZM113.867 194.272C114.644 194.225 115.486 194.245 116.272 194.272C148.728 194.272 160.97 245.757 127.92 262.211C123.807 241.563 118.821 217.886 113.867 194.272Z" fill="black" stroke="black"/>
            <line ref={lineRef} id="E4" y1="271" x2="1945" y2="271" stroke="black" stroke-width="4"/>
            <line id="G4" y1="221" x2="1945" y2="221" stroke="black" stroke-width="4"/>
            <line id="B4" y1="171" x2="1945" y2="171" stroke="black" stroke-width="4"/>
            <line id="D5" y1="121" x2="1945" y2="121" stroke="black" stroke-width="4"/>
            <line id="F5" y1="71" x2="1945" y2="71" stroke="black" stroke-width="4"/>
            <Flat transformX={200} transformY={96} />
            <Flat transformX={265} transformY={18} />
            <Flat transformX={330} transformY={118} />
            <Flat transformX={395} transformY={46} />
            <Flat transformX={460} transformY={146} />
        </svg>
        <Sharp />
        <Note />
        <button onClick={() => console.log(lineRef.current)}>Test</button>
    </div>
}