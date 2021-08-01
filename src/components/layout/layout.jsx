import './layout.scss';

import React, { Component } from "react";

import { Header } from 'components/header';
import { ChatList } from 'components/chatList';
import { Messenger } from 'components/messenger';
import { MessengerRedux } from 'containers/MessengerContainer';

export class Layout extends Component {


    render() {
        const { chats, messages, sendMessage } = this.props;
        return (
            <div className='layout'>
                <Header />
                <ChatList chats={chats} />
                <Messenger messages={messages} sendMessage={sendMessage} />
            </div>
        )
    }
}