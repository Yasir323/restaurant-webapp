import React, { useState } from "react";
import "../static/css/BookingForm.css";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }
    const handleChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e);
    }
    return (
        <section>
            <form action="" onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        {/* Date */}
                        <label htmlFor="book-date"><span className="required">*</span> Pick a date: </label>
                        <input type="date" name="book-date" id="book-date" value={date} onChange={handleChange} required />
                    </div>
                    <div>
                        {/* Time */}
                        <label htmlFor="book-time"><span className="required">*</span> Pick a time: </label>
                        <select name="book-time" id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                            <option value="">Select a time</option>
                            {props.availableTimes.availableTimes.map(availableTimes => <option key={availableTimes}>{availableTimes}</option>)}
                        </select>
                    </div>
                    <div>
                        {/* Number of guests */}
                        <label htmlFor="book-guests"><span className="required">*</span>Number of Guests: </label>
                        <input type="number" id="book-guests" min="1" value={guests} required onChange={(e) => setGuests(e.target.value)}/>
                    </div>
                    <div>
                        {/* Occasion */}
                        <label htmlFor="book-occasion">Occasion: </label>
                        <select name="book-occasion" id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option value=""></option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                    <div className="btnReceive"> 
                        {/* Submit button */}
                        <input aria-label="On Click" type="submit" value={"Make Your Reservation"}/>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default BookingForm;
