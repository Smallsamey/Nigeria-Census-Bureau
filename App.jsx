import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import DataAnalytics from './pages/DataAnalytics';
import About from './pages/About';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/analytics" element={<DataAnalytics />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
