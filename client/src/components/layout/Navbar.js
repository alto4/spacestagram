import React from 'react';
import defaultAvatar from '../../assets/images/nasa_logo.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import auth from '../../reducers/auth';

const Navbar = ({ updateSearch, logout, auth }) => {
  return (
    <nav className='navbar'>
      <div className='center-container'>
        <h1 className='logo-text'>Spacestagram</h1>
        <div className='searchbar'>
          <input
            type='text'
            placeholder='Search'
            className='searchbar'
            onChange={(e) => updateSearch(e.target.value)}
          />
        </div>
      </div>
      <div className='right-container' onClick={logout}>
        <img src={auth?.user?.avatar ? auth.user.avatar : defaultAvatar} alt='' className='avatar' />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
