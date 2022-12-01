import React from 'react';
import { useState } from 'react';
import Joi from 'joi-browser';
import { Form } from 'react-bootstrap';
import useFormInput from '../../hooks/useFormInput';
import './LoginInfo.css';

const LoginInfo = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState({});

    const rule = {
        schema: {
            username: Joi.string().required().label("Username"),
            password: Joi.string().required().label("Password")
        },
        doSubmit: () => {
            console.log("submitted");
            setData({username: '', password: ''});
        },
        data,
        setData,
        error,
        setError
    };

    const { renderInput, renderButton, handleSubmit } = useFormInput(rule);

    // const validate = () => {
    //     const options = { abortEarly: false };
    //     const { error } = Joi.validate(formValue.data, schema, options);

    //     if (!error) return null;

    //     const errors = {};
    //     for (let item of error.details) errors[item.path[0]] = item.message;
    //     return errors;
    //     // const { data } = formValue;
    //     // if (data?.username.trim() === "") {
    //     //     errors.username = 'Username is required!!!';
    //     // }
    //     // if (data?.password.trim() === "") {
    //     //     errors.password = 'Password is required!!!';
    //     // }
    //     // return Object.keys(errors).length === 0 ? null : errors;
    // }

    // const validateInputProperty = ({ name, value }) => {
    //     const obj = { [name]: value };
    //     const subSchema = { [name]: schema[name] }
    //     const { error } = Joi.validate(obj, subSchema);
    //     return error ? error.details[0].message : null;
    //     // if (name === 'username') {
    //     //     if (value.trim() === "") return 'Username is required!!!';
    //     // }
    //     // if (name === 'password') {
    //     //     if (value.trim() === "") return 'Password is required!!!';
    //     // }
    // }

    // const handleChange = ({ currentTarget: input }) => {
    //     const errors = { ...formValue.errors };
    //     const errorMessage = validateInputProperty(input);
    //     if (errorMessage) errors[input.name] = errorMessage;
    //     else delete errors[input.name];

    //     const data = { ...formValue.data };
    //     data[input.name] = input.value;
    //     setFormValue({ data, errors });
    // }

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const errors = validate();
    //     setFormValue({ errors: errors || {} });
    //     if (errors) return;
    //     doSubmit();
    // }

    // const doSubmit = () =>{
    //     //call the server
    //     console.log('Submitted');
    // }

    // const { data, errors } = formValue;
    return (
        <div className="container">
            <h2>Login</h2>
            <div className="form-container d-block m-auto">
                <Form className='mt-5' onSubmit={handleSubmit}>
                    {renderInput({
                        label: "Username",
                        name: "username",
                        focused: true,
                        id: "floatingUsername",
                        text: "We'll never share your data with anyone else."
                    })}
                    {renderInput({
                        label: "Password",
                        name: "password",
                        type: "password",
                        id: "floatingPassword"
                    })}
                    {renderButton("Login")}
                    {/* <InputForm
                        controlId="floatingCustomUsername"
                        label='Username'
                        name='username'
                        type='text'
                        value={data?.username}
                        onChange={handleChange}
                        text="We'll never share your data with anyone else."
                        error={errors?.username}
                        autoFocus="autofocus"
                    />
                    <InputForm
                        controlId="floatingPassword"
                        label='Password'
                        name='password'
                        type='password'
                        value={data?.password}
                        onChange={handleChange}
                        text=""
                        error={errors?.password}
                        autoFocus=""
                    />
                    <Button
                        disabled={validate()}
                        variant="primary"
                        type="submit"
                        className='d-block ms-auto mt-3'
                    >
                        Submit
                    </Button> */}
                    {/* <input type="submit" value="Submit" className='d-block ms-auto mt-3 btn btn-primary' /> */}
                </Form>
                {/* <form className='mt-5' onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            placeholder="Username"
                            autoFocus
                            value={formValue.data?.username}
                            onChange={handleChange}
                            name='username'
                            id='username'
                        />
                        <label htmlFor="username">Username</label>
                        <div id="emailHelp" className="form-text">We'll never share your data with anyone else.</div>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            placeholder="Password"
                            value={formValue.data?.password}
                            onChange={handleChange}
                            name='password'
                            id='password'
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit" className='d-block ms-auto mt-3 btn btn-primary'>Submit</button>
                </form> */}
            </div>
        </div>
    );
};

export default LoginInfo;