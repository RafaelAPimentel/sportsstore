import React from "react"
import ApolloClient from "apollo-boost"
import { Component } from "react";
import { OrdersConnector } from "./OrdersConnector";
import { GraphQlUrl } from "../data/Urls";
import { ApolloProvider } from "react-apollo";

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
                    <div className="col p-2">
                        <OrdersConnector />
                    </div>
                </div>
            </div>
        </ApolloProvider>
    }
}