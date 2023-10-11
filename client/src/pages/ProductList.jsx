import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

import { loadProducts, deleteProducts } from '../api';

function ProductList({ product }) {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);

	const [selectedProductId, setSelectedProductId] = useState([]);

	// Load products
	useEffect(() => {
		loadProducts()
			.then((data) => {
				setProducts(data);
			})
			.catch((error) => {
				console.error('Error fetching products:', error);
			});
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

	// Delete products
	const deleteSelectedProducts = () => {
		deleteProducts(selectedProductId).then((success) => {
			if (success) {
				// Deleted successfull
				console.log('Selected products were deleted');
				loadProducts().then((data) => {
					setProducts(data);
				});
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
							onClick={deleteSelectedProducts}
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
