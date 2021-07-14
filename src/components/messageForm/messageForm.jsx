import React, { Component } from "react";
import PropTypes from "prop-types";
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { TextField } from '@material-ui/core';

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
                <TextField name="author" id="standard-basic" label="author" onChange={this.handleInputChange} value={author} />
                <TextField name="text" id="standard-basic" label="text" onChange={this.handleInputChange} value={text} onKeyDown={this.handleEnterDown} />
                <Fab variant="round" color="primary" onClick={this.handleMessageSend}><SendIcon /></Fab>
            </div>
        )

    }
}