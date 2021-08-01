import { combineReducers } from "redux";


import { chatReducer } from "./chats";

export const rootReducer = combineReducers({
    chats: chatReducer,
});