// @flow
import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {ListItem} from 'react-native-elements'

// theme
import {Colors} from '../themes'

const styles = StyleSheet.create({
    listitem: {
        borderBottomWidth: 0,
    },
});

export class MovieListItem extends React.PureComponent<Props> {
    render()
    {
        const {movie, onPress, number} = this.props;
        return (
            <ListItem
                onPress={onPress}
                title={`${number}. ${movie.lolTitle || movie.title}`}
                subtitle={`${movie.vote_average}*`}
                fontFamily="quiet-meows"
                chevronColor={Colors.primary}
                containerStyle={styles.listitem}
            />
            //     <TouchableOpacity onPress={onPress} style={styles.button}>
            //         <Text style={styles.buttonText}>{children}</Text>
            //     </TouchableOpacity>
            // </ListItem>
        )
    }
}
