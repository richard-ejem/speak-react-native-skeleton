// @flow
import React from 'react'
import {StyleSheet, View} from 'react-native'

// theme
import {Colors, Metrics} from '../themes'

const styles = StyleSheet.create({
    separator: {
        height: 0.5,
        width: `100%`,
        alignSelf: "center",
        backgroundColor: Colors.accentDark,
        // MarginHorizontal doesn't work for some reason.
        // Maybe related to https://github.com/facebook/react-native/issues/14587
        marginLeft: Metrics.sideSpacing,
        marginRight: Metrics.sideSpacing,
    },
});

export const MovieListSeparator = () => <View style={styles.separator} />
