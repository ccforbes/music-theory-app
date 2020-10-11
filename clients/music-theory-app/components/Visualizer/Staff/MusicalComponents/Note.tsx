import { MusicalComponentProps } from "./types"

export const Note: React.FC<MusicalComponentProps> = ({ transformX=0, transformY=0 }) => {
    return <>
        <path transform={`translate(${transformX},${transformY})`} d="M71 24C71 38.3594 50.6061 52 31 52C11.3939 52 0 42.3594 0 28C0 13.6406 19.8939 0 39.5 0C59.1061 0 71 9.6406 71 24Z" fill="black"/>
    </>
}