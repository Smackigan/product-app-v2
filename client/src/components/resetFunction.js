import { productTypeMeta } from './productTypeMeta';

// Reset product type error messages
export const resetErrorsForProductType = (productType, currentErrors) => {
	const updatedErrors = { ...currentErrors };

	const fieldsToReset = productTypeMeta[productType]?.errorFields || [];

	fieldsToReset.forEach((field) => {
		updatedErrors[field] = '';
	});

	return updatedErrors;
};

// Reset product type state
export const resetProductDataForProductType = (
	productType,
	currentProductData
) => {
	const updatedProductData = { ...currentProductData };

	const fieldsToReset = productTypeMeta[productType]?.errorFields || [];

	fieldsToReset.forEach((field) => {
		updatedProductData[field] = '';
	});

	return updatedProductData;
};
