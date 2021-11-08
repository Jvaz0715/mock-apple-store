import React, {useState, useEffect, useReducer} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ShoppingBagContext } from "./context/ShoppingBagContext"; //brings in the Shopping Bag Context we created
import { fetchProducts } from "./ProductsData"; //brings in our mock data

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ShoppingBag from "./pages/ShoppingBag";

import './App.css';

// we use this object so that we avoid any syntax errors in our dispatch
export const ACTIONS = {
  ADD_TO_BAG: "add-to-bag",
  DELETE_FROM_BAG: "delete-from-bag",
  EMPTY_BAG: "empty-bag",
};

function reducer(productsInBag, action) {
  if(action.type === ACTIONS.ADD_TO_BAG) {
    return [...productsInBag, {...action.payload}]
  }
};

// create a function that will return the item's image, name, and price in an object


function App() {
  const [productsInBag, dispatch] = useReducer(reducer, []); //this will populate as we add items to our bag
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((products) =>{
        setProductList(products)
      })
  }, [])

  // we will pass down this function to the home page so when we add to bag, we update the productsInBag data
  const addToBag = (product) =>{
    dispatch({type: ACTIONS.ADD_TO_BAG, payload: product})
  }

  const shoppingBagProviderValue = {
    productList,
    productsInBag,
    addToBag
  };

  return (
    <ShoppingBagContext.Provider value={shoppingBagProviderValue}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bag" element={<ShoppingBag />} />
        </Routes>
      </Router>
    </ShoppingBagContext.Provider>
  );
}

export default App;
