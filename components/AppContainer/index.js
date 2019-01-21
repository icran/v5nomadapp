import { connect } from "react-redux";
import AppContainer from "./presenter";
import {actionCreators as photoActions} from "../../redux/modules/phtos"


const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    profile: user.profile
  };
};

const mapDispatchToProps = () => {
  return{
    initApp:() => {
      dispatchEvent(getFeed());
      //getSearch
      //getNotifications
      //getProfile
    }
  }
}

export default connect(mapStateToProps)(AppContainer);