import './messenger.scss'

import React, { Component } from "react";


import { MessagesList } from "components/messagesList";
import { MessageForm } from "components/messageForm";



export class Messenger extends Component {
    state = {
        chats: {
            '1': {
                id: 1,
                messages: [
                    { text: 'Это чат 1', author: 'bot' }
                ],
                name: 'chat 1'
            },
            '2': {
                id: 2,
                messages: [
                    { text: 'Это чат 2', author: 'bot' }
                ],
                name: 'chat 2'
            },
            '3': {
                id: 3,
                messages: [
                    { text: 'Это чат 3', author: 'bot' }
                ],
                name: 'chat 3'
            },
        }
    }

    interval = null;

    componentDidMount() {
    }

    componentDidUpdate() {
        if (this.messages.length) {
            if (this.messages[this.messages.length - 1].author !== 'bot') {
                setTimeout(() => {
                    this.handleMessageSend({ text: `hi, ${this.messages[this.messages.length - 1].author}!`, author: 'bot' });
                }, 3000);
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleMessageSend = (message) => {
        const { chats } = this.state;
        const { match } = this.props;

        const chat = chats[match.params.id];
        const messages = this.messages.concat([message]);
        chat.messages = messages;

        this.setState({
            chats: {
                ...this.state.chats,
                [match.params.id]: chat,
            }
        });
    }

    get messages() {
        const { chats } = this.state;
        const { match } = this.props;

        let messages = null;

        if (match && chats[match.params.id]) {
            messages = chats[match.params.id].messages;
        }

        return messages;
    }

    render() {
        return (
            <div className='messenger'>
                {this.messages ? <MessagesList messages={this.messages} /> : 'выберите чат'}
                {this.messages && <MessageForm onSend={this.handleMessageSend} />}
            </div>
        )
    }
}