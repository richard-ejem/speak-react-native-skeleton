import React from 'react';
import {StyleSheet, SafeAreaView, Text} from "react-native";
import {Colors} from "../themes";
import {kittens} from "../data/kittens";
import {RoundKitteh} from "../components/RoundKitteh";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
})

export class Detail extends React.PureComponent<null> {
    render() {
        const {index} = this.props.navigation.state.params;
        const kitten = kittens[index];
        return (
            <SafeAreaView style={styles.container}>
                <Text>{kitten.title}</Text>
                <RoundKitteh size={kitten.size} />
            </SafeAreaView>
        )
    }
}
