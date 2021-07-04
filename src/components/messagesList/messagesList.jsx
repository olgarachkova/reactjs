import './messagesList.scss'

import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Message, MessageType } from "components/message";

export class MessagesList extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(
            PropTypes.shape(MessageType)
        )
    };
    render() {
        const messages = this.props.messages;

        return (
            <div className='messages-list'>
                {messages.map((message, idx) => <Message {...message} key={idx} />)}
            </div>
        )
    }
}