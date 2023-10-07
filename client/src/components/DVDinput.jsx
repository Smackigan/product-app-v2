import React from 'react';
import Input from './Input';

function DVDinput({ productData, errors, handleInputChange }) {
	return (
		<div className="row option my-auto">
			<p>Please, provide size of DVD in MB</p>
			<Input
				className="form-control w-25"
				type="number"
				id="size"
				name="size"
				value={productData.size}
				onChange={handleInputChange}
				placeholder="Size"
				errors={errors}
			/>
		</div>
	);
}

export default DVDinput;
