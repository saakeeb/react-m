import React from 'react';
import './global/main.css';
import { Route, Routes} from 'react-router-dom';
import Layouts from './Layouts/Layouts';
import Customers from './Customers/Customers';
import Movies from './Movies/Movies';
import Rentals from './Rentals/Rentals';
import NotFound from './NotFound/NotFound';

const Main = () => {
    return (
        <div className='main'>
            <>
                <Routes>
                    <Route path='/' element={<Layouts />}>
                        <Route path="/" exact element={<Movies />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/rentals" element={<Rentals />} />
                        <Route path="/rentals" element={<Rentals />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </>
        </div>
    );
};

export default Main;