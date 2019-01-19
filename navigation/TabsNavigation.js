import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import HomeRoute from "../routes/HomeRoute";
import SearchRoute from "../routes/SearchRoute";
import NotificationsRoute from "../routes/NotificationsRoute";
import ProfileRoute from "../routes/ProfileRoute";
import { Ionicons } from "@expo/vector-icons";


const TabsNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-home"
            size={30}
            color={focused ? "#4dabf7" : "gray"}
          />
        )
      }
    },
    Search: {
      screen: SearchRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-search"
            size={30}
            color={focused ? "#4dabf7" : "gray"}
          />
        )
      }
    },
    AddPhoto:{
      screen:View,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-add-circle-outline"
            size={30}
            color={focused ? "#4dabf7" : "gray"}
          />
        )
      }
    },
    Notifications: {
      screen: NotificationsRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-heart"
            size={30}
            color={focused ? "#4dabf7" : "gray"}
          />
        )
      }
    },
    Profile: {
      screen: ProfileRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-person"
            size={30}
            color={focused ? "#4dabf7" : "gray"}
          />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#FBFBFB",
        height: 45
      },
      swipeEnabled:true
    }
  }
);

export default TabsNavigation;