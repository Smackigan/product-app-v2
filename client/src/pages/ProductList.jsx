import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

function ProductList({ product }) {
	const [products, setProducts] = useState([
		{
			name: 'Product 1',
			sku: 'SKU001',
			price: 10.99,
			size: 'Value 1',
		},
		{
			name: 'Product 2',
			sku: 'SKU002',
			price: 10.99,
			weight: 'Value 1',
		},
	]);
	const [selectProducts, setSelectProducts] = useState([]);

	function handleDeleteProducts() {}

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
					<ProductCard
						key={product.sku}
						product={product}
						size={product.size}
						weight={product.weight}
					/>
				))}
			</main>
		</>
	);
}

export default ProductList;
