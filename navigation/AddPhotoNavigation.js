import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import PhotoRoute from "../routes/PhotoRoute";
import LibraryRoute from "../routes/LibraryRoute";

const AddPhotoNavigation = createMaterialTopTabNavigator(
  {
    Camera: {
      screen: PhotoRoute,
    },
    Library: {
      screen: LibraryRoute
    }
  },
  {


  }
  // const AddPhotoNavigation = createBottomTabNavigator(
  //     {
  //         Camera:{
  //             screen:CameraScreen,
  //             navigationOptions:{
  //                 tabBarLabel:"Photo"
  //             }

  //         },
  //         Library:{
  //             screen:LibraryScreen,
  //             navigationOptions:{
  //                 tabBarLabel:"Library"
  //             }
  //         }

  //     }
);


export default createAppContainer(AddPhotoNavigation);