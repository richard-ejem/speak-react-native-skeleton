// @flow
import React from 'react'
import {Text, SafeAreaView, StyleSheet} from 'react-native'

// components
import {RoundedButton} from '../components'
import {Colors} from '../themes'
import Title from "../components/Title";
import RectangleButton from "../components/RectangleButton";

// assets
import ImageKitteh from "../../assets/kitteh.jpeg";
import createCircleImage from "../components/createCircleImage";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
})

const RoundedKitteh = createCircleImage(ImageKitteh);

export default class RootContainer extends React.PureComponent<null> {
    render()
    {
        return (
            <SafeAreaView style={styles.container}>
                <Title> Hi ya!</Title>
                <Text>Text!</Text>
                <RoundedButton onPress={() => null}>Button text</RoundedButton>
                <RectangleButton onPress={() => null}>Button text</RectangleButton>
                <RoundedKitteh size={100} />
            </SafeAreaView>
        )
    }
}
