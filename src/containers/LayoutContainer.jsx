import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { Layout } from "components/Layout";
import { load, send } from "actions/chats"

class LayoutContainer extends PureComponent {
    componentDidMount() {
        const { loadChats } = this.props;
        loadChats();
    }

    handleMessageSend = (message) => {
        const { sendMessage, chatID } = this.props;
        sendMessage({
            ...message,
            chatID
        });
    }

    render() {
        const { chats, messages } = this.props;
        return (
            <Layout chats={chats} messages={messages} sendMessage={this.handleMessageSend} />
        )
    }
}

function mapStateToProps(state, ownProps) {
    const chats = state.chats.get('entries');
    const { match } = ownProps;

    let messages = null;

    if (match && chats.has(match.params.id)) {
        messages = chats.getIn([match.params.id, 'messages']).toJS();
    }

    return {
        chats: chats.map((entry) => ({ name: entry.get('name'), link: `/chats/${entry.get('id')}` })).toList().toJS(),
        messages,
        chatID: match ? match.params.id : null,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(load()),
        sendMessage: (message) => dispatch(send(message)),
    }
}

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);