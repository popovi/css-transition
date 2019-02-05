import { connect } from "react-redux";
import { FormSummary } from "../../forms/FormSummary/FormSummary";

const mapStateToProps = state => {
    return {
        firstName: state.data.firstName,
        secondName: state.data.secondName
    }
};

const FormSummaryContainer = connect(
    mapStateToProps,
    null,
    null
    // {
    //     areStatesEqual: (next, prev) => prev.data == next.data
    // }
)(FormSummary);

export { FormSummaryContainer as FormSummary }