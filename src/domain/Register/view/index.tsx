import React from 'react';
import { Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { MdArrowForward } from 'react-icons/md';

import imgIllustration from '../../../assets/img/illustration.jpg';
import imgLogo from '../../../assets/img/logo.svg';

import './style.scss';

export const RegisterView = ({ handleCreateAccount, changeAccount }: any) => {
    return (
        <div id="register-component">
            <section className="illustration">
                <Image src={imgIllustration} alt="Image Illustration" />
                <h1>System to helper more on your work</h1>
                <p>
                    System to helper add you annotation in class diary from your
                    students
                </p>
            </section>
            <section className="register-actions">
                <div className="main-content">
                    <Image src={imgLogo} alt="Image Logo" />
                    <h1>Register your account</h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Your nickname"
                                onChange={(event) =>
                                    changeAccount({
                                        key: 'nickname',
                                        value: event.target.value?.trim(),
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="email"
                                placeholder="Your Email"
                                onChange={(event) =>
                                    changeAccount({
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
                                    changeAccount({
                                        key: 'password',
                                        value: event.target.value?.trim(),
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Your Confirm Password"
                                onChange={(event) =>
                                    changeAccount({
                                        key: 'confirmPassword',
                                        value: event.target.value?.trim(),
                                    })
                                }
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            size="lg"
                            className="button-register btn--primary--custom"
                            onClick={() => handleCreateAccount()}
                        >
                            <span>Register</span>
                            <MdArrowForward />
                        </Button>
                    </Form>
                    <div className="separator" />
                    <p className="dont-account">
                        Are you have an account yet?{' '}
                        <Link to="/auth/login">Sign in</Link>
                    </p>
                </div>
            </section>
        </div>
    );
};
