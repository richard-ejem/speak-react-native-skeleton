/* eslint-disable global-require */
// @flow
import React from 'react';
import {Font} from 'expo';

import {ActivityIndicator} from "react-native";
// containers
import {Navigator} from "./src/containers/Navigator";

export default class App extends React.PureComponent<null> {
    state = {
        loading: true,
    }

    async componentDidMount()
    {
        await Font.loadAsync({
            'impact': require('./assets/fonts/impact.ttf'),
            'quiet-meows': require('./assets/fonts/quiet-meows.ttf'),
        })
        this.setState({loading: false})
    }

    render()
    {
        return this.state.loading ? <ActivityIndicator/> : <Navigator/>;
    }
}
