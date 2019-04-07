import { clientStore, createStore, combineReducers } from 'redux'

const userReducer = (state = {}, actions) => {
    return state;
};
const reducers = combineReducers({
    user: userReducer
})
const store = createStore(reducers);

store.subscribe(() => {
    console.log("Store changed", store.getState())
})
store.dispatch({ type: "INC", payload: 1 })
