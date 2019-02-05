import { combineReducers } from "redux";
import { actionTypes } from "./actions";


function app(state = {}, action) {
    switch (action.type) {

        case actionTypes.UPDATE_APPSTATE:
            return { ...action.data };

        default:
            return state;
    }
}

function data(state = {}, action) {
    switch (action.type) {

        case actionTypes.UPDATE_DATASTATE:
            return { ...action.data };

        default:
            return state;
    }
}


const rootReducer = combineReducers({
    app,
    data
});


export { rootReducer };