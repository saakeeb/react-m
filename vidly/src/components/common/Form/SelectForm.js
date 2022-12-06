import React from 'react';
import { Dropdown, FloatingLabel, Form } from 'react-bootstrap';

const SelectForm = ({ name, label, options, error, ...rest }) => {
    return (
        <>
            <FloatingLabel
                controlId={name}
                label={label}
                className="mb-3"
            >
                <select className="form-select mb-3" id={name} name={name} {...rest}>
                    <option value=""></option>
                    {options.map(({ _id, name }) => {
                        return (
                            <option key={_id} value={_id}>
                                {name}
                            </option>
                        );
                    })}
                </select>
                {
                    error &&
                    <Form.Text className="alert alert-danger d-block"> {error} </Form.Text>
                }
            </FloatingLabel>
        </>
    );
};

export default SelectForm;