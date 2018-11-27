import {createAppContainer, createStackNavigator} from "react-navigation";
import RootContainer from "./RootContainer";
import {Detail} from "./Detail";

export const Navigator = createAppContainer(createStackNavigator({
    Root: {screen: RootContainer},
    Detail: {screen: Detail},
}));
