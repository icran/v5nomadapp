import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const ProfileRoute = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default createAppContainer(ProfileRoute);
