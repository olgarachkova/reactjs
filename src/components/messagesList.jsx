import React, { Component } from "react";
import { Message } from "./message";

export class MessagesList extends Component {
    state = {

    };
    render() {
        const messages = this.props.messages;

        return (
            <div>
                {messages.map((message, idx) => <Message text={message.text} author={message.author} key={idx} />)}
            </div>
        )
    }
}