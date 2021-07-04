import './chatList.scss';

import React, { Component } from "react";

import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

export class ChatList extends Component {
    render() {
        return (
            <div className='chat-list'>
                <List>
                    <ListItem button>
                        <ListItemText primary="Chat 1" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Chat 2" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Chat 3" />
                    </ListItem>
                </List>
            </div>
        )
    }
}