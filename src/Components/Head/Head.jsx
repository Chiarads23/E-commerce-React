import React from 'react';
import { FaPhone, FaEnvelope } from "react-icons/fa";

import styles from '../../Styles/Layout/Head.module.scss';

const Head= () => {
    return(
        <section className={styles.head}>
            <div className={styles.container}>
                <div className={styles.leftRow}>
                   <div className={styles.contactOne}> <FaPhone />
                    <label> +391234567890</label></div>
                    <div className={styles.contactTwo}><FaEnvelope />
                    <label> example@coding.com</label></div>
                </div>
                <div className={styles.rightRow}>
                    <label>FAQ's</label>
                    <label>Need Help</label>
                </div>
            </div>
        </section>
    )
};

export default Head;

