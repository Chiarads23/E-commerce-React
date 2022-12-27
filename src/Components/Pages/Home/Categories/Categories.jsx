import React from "react";

import styles from "../../../../Styles/Layout/Categories.module.scss";

const Categories = () => {
const data = [
  {
    categImg:'https://icon-library.com/images/tshirt-icon/tshirt-icon-21.jpg',
    categName: 'Men\'s clothing',
  },
  {
    categImg:'https://cdn0.iconfinder.com/data/icons/clothes-vol-1-2/48/20-512.png',
    categName: 'Women\'s clothing',
  },
  {
    categImg:'https://static.thenounproject.com/png/1451484-200.png',
    categName: 'Jewellery',
  },
  {
    categImg:'https://cdn-icons-png.flaticon.com/128/2777/2777142.png',
    categName: 'Electronics',
  },
]
return (
  <>
    <div className={styles.category}>
      {data.map((value, index) => {
        return (
          <div className={styles.box} key={index}>
            <img className={ styles.categIcons} src={value.categImg} alt='' />
            <span>{value.categName}</span>
          </div>
        )
      })}
    </div>
  </>
)
 }

export default Categories;








  // return (
  //   <div className={styles.category}>
    
  // {  categProducts.map((product, index) => {
  //         return (
  //            <div className= {styles.box} key= {index}>
  //              <img src={product.image} alt="" />
  //              <span>{product.category}</span>
  //            </div>
  //         );
  //      })
    
  //   }
  //     {/* /* {
  //       categProducts.map((product) => {
  //         return (
  //           <div key= {product.id}>
  //             <span>{product.category}</span>
  //             <img src={product.image} alt={product.title} />
  //           </div>
  //         );
  //       })
   
  //     } */ }
  //   </div>
  // );
//
//   const check = localStorage.getItem('categProducts');
//   if(check) {
//     setCategProducts(JSON.parse(check));
//   } else {
//     const api = await fetch ('https://fakestoreapi.com/products?limit=6');
//     const data = await api.json();
//     localStorage.setItem('categProducts', JSON.stringify(data.products));
//     setCategProducts(data.products);
//     console.log(data)
//   }
// }
     // data.map((value, index) => {
        //   return (
        //     <div className= {styles.box} key= {index}>
        //       <img src={value.image} alt="" />
        //       <span>{value.category}</span>
        //     </div>
        //   )
        // })
         // categProducts.map((product) => {
        //   return (
        //     <div className= {styles.box} key= {id}>
        //       <img src={product.image} alt="" />
        //       <span>{product.category}</span>
        //     </div>
        //   )
        // })
// fetch('https://fakestoreapi.com/products?limit=6')
