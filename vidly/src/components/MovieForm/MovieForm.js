
import { useState, useEffect } from 'react';
import Joi from 'joi-browser';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import useFormInput from '../../hooks/useFormInput';
import { getGenres } from '../../services/fakeGenreService';
import { getMovies, saveMovie } from '../../services/fakeMovieService';

const MovieForm = () => {
    const [data, setData] = useState({
        title: "",
        genreId: '',
        numberInStock: '',
        dailyRentalRate: ''
    });

    const [genres, setGenres] = useState([]);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const movieId = useLocation().pathname.split("/")[2];
    const movie = getMovies();
    let [selectedMovie] = movie.filter(item => item._id === movieId);
    
    useEffect(() => {
        const genres = getGenres();
        setGenres(genres);
        if (movieId === "new") return;
        if (!selectedMovie) return navigate("/not-found", { replace: true });
        setData(mapToViewModel(selectedMovie));
    }, [selectedMovie, movieId, navigate]);

    const mapToViewModel = (movie) => {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre?._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    };

    const rule = {
        schema: {
            _id: Joi.string(),
            title: Joi.string().required().label("Title"),
            genreId: Joi.string().required().label("Genre"),
            numberInStock: Joi.number().min(0).max(100).required().label("Number In Stock"),
            dailyRentalRate: Joi.number().min(0).max(10).required().label("Daily Rental Rate")
        },
        doSubmit: () => {
            console.log("submitted");
            data.title = data.title.charAt(0).toUpperCase() + data.title.slice(1);
            saveMovie(data);
            navigate('/');
        },
        data,
        setData,
        error,
        setError
    };

    const { renderInput, renderSelect, renderButton, handleSubmit } = useFormInput(rule);

    return (
        <div className="container">
            {
                movieId === "new" ?
                    (<h2>Add new movie</h2>)
                    :
                    (<h2>Edit movie</h2>)
            }
            
            <div className="form-container d-block m-auto">
                <Form className='mt-5' onSubmit={handleSubmit}>
                    {renderInput({
                        label: "Title",
                        name: "title",
                        focused: true,
                        id: "floatingTitle"
                    })}
                    {renderSelect({
                        label: "Genre",
                        name: "genreId",
                        options: genres
                    })}
                    {renderInput({
                        label: "Number In Stock",
                        name: "numberInStock",
                        type: "number",
                        id: "floatingNumberInStock"
                    })}
                    {renderInput({
                        label: "Daily Rental Rate",
                        name: "dailyRentalRate",
                        type: "number",
                        id: "floatingDailyRentalRate"
                    })}
                    {renderButton("Add Movie")}
                </Form>
            </div>
        </div>
    );
};

export default MovieForm;