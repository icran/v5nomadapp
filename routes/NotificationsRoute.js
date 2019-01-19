import { createStackNavigator, createAppContainer } from "react-navigation";
import NotificationsScreen from "../screens/NotificationsScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const NotificationsRoute = createStackNavigator(
  {
    Notifications: {
      screen: NotificationsScreen
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default createAppContainer(NotificationsRoute);
