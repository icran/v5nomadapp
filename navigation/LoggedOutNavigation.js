import { createStackNavigator, createAppContainer } from "react-navigation";
import LogInScreen from "../screens/LogInScreen";



const LoggedOutNavigation = createStackNavigator({
    LogIn: {
        screen:LogInScreen,
        navigationOptions: {
            header: null
            
        }
        
        
    }
});

// const LoggedOutNavigation = createAppContainer(sLoggedOutNavigation);

export default createAppContainer(LoggedOutNavigation);