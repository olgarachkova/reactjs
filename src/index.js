import React from 'react';
import ReactDom from 'react-dom';

const messages = ['message1', 'message2', 'message3'];

const Message = (props) => <div>{props.text}</div>;
const MessageList = (props) => {
    return props.messages.map(message => <Message text={message} key={message} />);
};

ReactDom.render(
    <MessageList messages={messages} />,
    document.getElementById('root')
);