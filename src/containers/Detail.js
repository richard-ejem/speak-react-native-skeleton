import React from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from "react-native";
import {Colors} from "../themes";
import {RoundKitteh} from "../components/RoundKitteh";
import Title from "../components/Title";
import {loadMovieDetail} from "../api/movies";
import {KittehImage} from "../components/KittehImage";
import {lolcatize} from "../api/lol";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
})

export class Detail extends React.PureComponent<null> {
    state = {
        detail: undefined,
        loldOverview: undefined,
        loldTitle: undefined,
        showLold: true,
    };

    componentDidMount() {
        const {id} = this.props.navigation.state.params;
        loadMovieDetail(id).then(response => {
            this.setState({detail: response.data});
            lolcatize(response.data.overview).then(
                loldOverview => this.setState({loldOverview})
            )
            lolcatize(response.data.title).then(
                loldTitle => this.setState({loldTitle})
            )
        });
    }

    toggleLold = () => {
        this.setState(({showLold}) => ({showLold: !showLold}))
    }

    render() {
        const {detail, loldOverview, showLold, loldTitle} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                {detail === undefined
                    ? <React.Fragment>
                        <Text>WAIT PLZ</Text>
                        <RoundKitteh size={100} numKitteh={2}/>
                    </React.Fragment>
                    : <React.Fragment>
                        <Title>{showLold && loldTitle ? loldTitle : detail.title}</Title>
                        <Text>Adultz only: {detail.adult ? 'YEZ' : 'NO'}</Text>
                        <TouchableOpacity
                            onPress={this.toggleLold}
                        >
                        <KittehImage
                            w={300}
                            h={200}
                            numKitteh={detail.adult ? 15 : 8}
                        />
                        </TouchableOpacity>
                        <Text>{
                            showLold && loldOverview ? loldOverview : detail.overview
                        }</Text>

                    </React.Fragment>
                }
            </SafeAreaView>
        )
    }
}
