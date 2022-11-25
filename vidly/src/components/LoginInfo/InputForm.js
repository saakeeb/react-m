import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const InputForm = ({ controlId, label, name, type, value, handleChange, text}) => {
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
                    autoFocus
                    value={value}
                    onChange={handleChange}
                    name={name}
                />
                <Form.Text className="text-muted">{text}</Form.Text>
            </FloatingLabel>
        </>
    );
};

export default InputForm;