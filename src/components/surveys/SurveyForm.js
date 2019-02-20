import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

    _renderFields() {
        return formFields.map(({ label, name }, index) => {
            return <Field key={index} type="text" component={SurveyField} label={label} name={name} />
        });
    }
    render() {
        return (
            <div>
                <h4 className="center-align">New Survey</h4>
                <form
                    onSubmit={this.props.handleSubmit(this.props.showFormReview)}
                    autoComplete="off"
                >
                    {this._renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                        <i className="material-icons left">close</i>
                    </Link>
                    <button className="right teal btn-flat white-text" type="submit">Next
                        <i className="material-icons right">arrow_forward</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    formFields.forEach(({ name }) => {
        if(!values[name]) {
            errors[name] = 'You have to provide a value';
        }
    });

    if(values.recipients) {
        errors.recipients = validateEmails(values.recipients);
    }

    return errors;
}

export default reduxForm({ validate, form: 'surveyForm', destroyOnUnmount: false })(SurveyForm);
