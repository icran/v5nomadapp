import React from "react";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import {NavButton} from "../components/NavButton"

const sharedRoutes = {
  Likes: {
    screen: LikesScreen,
    navigationOptions:{
      // headerLeft: props => <NavButton iconName={"ios-arrow-back"} {...props} />
      headerleft:null
    }
  },
  Comments: {
    screen: CommentsScreen,  
  }
};

//  const sharedOptions = {
  // navigationOptions: {
  //   headerLeft: props => <NavButton iconName={"ios-arrow-back"} {...props} />,
  // }
 // };

// export { sharedOptions };

export default sharedRoutes;
