import React from "react";

class Form2 extends React.Component {
    constructor(props) {
        super(props);

        this.secondNameRef = React.createRef();

        this.handleNext = this.handleNext.bind(this);
    }

    /////////////////////////////////
    // Events handlers

    handleNext() {
        this.props.onNext(this.secondNameRef.current.value);
    }
    /////////////////////////////////

    render() {
        return (
            <div className="formContainer">
                <h3>Form2</h3>
                <div className="formContainer_fieldsRow">
                    <div>Second name:</div>
                    <div>
                        <input type="text" ref={this.secondNameRef} autoFocus />
                    </div>
                </div>
                <div className="formContainer_actions">
                    <div><button onClick={this.handleNext}>Finish</button></div>
                </div>
            </div>
        );
    }

}

export { Form2 }