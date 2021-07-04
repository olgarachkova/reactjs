import './layout.scss';

import React, { Component } from "react";

import { Header } from 'components/header';
import { ChatList } from 'components/chatList';
import { Messenger } from 'components/messenger';

export class Layout extends Component {


    render() {
        return (
            <div className='layout'>
                <Header />
                <ChatList />
                <Messenger />
            </div>
        )
    }
}