import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const Searchbox = ({ onChange, value }) => {
    console.log('props', onChange, 'value', value);
    return (
        <>
            <FloatingLabel
                controlId="floatingQuery"
                label="Search Movies..."
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="Search Movies..."
                    name='query'
                    onChange={e => onChange(e.target.value)}
                    value={value}
                />
            </FloatingLabel>
        </>
    );
};

export default Searchbox;