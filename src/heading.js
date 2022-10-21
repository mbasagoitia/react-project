import React, { Component } from "react";

class Heading extends Component {
    render () {
        return <h1>This is my {this.props.number} heading.</h1>
    }
}

export default Heading;