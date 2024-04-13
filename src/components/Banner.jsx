import React from "react";
import { Link } from "react-router-dom";
import "../static/css/Banner.css";
import bannerImage from "../static/images/restauranfood.jpg";

const Section = () => {
    return (
        <section>
            <div className="banner">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on 
                    traditional recipies served with a modern twist.</p>
                <Link to="/booking">
                    <button aria-label="On Click">Reserve Table</button>
                </Link>
                </div>
                <div className="banner-img">
                    <img src={bannerImage} alt="poster" />
                </div>
        </section>
    );
}

export default Section;
