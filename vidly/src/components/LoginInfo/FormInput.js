import React, { useState } from 'react';
import Joi from 'joi-browser';

const FormInput = () => {
    const [formValue, setFormValue] = useState({
        data: {},
        errors: {}
    });

    const validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(formValue.data, schema, options);
        console.log(error);

        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    }

    const validateInputProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const subSchema = { [name]: schema[name] }
        const { error } = Joi.validate(obj, subSchema);
        return error ? error.details[0].message : null;
    }
    return (
        <div>
            
        </div>
    );
};

export default FormInput;