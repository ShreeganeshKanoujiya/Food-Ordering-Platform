import React from 'react'
import style from "../components/card.module.css";
import { about } from '../assets/assets'

const About = () => {
    return (
            <div className={style.mainContainer}>
                <div className={style.about}>
                    <h1>About us</h1>
                    <p>Welcome to our food haven — where flavor meets passion.</p>
                    <p>We are dedicated to bringing you the best culinary experiences from around the world, all in one place. Whether you're craving comfort food, exploring new cuisines, or looking for healthy options, our platform connects you with delicious meals crafted with care.</p>
                    <img src={about} alt='about us' />
                </div>
            </div>
    )
}

export default About