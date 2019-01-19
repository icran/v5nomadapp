import React,{Component}from "react";
import { TouchablewithoutFeedBack, StyleSheet} from "react-native";
import {IonIcons} from "@expo/vector-icons";




class NavButton extends Component{
  render(){
    return(
      <TouchablewithoutFeedBack onPressOut={props.onPress}>
        <View style={StyleSheet.container}>
          <IonIcons name={props.iconName} color={"black"} size={30} />
        </View>
      </TouchablewithoutFeedBack>
    )
    
  }
}

// NavButton.PropTypes = {
//   onPress: PropTypes.func.isRequired,
//   iconName: PropTypes.string.isRequired

// }




// const NavButton = props => (
//   <TouchablewithoutFeedBack onPressOut={props.onPress}>
//     <View style={StyleSheet.container}>
//       <IonIcons name={props.iconName} color={"black"} size={30}  />
//     </View>
//   </TouchablewithoutFeedBack>
// );

// NavButton.PropTypes = {
//   onPress:PropTypes.func.isRequired,
//   iconName:PropTypes.string.isRequired

// }


const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10
    // padding을 주면 손가락이 두꺼울때 사용자들이 정교하게 클릭하지 않아도 된다.
  }
});

export default NavButton; 