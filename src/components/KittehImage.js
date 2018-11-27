import * as React from "react";
import {Image} from "react-native";

export const KittehImage = ({w, h, numKitteh}) =>
    <Image
        source={{uri: `https://placekitten.com/${w}/${h}${numKitteh ? `?image=${numKitteh % 17}` : ''}`}}
        style={{
            width: w,
            height: h,
        }}
    />;


