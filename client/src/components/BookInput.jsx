import React from 'react';
import Input from './Input';

function BookInput({ productData, errors, handleInputChange, serverErrors }) {
	return (
		<div className="row option my-auto">
			<p>Please, provide weigth of the book</p>
			<Input
				className="form-control w-25"
				type="text"
				id="weight"
				name="weight"
				value={productData.weight}
				onChange={handleInputChange}
				placeholder="Weight (KG)"
				errors={errors}
				serverErrors={serverErrors}
			/>
		</div>
	);
}

export default BookInput;
