import React from 'react';
import { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import InputForm from './InputForm';
import './LoginInfo.css';

const LoginInfo = () => {
    const [formValue, setFormValue] = useState({
        action: {
            username: "",
            password: ""
        }
    });

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitted');
    }

    const handleChange = ({currentTarget: input}) => {
        const action = { ...formValue.action };
        action[input.name] = input.value;
        setFormValue({action});
    }
    return (
        <div className="container">
            <h2>login</h2>
            <div className="form-container d-block m-auto">
                <Form className='mt-5' onSubmit={handleSubmit}>
                    <InputForm
                        controlId="floatingCustomUsername"
                        label='Username'
                        name='username'
                        type='text'
                        value={formValue.action.username}
                        handleChange={handleChange}
                        text="We'll never share your data with anyone else."
                    />
                    <InputForm
                        controlId="floatingPassword"
                        label='Password'
                        name='password'
                        type='password'
                        value={formValue.action.password}
                        handleChange={handleChange}
                        text=""
                    />
                    <Button variant="primary" type="submit" className='d-block ms-auto mt-3'>Submit</Button>
                    {/* <input type="submit" value="Submit" className='d-block ms-auto mt-3 btn btn-primary' /> */}
                </Form>
                {/* <form className='mt-5' onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            placeholder="Username"
                            autoFocus
                            value={formValue.action?.username}
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
                            value={formValue.action?.password}
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