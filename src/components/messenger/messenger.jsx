import './messenger.scss'

import React, { Component } from "react";


import { MessagesList } from "components/messagesList";
import { MessageForm } from "components/messageForm";



export class Messenger extends Component {
    state = {
        messages: [],
    }

    interval = null;

    componentDidMount() {
    }

    componentDidUpdate() {
        this.interval = setInterval(() => {
            if (this.state.messages[this.state.messages.length - 1].author !== 'bot') {
                this.setState({
                    messages: this.state.messages.concat([{ text: `hi, ${this.state.messages[this.state.messages.length - 1].author}!`, author: 'bot' }]),
                });
            }
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat([message]),
        });
    }

    render() {
        const { messages } = this.state;
        return (
            <div className='messenger'>
                <MessagesList messages={messages} />
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        )
    }
}