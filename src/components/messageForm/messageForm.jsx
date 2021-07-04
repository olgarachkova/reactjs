import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from '@material-ui/core';

export class MessageForm extends Component {
    state = {
        author: '',
        text: '',
    }

    static propTypes = {
        onSend: PropTypes.func,
    }

    handleMessageSend = () => {
        const { onSend } = this.props;
        if (typeof (onSend) === 'function') {
            onSend(this.state);
            this.setState({
                text: '',
            })
        }
    }

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value,
        })
    }

    handleEnterDown = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleMessageSend();
        }
    }

    render() {
        const { author, text } = this.state;
        return (
            <div>
                <input type="text" name="author" onChange={this.handleInputChange} value={author} placeholder="author" /> <br />
                <textarea name="text" onChange={this.handleInputChange} value={text} onKeyDown={this.handleEnterDown} id="" cols="30" rows="10" placeholder="text"></textarea><br />
                <Button variant="contained" color="primary" onClick={this.handleMessageSend}>Send</Button>

            </div>
        )

    }
}