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
      removeFromBag,
   } = useContext(ShoppingBagContext)

   console.log("productsInBag from Home")
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
               </div>
            )
         })}
         {/* {<ul>
            {productsInBag.map((product) => {
               return (
               <li key={product.id}>
                  <span>{product.title}</span>
                  <button
                     onClick={() =>{
                        removeFromBag(product.id)
                        console.log(productsInBag)
                     }}
                  >
                     REMOVE FROM BAG
                  </button>
               </li>
               )
            })}
         </ul>} */}
      </div>
   )
}

export default Home;
