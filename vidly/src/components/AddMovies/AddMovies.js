import React from 'react';
import { useState } from 'react';
import Joi from 'joi-browser';

const AddMovies = () => {
    const [data, setData] = useState({
        title: "",
        genreId: '',
        numberInStock: '',
        dailyRentalRate: ''
    });
    const [genre, setGenre] = useState([]);
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
    return (
        <div>
            add movies
        </div>
    );
};

export default AddMovies;