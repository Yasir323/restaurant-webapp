import Banner from "./Banner";
import Menu from "./Menu";

const Main = () => {
    

    return <main>
        <Banner />
        <Menu />
        {/* <Routes>
            <Route path="/" element={<Banner />}/>
            <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />}/>
            <Route path="/confirmed" element={<ConfirmedBooking />}/>
        </Routes> */}
    </main>;
}

export default Main;
