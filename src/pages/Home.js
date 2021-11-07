import React from 'react';
import { v4 as uuidv4 } from 'uuid';// so that we do not need to hardcode product ids

//our data to display
const productList = [
   {
      id: uuidv4(),
      title: "Apple iPhone 13 Pro Max",
      description: 'A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery life.',
      brand: 'Apple',
      price: 109999,
      img: "https://www.apple.com/v/iphone-13-pro/c/images/overview/design/design_display_pro_max__bv0sb70j43jm_large_2x.png",
   },
   {
      id: uuidv4(),
      title: "Apple iPad 13 Mini",
      description: 'iPad mini is meticulously designed to be absolutely beautiful. An all-new enclosure features a new, larger edge-to-edge screen, along with narrow borders and elegant rounded corners.',
      brand: 'Apple',
      price: 44999,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-202109?wid=1080&hei=1060&fmt=jpeg&qlt=80&.v=1631751017000",
   },
   {
      id: uuidv4(),
      title: "Apple Watch Series 7",
      description: 'The larger display enhances the entire experience, making Apple Watch easier to use and read. Series 7 represents our biggest and brightest thinking yet.',
      brand: 'Apple',
      price: 39999,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKU83_VW_34FR+watch-41-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171038000,1631661171000",
   },
   {
      id: uuidv4(),
      title: "MacBook Pro",
      description: 'The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.',
      brand: 'Apple',
      price: 199999,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788573000",
   },
];

function Home() {
   return (
      <div>
         Home Page
      </div>
   )
}

export default Home;
