// @flow
import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

// theme
import {Colors, Metrics} from '../themes'

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        borderWidth: 2,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        padding: Metrics.buttons.padding,
        borderRadius: 2,
        justifyContent: 'center',
    },
    buttonText: {
        color: Colors.background,
    }
});

type Props = {|
    +onPress: () => void,
    +children: string,
|}

export default class RoundedButton extends React.PureComponent<Props> {
    render()
    {
        const {children, onPress} = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{children}</Text>
            </TouchableOpacity>
        )
    }
}
