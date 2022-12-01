import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import Layouts from './Layouts/Layouts';
import Customers from './Customers/Customers';
import Movies from './Movies/Movies';
import Rentals from './Rentals/Rentals';
import NotFound from './NotFound/NotFound';
import MovieForm from './MovieForm/MovieForm';
import LoginInfo from './LoginInfo/LoginInfo';
import SignupInfo from './LoginInfo/SignupInfo';
import AddMovies from './AddMovies/AddMovies';
import './global/main.css';

const Main = () => {
    return (
        <div className='main'>
            <>
                <Routes>
                    <Route path='/' element={<Layouts />}>
                        <Route path="/" exact element={<Movies />} />
                        <Route path="/login" exact element={<LoginInfo />} />
                        <Route path="/signup" exact element={<SignupInfo />} />
                        <Route path="/movies/:id" exact element={<MovieForm />} />
                        <Route path="/movies/new" exact element={<AddMovies />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/rentals" element={<Rentals />} />
                        <Route path="/rentals" element={<Rentals />} />
                        <Route path="/not-found" element={<NotFound />} />
                        <Route path="*" element={<Navigate replace to="/not-found" />} />
                    </Route>
                </Routes>
            </>
        </div>
    );
};

export default Main;