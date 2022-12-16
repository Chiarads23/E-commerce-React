import { useState, useEffect } from "react";


import styles from "../../../../Styles/Layout/SlideCard.module.scss";

const SlideCard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);


  return (
    <div className={styles.slideCard}>
    
      
        {data &&
          data.map((item) => (
       
              <div className={styles.box} key={item.id}>
                <div className={styles.left}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button>Visit Collections</button>
                </div>
                <div className={styles.right}>
                  <img className={styles.prodImg} src={item.image} alt="" />
                </div>
              </div>
          
          ))}
    
    </div>
  );
};

export default SlideCard;
