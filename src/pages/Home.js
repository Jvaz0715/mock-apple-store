import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



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
      // productsInBag,
      addToBag,
   } = useContext(ShoppingBagContext)

   // console.log(productsInBag)
   return (
      <div style={{display:"flex", flexDirection: "column", alignItems:"center",marginTop:"50px"}}>
         {productList.map((product) => {
            return (
               // <div key={product.id}>
               //    <span>{product.title}</span>
               //    <button 
               //       onClick={() => {
               //          addToBag(product);
               //       }}
               //    >
               //       ADD TO BAG
               //    </button>
               // </div>
               <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                     component="img"
                     height="25%"
                     image={product.img}
                     alt={product.title}
                  />
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        {product.description}
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Button size="small">Share</Button>
                     <Button size="small">Learn More</Button>
                  </CardActions>
               </Card>
            )
         })}
      </div>
   )
}

export default Home;
