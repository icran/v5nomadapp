import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes,{sharedOptions} from "./sharedRoutes";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import ProfileDetailScreen from "../screens/ProfileDetailScreen"
import PhotoScreen from "../screens/PhotoScreen"
// import { IoniIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import NavButton from "../components/NavButton"
// home route 와 navbutton 그리고 sharedroute 쪽으로 다시보기 .

const HomeRoute = createStackNavigator(
  {
    Home: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
          <Image
            source={require("../assets/logo.png")}
            style={{ height: 35 }}
            resizeMode={"contain"}
          />
        ),
        headerLeft: (
          <NavButton
            iconName={"ios-camera"}
            onPress={() => navigation.navigate("TakePhoto")}

          />
        )
      })
    },
    //  ...sharedRoutes
    Likes: {
      screen: LikesScreen,

      navigationOptions: {
        headerLeft: props => (
          <NavButton
            {...props}
            iconName={"ios-arrow-back"}
          />
        ),
        headerTitle:"Likes"
      }
    },
    Comments: {
      screen: CommentsScreen,
      navigationOptions:{
        headerLeft: props => (
          <NavButton
            {...props}
            iconName={"ios-arrow-back"}
          />
        ),
        headerTitle:"Comments"
      }
    },
    ProfileDetail: {
      screen: ProfileDetailScreen,
      navigationOptions: {
        headerLeft: props => (
          <NavButton
            {...props}
            iconName={"ios-arrow-back"}
          />
        ),
        headerTitle: "Comments"
      }
    },
    Photo: {
      screen: PhotoScreen,
      navigationOptions: {
        headerTitle: "Photo"
      }
    }

  },
 
);

// const HomeRoute = createStackNavigator(
//   {
//     Home: {
//       screen: FeedScreen
//     },
//    ...sharedRoutes
//   },
//   {
//     ...sharedOptions
//   }

// );


export default createAppContainer(HomeRoute);