

import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import OrderPage from './pages/orderPage';
import ChefOrderPage from "./pages/chefOrderPage";
import {
	Route,
	Routes,
	BrowserRouter as Router,
	useRoutes,
} from "react-router-dom";

function App() {
  

  const Appi = () => {
		let routes = useRoutes([
			{ path: "/", element: <OrderPage /> },
			{ path: "order", element: <ChefOrderPage /> },
		]);
		return routes;
	};
  return (
		<section className="App">
      <Router>
        <Appi />
			</Router>
		</section>
	);
}

export default App;
