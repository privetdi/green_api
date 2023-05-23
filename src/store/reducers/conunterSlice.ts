import { createSlice } from "@reduxjs/toolkit";

export interface Message {
    type: string,
    idMessage: string,
    timestamp: number,
    typeMessage: string,
    chatId: string,
    textMessage: string,
    statusMessage: string,
    sendByApi: boolean
}

export interface State {
    value: number,
    chatsList: Message[],
    callNumbersSet: Set<string>
}
const initialState: State = {
    value: 0,
    chatsList: [],
    callNumbersSet: new Set<string>()
}

export const store = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setListChats: (state, actions) => {
            state.chatsList = [...state.chatsList, ...actions.payload.chatsList];
        },
        decrement: (state) => {
            state.value -= 1
        },

    },
})

export const { setListChats, decrement } = store.actions
export default store.reducer