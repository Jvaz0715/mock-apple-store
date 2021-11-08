import React, {useContext} from 'react';

import {ShoppingBagContext} from "../context/ShoppingBagContext"
/*

   James: We can use this file to create how we want our products to display.

   TODO: Design cards for products that includes:
      -image
      -name
      -price
      -description
      -add to bag button
*/

function Home() {
   const {
      productList,
      productsInBag,
      addToBag,
   } = useContext(ShoppingBagContext)

   console.log("productsInBag")
   console.log(productsInBag)
   
   return (
      <div>
         {productList.map((product) => {
            return (
               <div key={product.id}>
                  <span>{product.title}</span>
                  <button 
                     onClick={() => {
                        addToBag(product);
                        console.log(productsInBag)
                     }}
                  >
                     ADD TO BAG
                  </button>
               </div>)
         })}
      </div>
   )
}

export default Home;
