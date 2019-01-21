import React, {Component} from "react";
import FeedScreen from "./presenter";
import {Image}  from "react-native";
import NavButton from "../../components/NavButton";
import PropTypes from "prop-types";

class Container extends Component{
    // static navigationOptions = ({navigation}) =>({
    //     headerTitle:(
    //         <Image 
    //             source={require("../../assets/logo.png")} 
    //             style={{height:35}}
    //             resizeMode={"contain"}
    //         />
    //     ),
    //     headerLeft:(
    //         <NavButton
    //             iconName={"ios-camera"}
    //             onPress={() => navigation.navigate("TakePhoto")}
                
    //         />
    //     )
    // })

    static propTypes = {
        feed:PropTypes.array.isRequired,
        getFeed:PropTypes.func.isRequired,
    }

    state={
        isFetching:false
    }
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.feed){
            this.setState({
                isFetching:false
            });
        }
    }
    render(){
        
        return(
            <FeedScreen {...this.props} {...this.state} refresh={this._refresh}/>
        )
    }
    _refresh = () => {
        const { getFeed } = this.props;
        this.setState({
            isFetching: true
        });
        getFeed();
    };
}
export default Container;