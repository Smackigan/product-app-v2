import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import axios from 'axios';

function ProductList({ product }) {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);

	const [selectProducts, setSelectProducts] = useState([]);

	function handleDeleteProducts() {}

	// Load products from DB

	// const apiBaseUrl = 'http://localhost:8080';

	const loadProducts = async () => {
		try {
			const response = await fetch(`${API_BASE_URL}/get-product`);
			if (!response.ok) {
				throw new Error(
					`Request failed with status ${response.status}`
				);
			}
			const data = await response.json();
			setProducts(data);
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	useEffect(() => {
		loadProducts();
	}, []);

	return (
		<>
			<header>
				<div className="d-flex justify-content-between my-5 px-4 border-bottom border-1 border-secondary">
					<h2 className="px-4 mb-4">Product List</h2>
					<div className="btns px-4">
						<Link to="/add-product" className="btn btn-primary">
							ADD
						</Link>
						<button
							onClick={handleDeleteProducts}
							className="btn btn-danger"
							id="delete-product-btn">
							MASS DELETE
						</button>
					</div>
				</div>
			</header>
			<main className="row px-5">
				{products.map((product) => (
					<ProductCard key={product.sku} product={product} />
				))}
			</main>
		</>
	);
}

export default ProductList;
