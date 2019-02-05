export const actionTypes = {
    UPDATE_APPSTATE: "UPDATE_APPSTATE",
    UPDATE_DATASTATE: "UPDATE_DATASTATE"
};


function action_updateAppState(newAppState) {
    return {
        type: actionTypes.UPDATE_APPSTATE,
        data: newAppState
    };
}

function action_updateDataState(newDataState) {
    return {
        type: actionTypes.UPDATE_DATASTATE,
        data: newDataState
    };
}


export {
    action_updateAppState,
    action_updateDataState
};