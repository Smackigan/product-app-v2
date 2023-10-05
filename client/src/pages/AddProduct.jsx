import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import { validateInput } from '../validators/Validation';

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
		productType: '',
		size: '',
		weight: '',
		height: '',
		width: '',
		length: '',
	});

	const [productType, setProductType] = useState('');

	// Validation
	function handleInputChange(event) {
		const { name, value } = event.target;

		// Call the validateInput
		const { errors: newErrors } = validateInput(name, value, errors);

		setErrors(newErrors);
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
						<div className="sku-error-message ms-2 my-auto text-danger">
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
						<div className="name-error-message ms-2 my-auto text-danger">
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
						<div className="price-error-message ms-2 my-auto text-danger">
							{errors.price}
						</div>
					</div>

					<div className="mb-3 d-flex">
						<label
							className="form-label col-2 my-auto"
							htmlFor="productType">
							Type Switcher
						</label>
						<select
							className="form-control w-25"
							id="productType"
							name="productType"
							value={productData.productType}
							onChange={handleInputChange}>
							<option value="">Choose product type</option>
							<option value="DVD">DVD</option>
							<option value="book">Book</option>
							<option value="furniture">Furniture</option>
						</select>
					</div>

					{productData.productType === 'DVD' && (
						<div className="row option my-auto">
							<p>Please, provide size of DVD in MB</p>
							<div className="d-flex">
								<label className="form-label col-2 my-auto">
									Size (MB)
								</label>
								<input
									className="form-control w-25"
									type="number"
									id="size"
									name="size"
									value={productData.size}
									onChange={handleInputChange}
								/>
								<div className="size-error-message ms-2 my-auto text-danger">
									{errors.size}
								</div>
							</div>
						</div>
					)}

					{productData.productType === 'book' && (
						<div className="row option my-auto">
							<p>Please, provide weigth of the book</p>
							<div className="d-flex">
								<label className="form-label col-2 my-auto">
									Weight (KG)
								</label>
								<input
									className="form-control w-25"
									type="number"
									id="weight"
									name="weight"
									value={productData.weight}
									onChange={handleInputChange}
								/>
								<div className="size-error-message ms-2 my-auto text-danger">
									{errors.weight}
								</div>
							</div>
						</div>
					)}

					{productData.productType === 'furniture' && (
						<div className="row option my-auto">
							<p>Please provide dimensions in HxWxL format:</p>
							<div className="mb-3 d-flex row">
								<label className="form-label col-2 my-auto">
									Height (CM)
								</label>
								<input
									className="form-control w-25"
									type="number"
									id="height"
									name="height"
									value={productData.height}
									onChange={handleInputChange}
								/>
								<div className="ms-2 my-auto text-danger">
									{errors.height}
								</div>
							</div>

							<div className="mb-3 d-flex row">
								<label className="form-label col-2 my-auto">
									Width (CM)
								</label>
								<input
									className="form-control w-25"
									type="number"
									id="width"
									name="width"
									value={productData.width}
									onChange={handleInputChange}
								/>
								<div className="ms-2 my-auto text-danger">
									{errors.width}
								</div>
							</div>

							<div className="mb-3 d-flex row">
								<label className="form-label col-2 my-auto">
									Length (CM)
								</label>
								<input
									className="form-control w-25"
									type="number"
									id="length"
									name="length"
									value={productData.length}
									onChange={handleInputChange}
								/>
								<div className="ms-2 my-auto text-danger">
									{errors.length}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default AddProduct;
