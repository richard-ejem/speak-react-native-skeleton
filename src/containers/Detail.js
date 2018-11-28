import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    ScrollView,
    Image,
    Dimensions,
} from "react-native";
import {Colors, Metrics} from "../themes";
import Title from "../components/Title";
import {getMovieImageUrl, loadMovieDetail} from "../api/movies";
import {lolcatize} from "../api/lol";
import {RoundKitteh} from "../components/RoundKitteh";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    loadingView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    loadingText: {
        fontSize: 30,
        marginBottom: Metrics.verticalSpace,
    },
    content: {
        flex: 1,
        paddingHorizontal: Metrics.sideSpacing,
        paddingTop: Metrics.verticalSpace * 1.5,
        paddingBottom: Metrics.verticalSpace,
    },
    overview: {
        fontSize: 18,
        fontFamily: 'quiet-meows',
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
        console.log('***DETAIL', detail);
        detail && console.log(getMovieImageUrl(detail.backdrop_path));
        const deviceWidth = Dimensions.get('window').width;
        return (
            <SafeAreaView style={styles.container}>
                {detail === undefined
                    ? <View style={styles.loadingView}>
                        <RoundKitteh size={120} />
                        <Text style={styles.loadingText}>WAIT PLZ</Text>
                        <ActivityIndicator />
                    </View>
                    : <React.Fragment>
                        <Title>{showLold && loldTitle ? loldTitle : detail.title}</Title>
                        <ScrollView style={styles.content}>
                            <Text style={styles.overview}>
                                {showLold && loldOverview ? loldOverview : detail.overview}
                            </Text>
                        </ScrollView>
                        <TouchableOpacity onPress={this.toggleLold}>
                            <Image
                                source={{uri: getMovieImageUrl(detail.backdrop_path)}}
                                style={{
                                    width: deviceWidth,
                                    height: deviceWidth * 439 / 780,
                                }}
                            />
                        </TouchableOpacity>

                    </React.Fragment>
                }
            </SafeAreaView>
        )
    }
}
