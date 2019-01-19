import React, { Component } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import PropTypes from "prop-types"
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";



class AppContainer extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        //initApp: PropTypes.func.isRequired
    };
    render() {
        const { isLoggedIn, profile } = this.props;
        return (
        <View style={styles.container}>
            <StatusBar hidden={false} />
            {/* {isLoggedIn && profile ? <RootNavigation screenProps={{ username: profile.username }} /> : <LoggedOutNavigation />} */}
            {isLoggedIn ? <RootNavigation /> :<LoggedOutNavigation />}
          </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent:"center"
    }
});

export default AppContainer;