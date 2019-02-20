import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from './Payment';

class Header extends Component {
  render() {
    return (<nav>
      <div className="nav-wrapper">
        <div className="container">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
            Emaily
          </Link>
          {this._renderActions()}
        </div>
      </div>
    </nav>);
  }

  _renderActions() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul className="right">
            <li><a href="/auth/google">Login With Google</a></li>
          </ul>
        );
      default:
        return (
          <ul className="right">
            <li><Payment /></li>
            <li style={{ margin: '0 20px' }}>Credits: {this.props.auth.credits}</li>
            <li><a href="/auth/logout">Logout</a></li>
          </ul>
        );
    }
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
}

export default connect(mapStateToProps)(Header);
