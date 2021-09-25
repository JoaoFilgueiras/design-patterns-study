import React from 'react';
import { Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { MdArrowForward } from 'react-icons/md';

import imgIllustration from '../../../assets/img/illustration.jpg';
import imgLogo from '../../../assets/img/logo.svg';
import imgGoogle from '../../../assets/img/google-icon.svg';

import './style.scss';
import { LoginTypeConst } from '../container/const';

export const LoginView = ({ handleLogin, changeLogin }: any) => {
    return (
        <div id="login-component">
            <section className="illustration">
                <Image src={imgIllustration} alt="Image Illustration" />
                <h1>System to helper more on your work</h1>
                <p>
                    System to helper add you annotation in class diary from your
                    students
                </p>
            </section>
            <section className="login-actions">
                <div className="main-content">
                    <Image src={imgLogo} alt="Image Logo" />
                    <h1>Welcome Back</h1>
                    <Button
                        variant="light"
                        size="lg"
                        className="button-google-connect btn--light--custom"
                        onClick={() => handleLogin(LoginTypeConst.GOOGLE)}
                    >
                        <Image src={imgGoogle} alt="Image Google" />
                        Log in with Google{' '}
                    </Button>
                    <div className="separator text">
                        <p>OR LOGIN WITH EMAIL</p>{' '}
                    </div>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="email"
                                placeholder="Your Email"
                                onChange={(event) =>
                                    changeLogin({
                                        key: 'email',
                                        value: event.target.value?.trim(),
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Your Password"
                                onChange={(event) =>
                                    changeLogin({
                                        key: 'password',
                                        value: event.target.value?.trim(),
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 logged-forgot">
                            <Form.Check
                                type="checkbox"
                                label="Keep me logged in"
                            />
                            <Link to="#">Forgot password</Link>
                        </Form.Group>
                        <Button
                            variant="primary"
                            size="lg"
                            className="button-login btn--primary--custom"
                            onClick={() => handleLogin(LoginTypeConst.EMAIL)}
                        >
                            <span>Log in</span>
                            <MdArrowForward />
                        </Button>
                    </Form>
                    <div className="separator" />
                    <p className="dont-account">
                        Don&apos;t have an account yet?{' '}
                        <Link to="/auth/register">Sign up</Link>
                    </p>
                </div>
            </section>
        </div>
    );
};
