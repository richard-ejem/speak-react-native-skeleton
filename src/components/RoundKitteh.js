import * as React from "react";
import {CircleImage} from "./createCircleImage";

export const RoundKitteh = ({size}) =>
    <CircleImage
        source={{uri: `https://placekitten.com/${size}/${size}`}}
        size={size}
    />;


