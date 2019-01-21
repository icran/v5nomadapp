import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const ProfileRoute = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions:({screenProps}) => ({
        headerTitle: screenProps.username
      })
    //      navigationOptions:(props) => ({
    //     headerTitle: props.screenProps.username
    // })
    // 같은 코드

    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default createAppContainer(ProfileRoute);
