import Nav from "./Nav";
import "../static/css/Header.css";

const Header = ({ logo }) => {
    return (
        <header>
            {/* Logo */}
            <a href="/">
                <img src={logo} alt="Little-Lemon-Logo" />
            </a>
            {/* Navigation bar */}
            <Nav />
        </header>
    );
}

export default Header;
