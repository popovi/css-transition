import React from "react";

class FormSummary extends React.Component {
    constructor(props) {
        super(props);

        this.handleReset = this.handleReset.bind(this);
    }

    /////////////////////////////////
    // Events handlers

    handleReset() {
        this.props.onReset();
    }
    /////////////////////////////////

    render() {
        return (
            <div className="formContainer">
                <h3>FormSummary</h3>
                <div className="formContainer_fieldsRow">
                    <div>First name:</div>
                    <div>{this.props.firstName}</div>
                </div>
                <div className="formContainer_fieldsRow">
                    <div>Second name:</div>
                    <div>{this.props.secondName}</div>
                </div>
                <div className="formContainer_actions">
                    <div><button onClick={this.handleReset}>Reset</button></div>
                </div>
            </div>
        );
    }

}

export { FormSummary }