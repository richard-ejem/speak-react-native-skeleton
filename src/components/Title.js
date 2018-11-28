// @flow
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Colors from "../themes/Colors";

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'impact',
        padding: 10,
        backgroundColor: Colors.accentDark,
        color: Colors.white,
    },
    wrapper: {
        borderBottomColor: Colors.accentDark,
        borderBottomWidth: 2,
    }
});

type Props = {|
    +children: string,
|}

export default class Title extends React.PureComponent<Props> {
    render()
    {
        const {children} = this.props;
        return (
            <View style={styles.wrapper}>
                <Text style={styles.title}>{children}</Text>
            </View>
        )
    }
}
