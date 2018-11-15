// @flow

import {Image} from 'react-native';
import React from "react";

export default function createCircleImage(WrappedImage) {
    return ({size} : {size: number}) => <Image
        style={{
            width: size,
            height: size,
            borderRadius: size / 2,
        }}
        source={WrappedImage}
    />
}
