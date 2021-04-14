import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Nav className="mr-auto">
      <Link to="#!" onClick={logout}>
        Logout
      </Link>
    </Nav>
  );
  const guestLinks = (
    <Nav className="mr-auto">
      <Link to="/" style={{ marginRight: "12px", color: "gold" }}>
        Home
      </Link>

      <Link to="/register" style={{ marginRight: "12px", color: "gold" }}>
        Register
      </Link>

      <Link to="/login" style={{ marginRight: "12px", color: "gold" }}>
        Login
      </Link>
      <Link to="/" style={{ color: "gold" }}>
        Sign Out
      </Link>
    </Nav>
  );

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand style={{ color: "gold" }}>MMG</Navbar.Brand>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </Navbar>
  );
};
Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigation);
