import React, {useContext} from 'react';

import {ShoppingBagContext} from "../context/ShoppingBagContext"

function ShoppingBag() {
   const {
      productsInBag,
      removeFromBag
   } = useContext(ShoppingBagContext);

   const totalBagPrice = (arr) => {
      let totalPrice  = 0;
      arr.map((item => {
         totalPrice = totalPrice + item.price;
         return totalPrice
      }))

      return totalPrice/100;
   }

   console.log(totalBagPrice(productsInBag))

   console.log(productsInBag)
   return (
      <div>
         <hr />
         {productsInBag.map((product)=>{
            return (
               <div key={product.id}>
                  <img src={product.img} alt={product.title} height="100px"/>
                  <span>{product.title}</span>
                  <button
                     onClick={() => {
                        removeFromBag(product)
                     }}
                  >
                     REMOVE FROM BAG
                  </button>
               </div>
            )
         })}
         <hr />
         <div>
            {totalBagPrice(productsInBag)}
         </div>
      </div>
   )
}

export default ShoppingBag;
