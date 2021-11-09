import React, {useContext} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from "@mui/icons-material/Delete";
import {ShoppingBagContext} from "../context/ShoppingBagContext"

function ShoppingBag() {
   const {
      productsInBag,
      removeFromBag,
   } = useContext(ShoppingBagContext);

   const totalBagPrice = (arr) => {
      let totalPrice  = 0;
      arr.map((item => {
         totalPrice = totalPrice + item.price;
         return totalPrice
      }))

      return totalPrice/100;
   };

   console.log(totalBagPrice(productsInBag))

   console.log(productsInBag)
   return (
      <div>
         <hr />
         <Stack>
         {productsInBag.map((product)=>{
            return (
               <div key={product.id}>
                  <img src={product.img} alt={product.title} width="auto" height="50px"/>
                  <span>{product.title}</span>
                  <Button
                     variant="contained"
                     size="small"
                     color="error"
                     endIcon={<DeleteIcon />}
                     onClick={() => {
                        removeFromBag(product)
                     }}
                  >
                     Delete
                  </Button>
               </div>
            )
         })}
         </Stack>
         <hr />
         <div style={{display:"flex", flexDirection:"column", alignItems:"end", marginRight:"20px"}}>
            <span style={{ marginBottom:"10px"}}>
               Total: {productsInBag.length > 0 ? totalBagPrice(productsInBag) : `$0.00`}
            </span>
            <Button 
               size="medium"
               variant="contained"
            >
               Checkout
            </Button>
         </div>
      </div>
   )
}

export default ShoppingBag;
