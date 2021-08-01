import './messenger.scss'

import React, { Component } from "react";


import { MessagesList } from "components/messagesList";
import { MessageForm } from "components/messageForm";



export class Messenger extends Component {
    /*state = {
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
        const { match, chats } = this.props;

        const chat = chats[match.params.id];
        const messages = this.messages.concat([message]);
        chat.messages = messages;

        this.setState({
            chats: {
                ...this.state.chats,
                [match.params.id]: chat,
            }
        });
    }*/


    render() {
        const { messages, sendMessage } = this.props;
        return (
            <div className='messenger'>
                {messages ? <MessagesList messages={messages} /> : 'выберите чат'}
                {messages && <MessageForm onSend={sendMessage} />}
            </div>
        )
    }
}