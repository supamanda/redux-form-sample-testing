import React from "react"
import { connect } from "react-redux"

import { loadData } from '../actions/dataActions'
import { Header } from "./header"
import ConnectedForm, { Form } from "./form"


@connect((store) => {
    return {
        message: store.sampleReducer.message,
    };
})
export default class Layout extends React.Component {

    loadData() {
        this.props.dispatch(loadData())
    }

    handleSubmit(values) {
        console.log('submitting', values)
    }

    render() {
        const { message } = this.props;
        console.log("Amanda", message)
        return ( 
            <div>
                <Header title={message} />
                <div>{message}</div>
                <button onClick={this.loadData.bind(this)} >Load data</button>
                <ConnectedForm onSubmit={this.handleSubmit.bind(this)} />
            </div>
        );
    }
}