import React from "react";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import { NavButton } from "../components/NavButton"

const sharedRoutes = {
  Likes: {
    screen: LikesScreen,
  },
  Comments:{
    screen: CommentsScreen
  }
};


const sharedOptions = {
     navigationOptions: {
          headerLeft: props => (
            <NavButton
              {...props}
              iconName={"ios-arrow-back"}
            />
          )

        },
        headerStyle:{
          backgroundColor:"red"
        }

      }

     
   
 

export { sharedOptions };

export default sharedRoutes;
