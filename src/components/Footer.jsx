import "../static/css/Footer.css";
import logo from "../logo.svg";

const Footer = () => {
    return <footer>
        <section>
            <div className="company-info">
                <img src={logo} alt="Logo" />
                <p>We are a family owned Mediterranean restaurant, focused on 
                    traditional recipies served with a modern twist.</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/orderOnline">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address: <br />123, Towncity, USA</li>
                    <li>Phone: <br />++ 0123 456 789</li>
                    <li>Email: <br />little@lemon.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Twitter</a></li>
                </ul>
            </div>
        </section>
    </footer>;
}

export default Footer;