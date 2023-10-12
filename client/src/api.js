import axios from 'axios';

// Load products
export async function loadProducts() {
	try {
		const response = await axios.get(
			'http://scandi-react/index.php?endpoint=/api/get-product'
		);

		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error(`Request failed ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
}

// Add products
export async function submitProductData(productData) {
	try {
		const response = await axios.post(
			'http://scandi-react/index.php?endpoint=/api/add-product',
			productData
		);

		return response.data;
	} catch (error) {
		console.error('Error while submitting data:', error);
		return { success: false, errors: {} };
	}
}

// Delete products
export async function deleteProducts(selectedProductId) {
	try {
		const response = await axios.post(
			'http://scandi-react/index.php?endpoint=/api/delete-products',
			{
				selectedIDs: selectedProductId,
			}
		);

		if (response.data.success) {
			// Deletion successful
			return true;
		}
		// Handle API error
		console.error('API error:', response.data.message);
		return false;
	} catch (error) {
		if (error.response) {
			console.error('API error:', error.response.data);
		} else {
			console.error('Error:', error.message);
		}
		return false;
	}
}
