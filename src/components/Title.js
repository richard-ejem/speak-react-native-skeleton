// @flow
import React from 'react'
import {StyleSheet, Text} from 'react-native'

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        textDecorationStyle: 'double',
        textDecorationLine: 'underline',
        textDecorationColor: '#f00',
    },
});

type Props = {|
    +children: string,
|}

export default class Title extends React.PureComponent<Props> {
    render()
    {
        const {children} = this.props;
        return (
            <Text style={styles.title}>{children}</Text>
        )
    }
}
