import { MusicalComponentProps } from "./types" 

export const Flat: React.FC<MusicalComponentProps> = ({transformX=0, transformY=0}) => {
    return <>
        <path transform={`translate(${transformX},${transformY})`} d="M26.4894 68.7924C26.4894 73.5241 24.7154 78.056 19.8485 84.1385C14.6925 90.5823 10.3522 94.2704 4.63299 98.6072V70.3639C5.93319 67.0805 7.85053 64.4225 10.3933 62.3817C12.9279 60.3492 15.4954 59.3287 18.0958 59.3287C22.3913 59.3287 25.1151 61.7647 26.2919 66.6198C26.4235 67.0148 26.4894 67.739 26.4894 68.7924ZM25.8722 49.0424C22.3255 49.0424 18.7211 50.0217 15.051 51.9884C11.3808 53.9469 7.90816 56.5721 4.63299 59.839V0H0V102.491C0 105.388 0.790007 106.836 2.36999 106.836C3.28341 106.836 4.41832 106.071 6.11423 105.059C10.9146 102.194 13.9066 100.279 17.1576 98.2596C20.8657 95.9558 25.0411 93.2655 30.5628 87.9989C34.3728 84.1724 37.1296 80.3129 38.8412 76.4288C40.5446 72.5364 41.4004 68.6852 41.4004 64.8586C41.4004 59.197 39.8945 55.1733 36.8827 52.7951C33.4759 50.2934 29.7975 49.0424 25.8722 49.0424Z" fill="black"/>
    </>
}