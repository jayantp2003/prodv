import React from 'react';
import { connect } from 'react-redux';
import { Container, Nav, Navbar, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClipboardList, FaSignInAlt, FaUserPlus, FaUser, FaMoon, FaSun, FaCogs } from 'react-icons/fa';
import { toggleTheme } from '../../actions/themeActions';
import { logout } from '../../actions/authActions';
import './Navbar.css';

function CustomNavbar({ isAuthenticated, user, darkMode, toggleTheme, logout }) {
    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    };

    return (
        <Navbar sticky="top" bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" className={darkMode ? 'text-light' : 'text-dark'}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    My App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/calender">
                            <FaCalendar /> Calendar
                        </Nav.Link>
                        <Nav.Link as={Link} to="/todos">
                            <FaClipboardList /> Todos
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {isAuthenticated ? (
                            <>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <FaUser /> {user.username}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/settings"><FaCogs /> Settings</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    <FaSignInAlt /> Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    <FaUserPlus /> Register
                                </Nav.Link>
                            </>
                        )}
                        <Button variant={darkMode ? 'light' : 'dark'} onClick={toggleTheme} className="ms-2" title="Toggle Theme">
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    darkMode: state.theme.darkMode,
});

const mapDispatchToProps = {
    toggleTheme,
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);