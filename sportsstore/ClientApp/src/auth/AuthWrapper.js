import React, { Component } from "react";
import { AuthContext } from "./AuthContext";

export const authWrapper = (WrappedComponents) => class extends Component {
    render = () =>
        <AuthContext.Consumer>
            {context => <WrappedComponents {...this.props} {...context} />}
        </AuthContext.Consumer>
}