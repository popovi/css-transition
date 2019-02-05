import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers";


function setStore() {
    const initialState = getInitialState();

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware)
    );
}

function getInitialState() {
    let initialDataState = {
        firstName: "",
        secondName: ""
    };

    let initialAppState = {
        currentFormsIndex: 0
    };

    let initialState = {
        data: initialDataState,
        app: initialAppState
    };

    return initialState;
}


export { setStore }