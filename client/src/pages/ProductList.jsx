import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import { loadProducts, deleteProducts } from '../api';

function ProductList() {
	const [products, setProducts] = useState([]);
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

	// Select checkboxes
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
				loadProducts().then((data) => {
					setProducts(data);
				});
			}
		});
	};

	return (
		<>
			<Header
				title="Product List"
				primary={{ label: 'ADD', link: '/add-product' }}
				secondary={{
					label: 'MASS DELETE',
					onClick: deleteSelectedProducts,
				}}
			/>

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
