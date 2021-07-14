import './chatList.scss';

import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

export class ChatList extends Component {
    render() {
        return (
            <div className='chat-list'>
                <Link to='/chats/1'>
                    <ListItem>
                        <ListItemText primary="Chat 1" />
                    </ListItem>
                </Link>
                <Link to='/chats/2'>
                    <ListItem>
                        <ListItemText primary="Chat 2" />
                    </ListItem>
                </Link>
                <Link to='/chats/3'>
                    <ListItem>
                        <ListItemText primary="Chat 3" />
                    </ListItem>
                </Link>

            </div>
        )
    }
}

/*
<List>




                    <Link to='/chats/3'>
                        <ListItem button>
                            <ListItemText primary="Chat 3" />
                        </ListItem>
                    </Link>
                </List>
 */