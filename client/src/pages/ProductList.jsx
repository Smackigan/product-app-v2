import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductList({ product }) {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);

	const [selectedProductId, setSelectedProductId] = useState([]);

	// Load products from DB

	const loadProducts = async () => {
		try {
			const response = await fetch(
				'http://scandi-react/index.php?endpoint=/api/get-product'
			);
			if (!response.ok) {
				throw new Error(
					`Request failed with status ${response.status}`
				);
			}
			const data = await response.json();
			console.log(data);
			setProducts(data);
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	useEffect(() => {
		loadProducts();
	}, []);

	console.log('Selected Product IDs:', selectedProductId);

	const handleCheckboxChange = (productId) => {
		setSelectedProductId((prevSelectedIds) => {
			if (prevSelectedIds.includes(productId)) {
				return prevSelectedIds.filter((id) => id !== productId);
			} else {
				return [...prevSelectedIds, productId];
			}
		});
	};

	const deleteProducts = () => {
		axios
			.post(
				'http://scandi-react/index.php?endpoint=/api/delete-products',
				{ selectedIDs: selectedProductId }
			)
			.then((response) => {
				if (response.data.success) {
					// Deletion successful
					loadProducts();
					console.log('Selected products deleted successfully.');
				} else {
					// Handle API error
					console.error('API error:', response.data.message);
				}
			})
			.catch((error) => {
				if (error.response) {
					console.error('API error:', error.response.data);
				} else {
					console.error('Error:', error.message);
				}
			});
	};

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
							onClick={deleteProducts}
							className="btn btn-danger"
							id="delete-product-btn">
							MASS DELETE
						</button>
					</div>
				</div>
			</header>
			<main className="row px-5">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						isSelected={selectedProductId.includes(product.id)}
						onCheckboxChange={handleCheckboxChange}
					/>
				))}
			</main>
		</>
	);
}

export default ProductList;
