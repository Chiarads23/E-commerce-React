import React from 'react';
import Categories from './Categories';
import SlideCard from './SlideCard';
import Slider from './Slider';
import styles from '../../../Styles/Layout/Home.module.scss';


const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <Categories />
                <Slider />
            </div>
        </div>
    )
};

export default Home;