import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationsScreen from "./presenter";

class Container extends Component {
    static propTypes = {
        notifications: PropTypes.array,
        getNotifications: PropTypes.func.isRequired
    };
    state = {
        isFetching: false
    };
    componentWillReceiveProps = nextProps => {
        if (nextProps.feed) {
            this.setState({
                isFetching: false
            });
        }
    };

    render() {
        console.log(this.props)
        return (
            <NotificationsScreen
                {...this.props}
                {...this.state}
                refresh={this._refresh}
            />
        );
    }
    _refresh = () => {
        const { getNotifications } = this.props;
        this.setState({
            isFetching: true
        });
        getNotifications();
    };
}

export default Container;