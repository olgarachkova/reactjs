import './chatList.scss';

import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

export class ChatList extends Component {
    render() {
        const { chats } = this.props;
        return (
            <List className='chat-list'>
                {chats.map((chat, idx) => <Link key={idx} to={chat.link}>
                    <ListItem>
                        <ListItemText primary={chat.name} />
                    </ListItem>
                </Link>)}
            </List>

        )
    }
}