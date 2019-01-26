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
      navigationOptions: props => ({
        headerLeft: props => (
          <NavButton
            {...props}
            iconName={"ios-arrow-back"}
          />
        ),
        // headerTitle: props.screenProps.username
        headerTitle: props.navigation.state.params.user.username
        // 강의 4-43 에서 4-44 에서 navigationOptions 에 headerTitle
        // 부분에 오류가 있어 profileDetailscreen 에서 수정않고 이곳에서 직접 수정하였다. 
      })
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