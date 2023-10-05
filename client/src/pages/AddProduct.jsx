import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

function AddProduct() {
	const [productData, setProductData] = useState({
		sku: '',
		name: '',
		price: '',
		productType: '',
		size: '',
		weight: '',
		height: '',
		width: '',
		length: '',
	});

	const [errors, setErrors] = useState({
		sku: '',
		name: '',
		price: '',
	});

	// Validation
	function handleInputChange(event) {
		const { name, value } = event.target;

		// Validation for SKU
		if (name === 'sku') {
			if (value.trim() === '') {
				setErrors({ ...errors, [name]: 'Please provide the SKU' });
			} else {
				setErrors({ ...errors, [name]: '' });
			}
		}

		// Validation for name
		if (name === 'name') {
			if (value.trim() === '') {
				setErrors({ ...errors, [name]: 'Please provide the name' });
			} else {
				setErrors({ ...errors, [name]: '' });
			}
		}

		// Validation for price
		if (name === 'price') {
			if (value.trim() === '') {
				setErrors({ ...errors, [name]: 'Please provide the name' });
			} else {
				setErrors({ ...errors, [name]: '' });
			}
		}

		setProductData({ ...productData, [name]: value });
	}

	function handleSubmit(event) {
		event.preventDefault();

		// Check if there are any errors
		if (Object.keys(errors).length === 0) {
			// If no errors, proceed with form submission

			console.log('Form submitted successfully');
		} else {
			// If there are errors, display a message
			console.error('Form submission failed due to errors');
		}
	}

	return (
		<>
			<div className="app">
				<form onSubmit={handleSubmit} />
				<header>
					<div className="d-flex justify-content-between my-5 px-4 border-bottom border-1 border-secondary">
						<h2 className="px-4 mb-4">Product Add</h2>
						<div className="btns px-4">
							<Link to="/add-product" className="btn btn-primary">
								Save
							</Link>
							<button
								className="btn btn-danger"
								id="delete-product-btn">
								Cancel
							</button>
						</div>
					</div>
				</header>

				<div className="ms-5">
					<div className="mb-3 d-flex">
						<label
							className="form-label col-2 my-auto"
							htmlFor="sku">
							SKU
						</label>
						<input
							className="form-control w-25"
							type="text"
							id="sku"
							name="sku"
							value={productData.sku}
							onChange={handleInputChange}
						/>
						<div
							id="sku-error"
							className="sku-error-message ms-2 my-auto text-danger">
							{errors.sku}
						</div>
					</div>

					<div className="mb-3 d-flex">
						<label
							className="form-label col-2 my-auto"
							htmlFor="name">
							Name
						</label>
						<input
							className="form-control w-25"
							type="text"
							id="name"
							name="name"
							value={productData.name}
							onChange={handleInputChange}
						/>
						<div
							id="name-error"
							className="name-error-message ms-2 my-auto text-danger">
							{errors.name}
						</div>
					</div>

					<div className="mb-3 d-flex">
						<label
							className="form-label col-2 my-auto"
							htmlFor="price">
							Price
						</label>
						<input
							className="form-control w-25"
							type="number"
							id="price"
							name="price"
							value={productData.price}
							onChange={handleInputChange}
						/>
						<div
							id="price-error"
							className="price-error-message ms-2 my-auto text-danger">
							{errors.price}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddProduct;
