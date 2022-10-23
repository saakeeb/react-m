import React from 'react';
import './global/main.css';
import { Navigate, Route, Routes} from 'react-router-dom';
import Layouts from './Layouts/Layouts';
import Customers from './Customers/Customers';
import Movies from './Movies/Movies';
import Rentals from './Rentals/Rentals';
import NotFound from './NotFound/NotFound';
import MovieForm from './MovieForm/MovieForm';

const Main = () => {
    return (
        <div className='main'>
            <>
                <Routes>
                    <Route path='/' element={<Layouts />}>
                        <Route path="/" exact element={<Movies />} />
                        <Route path="/movies/:id" exact element={<MovieForm />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/rentals" element={<Rentals />} />
                        <Route path="/rentals" element={<Rentals />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<Navigate replace to="/404" />} />
                    </Route>
                </Routes>
            </>
        </div>
    );
};

export default Main;