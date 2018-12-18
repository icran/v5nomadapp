import React, { Component } from "react";
import LogInScreen from "./presenter";


class Container extends Component {
    state = {
        username: "",
        password: "",
        isSubmitting: false
    };

    
    render() {
        return <LogInScreen {...this.state} />;
    }
}
export default Container;