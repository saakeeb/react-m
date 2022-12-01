// import Select from "./select";
import Joi from 'joi-browser';
import { Button } from 'react-bootstrap';
import InputForm from '../components/common/Form/InputForm';

function useFormInput(props) {
    const { schema, doSubmit, data, setData, error, setError } = props;

    const validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(data, schema, options);

        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
        // const { data } = formValue;
        // if (data?.username.trim() === "") {
        //     errors.username = 'Username is required!!!';
        // }
        // if (data?.password.trim() === "") {
        //     errors.password = 'Password is required!!!';
        // }
        // return Object.keys(errors).length === 0 ? null : errors;
    }

    const validateInputProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const subSchema = { [name]: schema[name] }
        const { error } = Joi.validate(obj, subSchema);
        return error ? error.details[0].message : null;
    }

    const handleChange = ({ currentTarget: input }) => {
        const errorMessage = validateInputProperty(input);
        const errors = { ...error };
        errorMessage
            ? (errors[input.name] = errorMessage)
            : delete errors[input.name];
        setError(errors);
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validate() || {});
        if (Object.keys(error).length) return;
        console.log(data);
        doSubmit();
    };

    const renderButton = (label) => {
        return (
            <Button
                disabled={validate()}
                // variant="primary"
                type="submit"
                className='d-block ms-auto mt-3 css-button-sliding-to-left--primary'
            >
                {label}
            </Button>
        );
    };

    const renderInput = ({ label, name, type = "text", id, text = '', focused = false }) => {
        return (
            <InputForm
                name={name}
                label={label}
                type={type}
                autoFocus={focused}
                value={data[name]}
                error={error[name]}
                onChange={handleChange}
                controlId={id}
                text={text}
            />
        );
    };

    // const renderSelect = ({ label, name, options }) => {
    //     return (
    //         <Select
    //             name={name}
    //             value={data[name]}
    //             label={label}
    //             options={options}
    //             onChange={changeHandler}
    //             error={error[name]}
    //         />
    //     );
    // };

    return {
        handleSubmit,
        renderButton,
        renderInput,
        // renderSelect
    };
}

export default useFormInput;