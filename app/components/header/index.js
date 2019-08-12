import React from 'react';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Header(props) {
  const logOut = () => {
    localStorage.clear();
    props.history.push('/');
  };
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {' '}
      </Link>
      <div className="options">
        <Link className="option" to="/">
          Trang Chủ
        </Link>
        <Link className="option" to="/d">
          Tại Sao Chọn 3S
        </Link>
        <Link className="option" to="/df">
          Chương Trình Đào Tạo
        </Link>
        <Link className="option" to="/ds">
          Hoạt Động Cộng Đồng
        </Link>
        {localStorage.getItem('token') ? (
          <Link className="option-login" type="button" to="/" onClick={logOut}>
            Logout
          </Link>
        ) : (
          <Link className="option-login" type="button" to="/login">
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
}
Header.propTypes = {
  history: PropsTypes.object,
  push: PropsTypes.object,
};
