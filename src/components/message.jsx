import React, { Component } from "react";
import PropTypes from "prop-types";


export class Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    };

    render() {
        return (
            <p>{this.props.author}: {this.props.text}</p>
        )
    }

}