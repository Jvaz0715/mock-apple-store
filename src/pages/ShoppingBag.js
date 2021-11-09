import React, {useContext} from 'react';

import {ShoppingBagContext} from "../context/ShoppingBagContext"

function ShoppingBag() {
   const {
      productsInBag,
      removeFromBag
   } = useContext(ShoppingBagContext);

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
      </div>
   )
}

export default ShoppingBag;
