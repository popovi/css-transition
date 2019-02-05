import { Form1 } from "../forms/Form1/Form1";
import { Form2 } from "../forms/Form2/Form2";
import { FormSummary } from "../containers/FormSummary/FormSummary";

const forms = [
    {
        component: Form1
    },
    {
        component: Form2
    }
];

const summaryForm = FormSummary;

export {
    forms,
    summaryForm
}