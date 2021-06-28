import React, { Component } from "react";
import { MessagesList } from "./messagesList";
import { MessageForm } from "./messageForm";


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
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleMessageSend = (message) => {
        console.log(message);
        this.setState({
            messages: this.state.messages.concat([{ text: message.text, author: message.author }]),
        });
    }

    render() {
        const { messages } = this.state;
        return (
            <div>
                <MessagesList messages={messages} />
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        )
    }
}