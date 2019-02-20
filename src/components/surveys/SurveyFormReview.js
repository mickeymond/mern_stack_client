import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

class SurveyFormReview extends Component {
    
    renderContent() {
        const { formValues } = this.props;
        return formFields.map(({ label, name }, key) => {
            return (
                <div key={key}>
                    <label>{label}</label>
                    <br />
                    <div>{formValues[name]}</div>
                    <br /><br />
                </div>
            );
        });
    }

    render() {
        const { hideFormReview, submitSurvey, formValues, history } = this.props;
        return (
            <div>
                <h4 className="center-align">Please Confirm Your Entries</h4>
                <div>
                    {this.renderContent()}
                </div>
                <button onClick={hideFormReview} className="teal btn-flat white-text">Back
                    <i className="material-icons left">arrow_back</i>
                </button>
                <button onClick={() => submitSurvey(formValues, history)} className="right green btn-flat white-text">Submit
                    <i className="material-icons right">done</i>
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
