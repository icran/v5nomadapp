import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes from "./sharedRoutes";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";
// import { IonIcons } from "@expo/vector-icons";
// import { Image } from "react-native";
import NavButton from "../components/NavButton"
// home route 와 navbutton 그리고 sharedroute 쪽으로 다시보기 .

const HomeRoute = createStackNavigator(
  {
    Home: {
      screen: FeedScreen
    },
    //  ...sharedRoutes
    Likes: {
      screen: LikesScreen,
      // navigationOptions: props => ({
      //   headerLeft:() => (
      //     <NavButton
      //     {...props}
      //     iconName = {"ios-arrow-down"}
      //     onPress= {() =>{
      //       console.log("pressed")
      //     }
      //   }
      //     />
      //   )
      // })
      // navigationOptions= {
      //   headerStyle: {
      //     backgroundColor: "red"
      //   },
      // },
      navigationOptions: {
        headerLeft: props => (
          <NavButton
            {...props}
            iconName={"ios-arrow-back"}
          />
        )
        // headerStyle:{
        //   backgroundColor:"red"
        // }
      }
    },
    Comments: {
      screen: CommentsScreen
    }
  },
 
);

    
export default createAppContainer(HomeRoute);