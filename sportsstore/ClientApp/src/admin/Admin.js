import React from "react"
import ApolloClient from "apollo-boost"
import { Component } from "react";
import { OrdersConnector } from "./OrdersConnector";
import { GraphQlUrl } from "../data/Urls";
import { ApolloProvider } from "react-apollo";
import { ToggleLink } from "../ToggleLink";
import { Switch, Route, Redirect } from "react-router-dom";
import { ProductCreator } from "./ProductCreator";
import { ProductEditor } from "./ProductEditor";
import { ConnectedProducts } from "./ProductsConnector";
import { authWrapper } from "../auth/AuthWrapper";
import { AuthPrompt } from "../auth/AuthPrompt";

//const graphQlClient = new ApolloClient({
//    uri: GraphQlUrl,
//})

export const Admin = authWrapper(class extends Component {
    constructor(props) {
        super(props)
        this.client = new ApolloClient({
            uri: GraphQlUrl,
            request: gqloperation => gqloperation.setContext({
                headers: {
                    Authorization: `Bearer<${this.props.webToken}>`
                },
            })
        })
    }

    render() {
        return <ApolloProvider client={this.client}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-info text-white">
                        <div className="navbar-brand">Sports Store</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 p-2">
                        <ToggleLink to="/admin/orders">Orders</ToggleLink>
                        <ToggleLink to="/admin/products">Products</ToggleLink>
                        {this.props.isAuthenticated &&
                            <button
                                onClick={this.props.signout}
                                className="btn btn-block btn-secondary m-2 fixed-bottom col-3">Logout
                            </button>
                        }
                    </div>
                    <div className="col-9 p-2">
                        <Switch>
                            {!this.props.isAuthenticated && <Route component={AuthPrompt} />}
                            <Route path="/admin/orders" component={OrdersConnector} />
                            <Route path="/admin/products/create" component={ProductCreator} />
                            <Route path="/admin/products/:id" component={ProductEditor} />
                            <Route path="/admin/products" component={ConnectedProducts} />
                            <Redirect to="/admin/orders" component={OrdersConnector} />
                        </Switch>
                    </div>
                </div>
            </div>
        </ApolloProvider>
    }
})