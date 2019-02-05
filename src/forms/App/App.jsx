import React from "react";
import { CSSTransition } from "react-transition-group";

import "./App.scss";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentFormsIndex: props.currentFormsIndex,
            showCurrentForm: true
        }

        this.currentFormData = null;
        this.needReset = false;

        this.handleNext = this.handleNext.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleFormExit = this.handleFormExit.bind(this);
    }

    /////////////////////////////////
    // Lifecircles

    static getDerivedStateFromProps(props, state) {
        if (props.currentFormsIndex != state.currentFormsIndex)
            return {
                currentFormsIndex: props.currentFormsIndex,
                showCurrentForm: true
            };

        return null;
    }
    /////////////////////////////////

    /////////////////////////////////
    // Events handlers

    handleNext(formData) {
        this.currentFormData = formData;

        this.setState({
            showCurrentForm: false
        });
    }

    handleReset() {
        this.setState({
            showCurrentForm: false
        });

        this.needReset = true;
    }

    handleFormExit() {
        if (this.needReset) {
            this.needReset = false;
            this.props.onReset();
        }
        else
            this.props.onNext(this.currentFormData);
    }
    /////////////////////////////////

    render() {
        const Child = this.props.currentForm;

        return (
            <CSSTransition
                in={this.state.showCurrentForm}
                timeout={150}
                classNames="scaffold"
                unmountOnExit
                onExited={this.handleFormExit}>
                <div className="scaffold">
                    <Child onNext={this.handleNext} onReset={this.handleReset} />
                </div>
            </CSSTransition>
        )
    };
}

export { App };