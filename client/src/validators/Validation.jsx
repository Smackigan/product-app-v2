// const enableValidation = true;

// export const validateInput = (name, value, errors, submitted, productType) => {
// 	const requiredFields = {
// 		DVD: ['sku', 'name', 'price', 'size'],
// 		book: ['sku', 'name', 'price', 'weight'],
// 		furniture: ['sku', 'name', 'price', 'height', 'width', 'length'],
// 	};

// 	if (enableValidation && submitted) {
// 		const isRequired =
// 			requiredFields[productType] &&
// 			requiredFields[productType].includes(name);
// 		const errorMessage =
// 			isRequired && value.trim() === ''
// 				? `Please provide the ${name}`
// 				: '';
// 		const updatedErrors = { ...errors, [name]: errorMessage };

// 		return { errors: updatedErrors };
// 	}
// 	return { errors: {} };
// };

export const validateInput = (name, value) => {
	// const validationMessages = {
	// 	sku: 'Please provide a valid SKU',
	// 	name: 'Please provide a valid Name',
	// 	price: 'Please provide a valid Price',
	// };

	const patterns = {
		sku: /^[a-zA-Z0-9 ,._:-]/,
		name: /^[a-zA-Z0-9 ,./'-]+$/,
		price: /^\d+(\.\d{0,5})?$/,
		size: /^[0-9A-Za-z\s.,/-]*$/,
		weight: /^[0-9A-Za-z\s.,/-]*$/,
		height: /^[0-9A-Za-z\s.,/-]*$/,
		length: /^[0-9A-Za-z\s.,/-]*$/,
		width: /^[0-9A-Za-z\s.,/-]*$/,
	};

	if (name === 'productType') {
		return '';
	}

	// Check for emptiness
	if (!value.trim()) {
		return `Please, submit required data`;
	}

	// Check pattern
	if (!patterns[name].test(value)) {
		return 'Please, provide the data of indicated type';
	}

	// Return null for no errors
	return '';
};

// export const validateInput = (name, value, errors) => {
// 	const validationMessages = {
// 		sku: 'Please provide the SKU',
// 		name: 'Please provide the name',
// 		price: 'Please provide the price',
// 		size: 'Please provide the size',
// 		weight: 'Please provide the weight',
// 		height: 'Please provide the height',
// 		width: 'Please provide the width',
// 		length: 'Please provide the length',
// 	};

// 	const errorMessage = value.trim() === '' ? validationMessages[name] : '';
// 	const updatedErrors = { ...errors, [name]: errorMessage };

// 	return { errors: updatedErrors };
// };
