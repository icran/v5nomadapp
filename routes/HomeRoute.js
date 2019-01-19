import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import { NavButton } from "../components/NavButton"

const HomeRoute = createStackNavigator(
  {
    Home: {
      screen: FeedScreen
    },
    Likes: {
      screen: LikesScreen,
      navigationOptions: {
        headerLeft: props => (
          <NavButton {...props} iconName={"ios-arrow-down"} />
        )
      }
    },
    Comments: {
      screen: CommentsScreen
    }
  },
  {
    ...sharedOptions
  }
);

export default createAppContainer(HomeRoute);