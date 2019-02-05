import React from "react";

class Form1 extends React.Component {
    constructor(props) {
        super(props);

        this.firstNameRef = React.createRef();

        this.handleNext = this.handleNext.bind(this);
    }

    /////////////////////////////////
    // Events handlers

    handleNext() {
        this.props.onNext(this.firstNameRef.current.value);
    }
    /////////////////////////////////

    render() {
        return (
            <div className="formContainer">
                <h3>Form1</h3>
                <div className="formContainer_fieldsRow">
                    <div>First name:</div>
                    <div>
                        <input type="text" ref={this.firstNameRef} autoFocus />
                    </div>
                </div>
                <div className="formContainer_actions">
                    <div><button onClick={this.handleNext}>Next</button></div>
                </div>
            </div>
        );
    }

}

export { Form1 }