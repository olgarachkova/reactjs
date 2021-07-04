import './message.scss';

import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';



export const MessageType = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};


export class Message extends Component {
    static propTypes = MessageType;

    render() {
        const { author, text } = this.props;
        const classes = classNames('message', {
            'message-owner': author !== 'bot',
            'message-companion': author === 'bot'
        })
        return (
            <div className={classes}>{text} <div className='message-sender'>{author}</div></div>
        )
    }

}