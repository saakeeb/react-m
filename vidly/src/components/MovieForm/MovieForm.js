import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const MovieForm = () => {
    const params = useParams();
    const navigate = useNavigate();
    console.log(params);
    return (
        <div>
            <h3>Movie form {params.id}</h3>
            <Button onClick={() => navigate('/')} variant="light">Save</Button>
        </div>
    );
};

export default MovieForm;