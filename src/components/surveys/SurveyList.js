import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(({ _id, title, body, dateSent, yes, no }) => {
            return (
                <div key={_id} className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{title}</span>
                        <p>{body}</p>
                        <p className="right">
                            Sent On: {new Date(dateSent).toLocaleDateString()}
                        </p>
                        <div className="card-action">
                            <span>Yes: {yes}</span>
                            <span>No: {no}</span>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        console.log(this.props.surveys);
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, actions)(SurveyList);
