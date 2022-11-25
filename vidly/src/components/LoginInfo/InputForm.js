import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const InputForm = ({ controlId, label, name, type, value, handleChange, text, autoFocus }) => {
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
                    value={value}
                    onChange={handleChange}
                    name={name}
                    autoFocus={autoFocus}
                />
                <Form.Text className="text-muted">{text}</Form.Text>
            </FloatingLabel>
        </>
    );
};

export default InputForm;