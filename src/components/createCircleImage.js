// @flow

import {Image} from 'react-native';
import React from "react";

export const CircleImage = ({source, size}) =>
    <Image
        style={{
            width: size,
            height: size,
            borderRadius: size / 2,
        }}
        source={source}
    />;

export default function createCircleImage(WrappedImage) {
    return ({size} : {size: number}) => <CircleImage size={size} source={WrappedImage}/>
}
