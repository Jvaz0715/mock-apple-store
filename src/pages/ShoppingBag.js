import React, {useContext} from 'react';

import {ShoppingBagContext} from "../context/ShoppingBagContext"

function ShoppingBag() {
   const {
      productsInBag,
      removeFromBag
   } = useContext(ShoppingBagContext);

   const shoppingBagProducts = JSON.parse(window.localStorage.getItem("shoppingBag"))
   console.log("shoppingBagProducts")
   console.log(shoppingBagProducts)
   return (
      <div>
         <hr />
         {productsInBag.map((product)=>{
            return (
               <div key={product.id}>
                  <span>{product.title}</span>
                  <button
                     onClick={() => {
                        removeFromBag(product)
                        console.log(productsInBag)
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
