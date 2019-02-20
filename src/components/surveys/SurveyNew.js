import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showFormReview: false,
    }
  }

  renderContent() {
    if(this.state.showFormReview) {
      return (
        <SurveyFormReview
          hideFormReview={() => this.setState({ showFormReview: false })}
        />
      );
    }
    
    return (
      <SurveyForm
        showFormReview={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({ form: 'surveyForm' })(SurveyNew);
