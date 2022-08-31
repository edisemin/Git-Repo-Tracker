import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import {  } from './pages';

const App = () => {

    return <Routes>
                <Route path="/" element={< />} />
                <Route path="/:" element={< />}/>
                <Route path="*" element={<h1>Not available!</h1>}></Route>
            </Routes>
}

export default App;
