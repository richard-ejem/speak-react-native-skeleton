// @flow
import React from 'react'
import {FlatList, Text, SafeAreaView, StyleSheet} from 'react-native'

// components
import {RoundedButton} from '../components'
import {Colors} from '../themes'
import Title from "../components/Title";
import RectangleButton from "../components/RectangleButton";

// assets
import ImageKitteh from "../../assets/kitteh.jpeg";
import createCircleImage from "../components/createCircleImage";
import {kittens} from "../data/kittens";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
})

const RoundedKitteh = createCircleImage(ImageKitteh);

export default class RootContainer extends React.PureComponent {

    static navigationOptions = { title: "Home" }

    goToDetail = (index: number) => {
        this.props.navigation.navigate("Detail", {index})
    }

    render()
    {
        return (
            <SafeAreaView style={styles.container}>
                <Title>Teh kitteh ultimate database</Title>
                <RectangleButton onPress={() => null}>Button text</RectangleButton>
                <RoundedKitteh size={100} />
                <FlatList
                    data={kittens}
                    renderItem={({item, index}) =>
                        <RoundedButton
                            key={index}
                            onPress={() => this.goToDetail(index)}>
                            {item.title}
                        </RoundedButton>
                    }
                />
            </SafeAreaView>
        )
    }
}
