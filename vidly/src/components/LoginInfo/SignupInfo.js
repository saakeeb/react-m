import React from 'react';
import { useState } from 'react';
import Joi from 'joi-browser';
import useFormInput from '../../hooks/useFormInput';
import { Form } from 'react-bootstrap';

const SignupInfo = () => {
    const [data, setData] = useState({
        name: "",
        username: "",
        password: ""
    });
    const [error, setError] = useState({});
    
    const rule = {
        schema: {
            name: Joi.string().alphanum().max(20).required().label("Name"),
            username: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().label("Email"),
            password: Joi.string().min(6).required().label("Password")
        },
        doSubmit: () => {
            console.log("submitted");
            setData({ name: '', username: '', password: '' });
        },
        data,
        setData,
        error,
        setError
    };

    const { renderInput, renderButton, handleSubmit } = useFormInput(rule);
    return (
        <div className="container">
            <h2>Sign Up</h2>
            <div className="form-container d-block m-auto">
                <Form className='mt-5' onSubmit={handleSubmit}>
                    {renderInput({
                        label: "Name",
                        name: "name",
                        focused: true,
                        id: "floatingName",
                        text: "We'll never share your data with anyone else."
                    })}
                    {renderInput({
                        label: "Username",
                        name: "username",
                        id: "floatingUsername",
                        type: "email",
                    })}
                    {renderInput({
                        label: "Password",
                        name: "password",
                        type: "password",
                        id: "floatingPassword"
                    })}
                    {renderButton("Sign Up")}
                </Form>
            </div>
        </div>
    );
};

export default SignupInfo;