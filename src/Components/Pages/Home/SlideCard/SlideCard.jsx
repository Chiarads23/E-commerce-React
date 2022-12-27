import { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import React from "react";


import styles from "../../../../Styles/Layout/SlideCard.module.scss";


const SlideCard = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

const {addItem} = useCart();

  return (
    <div className={styles.slideCard}>
    
      
        {data &&
          data.map((item) => (
       
              <div className={styles.box} key={item.id}>
                <div className={styles.left}>
                  <h1>{item.title}</h1>
                  <p> $. {item.price}</p>
                  <button  onClick ={()=>addItem(props.item)}>Add to cart</button>
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
