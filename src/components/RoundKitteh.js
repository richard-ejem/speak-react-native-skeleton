import * as React from "react";
import {CircleImage} from "./createCircleImage";

export const RoundKitteh = ({size, numKitteh}) =>
    <CircleImage
        source={{uri: `https://placekitten.com/${size}/${size}${numKitteh ? `?image=${numKitteh % 17}` : ''}`}}
        size={size}
    />;


