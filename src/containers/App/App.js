import { connect } from "react-redux";
import { action_updateAppState, action_updateDataState } from "../../lib/store/actions";
import * as formsAccordance from "../../lib/formsAccordance";
import { App } from "../../forms/App/App";

const mapStateToProps = state => {
    let currentForm;
    if (state.app.currentFormsIndex < formsAccordance.forms.length)
        currentForm = formsAccordance.forms[state.app.currentFormsIndex].component;
    else
        currentForm = formsAccordance.summaryForm;

    return {
        currentFormsIndex: state.app.currentFormsIndex,
        currentForm
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onNext: (formData) => {
            dispatch(next(formData));
        },
        onReset: () => {
            dispatch(reset());
        }
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {
        areStatesEqual: (next, prev) => prev.app.currentFormsIndex == next.app.currentFormsIndex
    }
)(App);

export { AppContainer as App }

/////////////////////////////////////////////////

function next(formData) {
    return (dispatch, getState) => {
        const state = getState();

        let dataField;
        if (state.app.currentFormsIndex == 0)
            dataField = "firstName";
        else if (state.app.currentFormsIndex == 1)
            dataField = "secondName";

        const newDataState = {
            ...state.data,
            ...{
                [dataField]: formData
            }
        };
        dispatch(action_updateDataState(newDataState));

        const nextFormsIndex = (state.app.currentFormsIndex < formsAccordance.forms.length) ? state.app.currentFormsIndex + 1 : 0;

        const newAppState = {
            ...state.app,
            ...{
                currentFormsIndex: nextFormsIndex
            }
        };
        dispatch(action_updateAppState(newAppState));
    }
}

function reset() {
    return (dispatch, getState) => {
        const state = getState();

        const newDataState = {
            ...state.data,
            ...{
                firstName: "",
                secondName: ""
            }
        };
        dispatch(action_updateDataState(newDataState));

        const newAppState = {
            ...state.app,
            ...{
                currentFormsIndex: 0
            }
        };
        dispatch(action_updateAppState(newAppState));
    }
}