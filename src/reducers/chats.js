import { handleActions } from "redux-actions";
import { Map, fromJS } from "immutable";

import { load, send } from "actions/chats"

const initialState = new Map(
    {
        loading: false,
        entries: new Map(),
    }
);

export const chatReducer = handleActions({
    [load]: (state, action) => {
        return state.set("entries", fromJS({
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
        }))
    },
    [send]: (state, action) => {
        const { chatID, ...message } = action.payload;
        return state.mergeIn(['entries', chatID, 'messages'], message);
    }
}, initialState);