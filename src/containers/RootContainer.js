// @flow
import React from 'react'
import {FlatList, Text, SafeAreaView, StyleSheet} from 'react-native'

// components
import {RoundedButton} from '../components'
import {Colors} from '../themes'
import Title from "../components/Title";
import {RoundKitteh} from "../components/RoundKitteh";
import {loadMovies} from "../api/movies";
import {RectangleButton} from "../components/RectangleButton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
})

export default class RootContainer extends React.PureComponent {


    static navigationOptions = { title: "Home" };

    state = {
        loading: false,
        page: 1,
        movies: [],
    }

    componentDidMount() {
        this.loadNextPage()
    }

    goToDetail = (id) => {
        this.props.navigation.navigate("Detail", {id})
    }

    loadNextPage = async () => {
        if (this.state.loading) {
            return false;
        }
        this.setState((prevState) => {
            if (prevState.loading) {
                return null;
            }
            loadMovies(prevState.page).then(this.updateResults);
            return {
                loading: true,
                page: prevState.page + 1,
            };
        });
    };

    updateResults = result => {
        this.setState((prevState) => ({
            loading: false,
            movies: [...prevState.movies, ...result.data.results],
        }));
    };

    render()
    {
        console.log(this.state.movies)
        return (
            <SafeAreaView style={styles.container}>
                <Title>Teh ultimet meowie databez</Title>

                    :
                    <FlatList
                        data={this.state.movies}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item, index}) =>
                            <RectangleButton
                                key={index}
                                onPress={() => this.goToDetail(item.id)}>
                                {item.title}
                            </RectangleButton>
                        }
                    />
                }
                {this.state.loading &&
                    <React.Fragment>
                        <Text>WAIT PLZ</Text>
                        <RoundKitteh size={50}/>
                    </React.Fragment>
                }
            </SafeAreaView>
        )
    }
}
