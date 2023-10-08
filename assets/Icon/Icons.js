import * as React from "react"
import Svg, { Rect, Defs, Pattern, Use, Image, Path, G, LinearGradient, Stop, ClipPath,Circle } from "react-native-svg"



export function ArrowDownSvgComponent(props) {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M24.9 11.188l-8.15 8.15a2.482 2.482 0 01-3.5 0l-8.15-8.15"
                stroke="#022349"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export function ArrowUpSvgComponent(props) {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M5.1 18.813l8.15-8.15a2.482 2.482 0 013.5 0l8.15 8.15"
                stroke="#02234A"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}