import React, {Component} from "react";
import PropTypes from "prop-types";
import Profile from "../../components/Profile"; 

class Container extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.user.username
  });
  constructor(props) {
    const {
      navigation: {
        state: {
          params: { user }
        }
      }
    } = props;
    super(props);
    this.state = {
      profileObject: user
    };
  }

  componentDidMount = () => {
    this._getProfile();
  };

  render() {
    console.log(this.props);
    // const{navigation:{state:{params:{user}}}} = this.props
    const { profileObject } = this.state;
    return (
      <Profile profileObject={profileObject} refresh={this._getProfile} />
      // 혹으 이렇게 작성해도 된다. 위아래 같다.
      // <Profile {...this.state} />
    );
  }

  _getProfile = async () => {
    const { getProfile } = this.props;
    const {
      profileObject: { username }
    } = this.state;
    const completeProfile = await getProfile(username);
    if (completeProfile.username) {
      this.setState({
        profileObject: completeProfile
      });
    }
  };
}



export default Container;