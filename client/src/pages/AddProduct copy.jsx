import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import { validateInput } from '../validators/Validation';
import Input from '../components/Input';
import DVDinput from '../components/DVDinput';
import BookInput from '../components/BookInput';
import FurnitureInput from '../components/FurnitureInput';
import Button from '../components/Button';

import axios from 'axios';

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

	const initialErrors = {
		sku: '',
		name: '',
		price: '',
		size: '',
		weight: '',
		height: '',
		width: '',
		length: '',
		// Add more fields as needed
	};

	const [errors, setErrors] = useState(initialErrors);

	// Collect data from inputs
	function handleInputChange(event) {
		const { name, value } = event.target;

		// Call the validateInput
		const { errors: newErrors } = validateInput(name, value, errors);

		// Update the errors state
		setErrors(newErrors);
		setProductData({ ...productData, [name]: value });
	}

	// 	const handleInputChange = (event) => {
	// 	const { name, value } = event.target;
	// 	setProductData({
	// 		...productData,
	// 		[name]: value,
	// 	});
	// };

	// Submit data to API
	function onHandleSubmit(event) {
		event.preventDefault();

		// Check if there are any errors
		const errorKeys = Object.keys(errors);
		const hasErrors = errorKeys.some((key) => errors[key] !== '');

		if (!hasErrors) {
			// If no errors, proceed with form submission

			axios.post(
				'http://scandi-react/index.php?endpoint=/api/add-product',
				productData
			);
			// sendDataToAPI(productData);
			console.log('Form submitted successfully');
		} else {
			// If there are errors, display a message
			console.error('Form submission failed due to errors');
		}
	}

	function onHandleCancel() {}

	useEffect(() => {
		console.log('Updated products data:', productData);
	}, [productData]);

	useEffect(() => {
		console.log('Updated error data:', errors);
	}, [errors]);

	// Send
	// async function sendDataToAPI(data) {
	// 	try {
	// 		const response = await fetch(
	// 			'http://scandi-react/index.php?endpoint=/api/add-product',
	// 			{
	// 				method: 'POST',
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 				},
	// 				body: JSON.stringify(data),
	// 				credentials: 'include',
	// 			}
	// 		);

	// 		if (!response.ok) {
	// 			throw new Error(
	// 				`Request failed with status ${response.status}`
	// 			);
	// 		}

	// 		// Parse the response JSON if needed
	// 		const responseData = await response.json();

	// 		console.log('API Response:', responseData);
	// 	} catch (error) {
	// 		console.error('Error sending data to API:', error);
	// 	}

	// 	console.log('Data to send to API:', data);
	// }

	return (
		<>
			<div className="app">
				<header>
					<div className="d-flex justify-content-between my-5 px-4 border-bottom border-1 border-secondary">
						<h2 className="px-4 mb-4">Product Add</h2>
						<div className="btns px-4">
							<Button
								onClick={onHandleSubmit}
								label="Save"
								className="btn btn-primary"
							/>
							<Button
								onClick={onHandleCancel}
								label="Cancel"
								className="btn btn-danger"
							/>
						</div>
					</div>
				</header>

				<form className="ms-5" onSubmit={onHandleSubmit}>
					<Input
						type="text"
						id="sku"
						name="sku"
						value={productData.sku}
						onChange={handleInputChange}
						errors={errors.sku}
						placeholder="SKU"
					/>

					<Input
						type="text"
						id="name"
						name="name"
						value={productData.name}
						onChange={handleInputChange}
						errors={errors.name}
						placeholder="Name"
					/>

					<Input
						type="number"
						id="price"
						name="price"
						value={productData.price}
						onChange={handleInputChange}
						errors={errors.price}
						placeholder="Price"
					/>

					<div className="mb-3 d-flex">
						<label className="form-label col-2 my-auto">
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
						<DVDinput
							productData={productData}
							errors={errors.size}
							handleInputChange={handleInputChange}
						/>
					)}

					{productData.productType === 'book' && (
						<BookInput
							productData={productData}
							errors={errors.weight}
							handleInputChange={handleInputChange}
						/>
					)}

					{productData.productType === 'furniture' && (
						<FurnitureInput
							productData={productData}
							errors={errors}
							handleInputChange={handleInputChange}
						/>
					)}
				</form>
			</div>
		</>
	);
}

export default AddProduct;
