import { configureStore } from "@reduxjs/toolkit";
import stateReducer from './reducers/conunterSlice'
/* import { enableMapSet } from 'immer'; */


/* enableMapSet() */
//пустое хранилище
const store = configureStore({
    reducer:{
        store: stateReducer
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch