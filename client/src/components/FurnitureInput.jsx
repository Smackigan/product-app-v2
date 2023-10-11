import React from 'react';
import Input from './Input';

function FurnitureInput({
	productData,
	errors,
	handleInputChange,
	serverErrors,
}) {
	return (
		<div className="row option my-auto">
			<p>Please provide dimensions in HxWxL format:</p>
			<Input
				className="form-control w-25"
				type="text"
				id="height"
				name="height"
				value={productData.height}
				onChange={handleInputChange}
				placeholder="Height (CM)"
				errors={errors.height}
				serverErrors={serverErrors.height}
			/>
			<Input
				className="form-control w-25"
				type="text"
				id="width"
				name="width"
				value={productData.width}
				onChange={handleInputChange}
				placeholder="Width (CM)"
				errors={errors.width}
				serverErrors={serverErrors.width}
			/>
			<Input
				className="form-control w-25"
				type="text"
				id="length"
				name="length"
				value={productData.length}
				onChange={handleInputChange}
				placeholder="Length (CM)"
				errors={errors.length}
				serverErrors={serverErrors.length}
			/>
		</div>
	);
}

export default FurnitureInput;
