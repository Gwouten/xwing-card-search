import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <div className="header content-container">
      <Link className="header__title" to="/dashboard">
        <h1 className="header__title__text">X-wing card search 2.0</h1>
      </Link>
      <button className="header__button button" onClick={startLogout}>Logout</button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
