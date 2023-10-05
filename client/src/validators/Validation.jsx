export const validateInput = (name, value, errors) => {
	const validationMessages = {
		sku: 'Please provide the SKU',
		name: 'Please provide the name',
		price: 'Please provide the price',
		size: 'Please provide the size',
		weight: 'Please provide the weight',
		height: 'Please provide the height',
		width: 'Please provide the width',
		length: 'Please provide the length',
	};

	const errorMessage = value.trim() === '' ? validationMessages[name] : '';
	const updatedErrors = { ...errors, [name]: errorMessage };

	return { errors: updatedErrors };
};
