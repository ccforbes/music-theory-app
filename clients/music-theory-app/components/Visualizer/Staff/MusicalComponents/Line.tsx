import { MusicalComponentProps } from "./types" 

export const Line: React.FC<MusicalComponentProps> = ({transformX=0, transformY=0}) => {
    return <line y1={transformY} x2={transformX} y2={transformY} stroke="black" strokeWidth="4"/>
}