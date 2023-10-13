import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitProductData } from '../api';
import { validateInput } from '../validators/Validation';
import Input from '../components/Input';
import {
	resetErrorsForProductType,
	resetProductDataForProductType,
} from '../components/resetFunction';
import Header from '../components/Header';
import ProductTypeInput from '../components/ProductTypeInput';
import { productTypeMeta } from '../components/productTypeMeta';

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
	};

	const [errors, setErrors] = useState(initialErrors);
	const [serverErrors, setServerErrors] = useState({});

	const navigate = useNavigate();

	// Get data from inputs
	const handleInputChange = (e) => {
		const { name, value } = e.target;

		// Validate the input based on the field name
		const validation = validateInput(name, value);

		// Update the errors state with the validation result
		setErrors({ ...errors, [name]: validation });

		// Reset the product type state
		handleProductTypeChange(productData.productType);

		// Update the productData state with the new input value
		setProductData((prevProductData) => ({
			...prevProductData,
			[name]: value,
		}));
	};

	// Click save btn. Add products
	const onHandleSubmit = async (event) => {
		event.preventDefault();

		// Check for empty string
		const hasErrors = Object.values(errors).some((error) => error !== '');

		if (!hasErrors) {
			const response = await submitProductData(productData);
			console.log('Response from server:', response);

			if (response.success) {
				setServerErrors({});
				navigate('/');
			} else {
				setServerErrors(response.errors || {});
			}
		}
	};

	// Reset product type errors messages
	useEffect(() => {
		setErrors((prevErrors) =>
			resetErrorsForProductType(productData.productType, prevErrors)
		);
	}, [productData.productType]);

	// Reset the product data inputs state
	const handleProductTypeChange = (newProductType) => {
		setProductData((prevProductData) =>
			resetProductDataForProductType(newProductType, prevProductData)
		);
	};

	return (
		<div className="app">
			<Header
				title="Product Add"
				primary={{ label: 'Save', onClick: onHandleSubmit }}
				secondary={{ label: 'Cancel', link: '/' }}
			/>

			<form className="ms-5" onSubmit={onHandleSubmit}>
				<Input
					type="text"
					id="sku"
					name="sku"
					value={productData.sku}
					onChange={handleInputChange}
					errors={errors.sku}
					serverErrors={serverErrors.sku}
					placeholder="SKU"
					required
				/>

				<Input
					type="text"
					id="name"
					name="name"
					value={productData.name}
					onChange={handleInputChange}
					errors={errors.name}
					serverErrors={serverErrors.name}
					placeholder="Name"
					required
				/>

				<Input
					type="number"
					id="price"
					name="price"
					value={productData.price}
					onChange={handleInputChange}
					errors={errors.price}
					serverErrors={serverErrors.price}
					placeholder="Price"
					required
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
						onChange={handleInputChange}
						required>
						<option value="">Choose product type</option>
						<option value="DVD">DVD</option>
						<option value="book">Book</option>
						<option value="furniture">Furniture</option>
					</select>
				</div>

				{productData.productType === 'DVD' && (
					<ProductTypeInput
						productTypeMeta={productTypeMeta}
						productType="DVD"
						productData={productData}
						errors={errors}
						handleInputChange={handleInputChange}
						serverErrors={serverErrors}
					/>
				)}

				{productData.productType === 'book' && (
					<ProductTypeInput
						productTypeMeta={productTypeMeta}
						productType="book"
						productData={productData}
						errors={errors}
						handleInputChange={handleInputChange}
						serverErrors={serverErrors}
					/>
				)}

				{productData.productType === 'furniture' && (
					<ProductTypeInput
						productTypeMeta={productTypeMeta}
						productType="furniture"
						productData={productData}
						errors={errors}
						handleInputChange={handleInputChange}
						serverErrors={serverErrors}
					/>
				)}
			</form>
		</div>
	);
}

export default AddProduct;
