import BookingForm from "./BookingForm";

const Booking = (props) => {
    return (
        <main>
            <div>
                <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
            </div>
        </main>
    );
}

export default Booking;
