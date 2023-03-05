// rafce -> shortcut to create component and export
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
//import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import DietPlan from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Yoga from "./pages/newPages/Yoga";
// import Login from "./pages/login/login";
import Kickboxing from "./pages/kickboxing/Kickboxing";
import { Dance } from "./pages/dance/Dance";
import Weight from "./pages/weight/Weight";
import Products from "./pages/Products/Products";
import { useState, useEffect} from 'react';
import {commerce} from "./pages/lib/commerce"
import Cart  from "./pages/Cart/Cart" ;
import Checkout from "./pages/checkoutForm/checkout/checkout";
import Login from "./pages/login/Login";
import Main from "./pages/login/Main";
import Signup from "./pages/login/Singup";


const App = () => {
	const user = localStorage.getItem("token");
	
	const[products, setProducts] = useState([]);
	const [cart, setCart]= useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
		

        setProducts(data);
    }

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	}


	 const handleAddToCart = async (productID, quantity) => {
	 	const { cart }= await commerce.cart.add(productID, quantity);

	 	setCart(cart);

	 }

	 const handleUpdateCartQty = async (productId, quantity) => {
		const { cart } = await commerce.cart.update(productId, { quantity });
	
		setCart(cart);
	  };
	
	  const handleRemoveFromCart = async (productId) => {
		const { cart } = await commerce.cart.remove(productId);
	
		setCart(cart);
	  };
	
	  const handleEmptyCart = async () => {
		const { cart } = await commerce.cart.empty();
	
		setCart(cart);
	  };
	
	  const refreshCart = async () => {
		const newCart = await commerce.cart.refresh();
	
		setCart(newCart);
	  };

	 useEffect(() => {
		fetchProducts();
		fetchCart();

    }, []);

	return(

		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="Products" element={<Products products={products} totalItems={cart.total_items} onAddToCart={handleAddToCart}  />} />
				<Route path="Cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}  />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path="plans" element={<Plans />} />
				<Route path="trainers" element={<DietPlan />} />
				{/* <Route path="login" element={<Login />} /> */}
				<Route exact path="/login" element={<Login />} />
				<Route path="newPages" element={<Yoga />} />
				<Route path="kickboxing" element={<Kickboxing />} />
				<Route path="dance" element={<Dance />} />
				<Route path="weight" element={<Weight />} />
				{user && <Route path="/Main" exact element={<Main />} />}
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/" element={<Navigate replace to="/login" />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
};

export default App;
