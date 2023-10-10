import React, { useEffect, useState } from 'react';
import { validateInput } from '../validators/Validation';
import Input from '../components/Input';
import DVDinput from '../components/DVDinput';
import BookInput from '../components/BookInput';
import FurnitureInput from '../components/FurnitureInput';
import Button from '../components/Button';
import { resetErrorsAndProductData } from '../components/ResetFunction';
import { useNavigate } from 'react-router-dom';

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
	};

	// - All fields are mandatory for submission, missing values should trigger notification “Please, submit required data”
	// - Implement input field value validation, invalid data must trigger notification “Please, provide the data of indicated type”

	const [errors, setErrors] = useState(initialErrors);
	const [submitted, setSubmitted] = useState(false);
	const [isSkuNotUnique, setIsSkuNotUnique] = useState(false);

	// Collect data from inputs
	// const handleInputChange = (e) => {
	// 	setSubmitted(true);
	// 	const { name, value } = e.target;

	// 	// Assuming you have a state variable for productType
	// 	const productType = productData.productType;

	// 	// Validate the input based on productType
	// 	const validation = validateInput(name, value, errors, productType);

	// 	// Update the errors state with the validation result
	// 	setErrors(validation.errors);

	// 	// Update the productData state with the new input value
	// 	setProductData({
	// 		...productData,
	// 		[name]: value,
	// 	});
	// };
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		// console.log(e.target);

		// Validate the input based on the field name
		const validation = validateInput(name, value);

		// Update the errors state with the validation result
		setErrors({ ...errors, [name]: validation });

		resetProductDataForProductType(productData.productType);

		// Update the productData state with the new input value
		setProductData((prevProductData) => ({
			...prevProductData,
			[name]: value,
		}));
	};

	// Save btn. Submit data to API
	const onHandleSubmit = async (event) => {
		event.preventDefault();

		// Check SKU uniqueness
		const isSkuUnique = await checkSkuUnique(productData.sku);

		if (!isSkuUnique) {
			return;
		}

		// Check for empty string
		const hasErrors = Object.values(errors).some((error) => error !== '');
		console.log(hasErrors);

		if (!hasErrors) {
			console.log('Submitting data:', productData);

			axios
				.post(
					'http://scandi-react/index.php?endpoint=/api/add-product',
					productData
				)
				.then((response) => {
					console.log('Response from server:', response.data);
				})
				.catch((error) => {
					console.error('Error while submitting data:', error);
				});
		}
	};

	// Check SKU uniqueness
	const checkSkuUnique = async (sku) => {
		try {
			const response = await axios.get(
				`http://scandi-react/index.php?action=check-sku&sku=${sku}`
			);
			const isUnique = response.data;

			if (!isUnique) {
				setIsSkuNotUnique(true); // SKU is not unique
			} else {
				setIsSkuNotUnique(false); // SKU is unique
			}

			return isUnique;
		} catch (error) {
			console.error('Error SKU unique:', error);
			setIsSkuNotUnique(false);
			return false;
		}
	};

	// Cancel and return to homepage
	const navigate = useNavigate();
	function onHandleCancel() {
		navigate('/');
	}

	useEffect(() => {
		console.log('Products data:', productData);
	}, [productData]);

	useEffect(() => {
		console.log('Errors array:', errors);
	}, [errors]);

	const resetErrorsForProductType = (productType) => {
		const updatedErrors = { ...errors };
		switch (productType) {
			case 'DVD':
				updatedErrors.weight = '';
				updatedErrors.height = '';
				updatedErrors.width = '';
				updatedErrors.length = '';
				break;
			case 'book':
				updatedErrors.size = '';
				updatedErrors.height = '';
				updatedErrors.width = '';
				updatedErrors.length = '';
				break;
			case 'furniture':
				updatedErrors.size = '';
				updatedErrors.weight = '';
				break;
			default:
				break;
		}
		setErrors(updatedErrors);
	};

	useEffect(() => {
		const resetErrors = () => {
			resetErrorsForProductType(productData.productType);
		};
		resetErrors();
	}, [productData.productType]);

	// Reset the product data inputs state
	const resetProductDataForProductType = (productType) => {
		setProductData((prevProductData) => {
			const updatedProductData = { ...prevProductData };

			switch (productType) {
				case 'DVD':
					updatedProductData.weight = '';
					updatedProductData.height = '';
					updatedProductData.width = '';
					updatedProductData.length = '';
					break;
				case 'book':
					updatedProductData.size = '';
					updatedProductData.height = '';
					updatedProductData.width = '';
					updatedProductData.length = '';
					break;
				case 'furniture':
					updatedProductData.size = '';
					updatedProductData.weight = '';
					break;
				default:
					break;
			}

			return updatedProductData;
		});
	};

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
						isSkuNotUnique={isSkuNotUnique}
						required
					/>

					<Input
						type="text"
						id="name"
						name="name"
						value={productData.name}
						onChange={handleInputChange}
						errors={errors.name}
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
