import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useReducer } from "react";
import Booking from "./components/Booking";
import ConfirmedBooking from "./components/ConfirmedBooking";

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
    const fetchAPI = function(date) {
        const result = [];
        for (let i = 14; i < 24; i++) {
            if (Math.random() < 0.5) {
                result.push(i + ":00");
            } else {
                result.push(i + ":30");
            }
        }
        return result;
    }

    const submitAPI = (formData) => true;

    const initialState = {availableTimes: fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())};
    }

    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }
    return (
        <div className="App">
            <Header logo={logo}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />}/>
                <Route path="/confirmed" element={<ConfirmedBooking />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
