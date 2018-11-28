// @flow
import React from 'react'
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
} from 'react-native'

// components
import {Colors} from '../themes'
import Title from "../components/Title";
import {loadMovies} from "../api/movies";
import {MovieListItem} from "../components/MovieListItem";
import {MovieListSeparator} from "../components/MovieListSeparator";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
})

const keyExtractor = (item) => item.id.toString();

export default class RootContainer extends React.PureComponent {

    static navigationOptions = { title: "Hoem" };

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

                <FlatList
                    data={this.state.movies}
                    keyExtractor={keyExtractor}
                    onEndReached={this.loadNextPage}
                    onEndReachedThreshold={0}
                    renderItem={({item, index}) =>
                        <MovieListItem
                            key={index}
                            onPress={() => this.goToDetail(item.id)}
                            movie={item}
                            number={index + 1}
                        />
                    }
                    ListFooterComponent={
                        this.state.loading
                            ? ActivityIndicator
                            : undefined
                    }
                    ItemSeparatorComponent={MovieListSeparator}
                />
            </SafeAreaView>
        )
    }
}
