const productTypeResetConfig = {
	DVD: ['weight', 'height', 'width', 'length'],
	book: ['size', 'height', 'width', 'length'],
	furniture: ['size', 'weight'],
};

// Reset product type error messages
export const resetErrorsForProductType = (productType, currentErrors) => {
	const updatedErrors = { ...currentErrors };

	const fieldsToReset = productTypeResetConfig[productType];

	if (fieldsToReset) {
		fieldsToReset.forEach((field) => {
			updatedErrors[field] = '';
		});
	}

	return updatedErrors;
};

// Reset product type state
export const resetProductDataForProductType = (
	productType,
	currentProductData
) => {
	const updatedProductData = { ...currentProductData };

	const fieldsToReset = productTypeResetConfig[productType];

	if (fieldsToReset) {
		fieldsToReset.forEach((field) => {
			updatedProductData[field] = '';
		});
	}

	return updatedProductData;
};
