import SlideCard from '../SlideCard';
import styles from '../../../../Styles/Layout/Slider.module.scss';


const Slider = () => {
    return (
        <div>
            <section className={styles.Slider}>
                <div className={styles.container}>
                    <SlideCard  />
                </div>
            </section>
        </div>
    )
};

export default Slider;