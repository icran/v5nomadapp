import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CameraScreen from '../screens/CameraScreen';


const PhotoRoute = createStackNavigator(
  {
    Photo:{
        screen: CameraScreen,
        navigationOptions: {
            header: null,
        
        }
    }
    
  },
   {
        NavigationOptions: {
            headerStyle: {
                height:200
            }
        },
    }
);


export default createAppContainer(PhotoRoute);