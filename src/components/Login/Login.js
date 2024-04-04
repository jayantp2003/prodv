import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button, FormGroup, FormCheck, Card } from 'react-bootstrap';
import { loginSuccess } from '../../actions/authActions';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login({ theme, loginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = { email, password, rememberMe };
        loginSuccess(userData);
        navigate('/calender');
    };

    return (
        <Container className={`login-container ${theme.darkMode ? 'dark-theme' : 'light-theme'}`}>
            <Card className="login-card">
                <Card.Body>
                    <h2 className="mb-4">Login</h2>
                    <Form onSubmit={handleLogin}>
                        <FormGroup className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Form.Text className="text-muted">
                                <a href="/forgot-password">Forgot password?</a>
                            </Form.Text>
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formBasicCheckbox">
                            <FormCheck 
                                type="checkbox"
                                label="Remember me"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                        </FormGroup>

                        <Button variant={theme.darkMode ? 'light' : 'primary'} type="submit" className="login-button">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    theme: state.theme,
});

const mapDispatchToProps = {
    loginSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);