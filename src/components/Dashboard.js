import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SurveyList from '../components/surveys/SurveyList';

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <h4 className="center-align">Your Surveys</h4>
            <SurveyList />
            <div className="fixed-action-btn">
              <Link to="/surveys/new" className="btn-floating btn-large red">
                <i className="material-icons">add</i>
              </Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
