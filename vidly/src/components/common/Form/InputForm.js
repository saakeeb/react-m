import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const InputForm = ({ controlId, label, name, type, text, error, ...rest }) => {
    return (
        <>
            <FloatingLabel
                controlId={controlId}
                label={label}
                className="mb-3"
            >
                <Form.Control
                    type={type}
                    placeholder={label}
                    name={name}
                    {...rest}
                    // value={value}
                    // onChange={onChange}
                    // autoFocus={autoFocus}
                />
                <Form.Text className="text-muted">{text}</Form.Text>
                {
                    error && 
                    <Form.Text className="alert alert-danger d-block"> {error} </Form.Text>
                }
            </FloatingLabel>
        </>
    );
};

export default InputForm;