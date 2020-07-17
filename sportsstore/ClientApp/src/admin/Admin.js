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

const graphQlClient = new ApolloClient({
    uri: GraphQlUrl,
})

export class Admin extends Component {
    render() {
        return <ApolloProvider client={graphQlClient}>
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
                    </div>
                    <div className="col-9 p-2">
                        <Switch>
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
}