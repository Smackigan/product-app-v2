// Client side validation
export const validateInput = (name, value) => {
	const productPattern = () => /^[0-9A-Za-z\s.,/-]*$/;

	const patterns = {
		sku: /^[a-zA-Z0-9 ,._:-]/,
		name: /^[a-zA-Z0-9 ,./'-]+$/,
		price: /^\d+(\.\d{0,5})?$/,
		size: productPattern(),
		weight: productPattern(),
		height: productPattern(),
		length: productPattern(),
		width: productPattern(),
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
