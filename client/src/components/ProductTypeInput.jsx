import React from 'react';
import Input from './Input';

function ProductTypeInput({
	productData,
	errors,
	handleInputChange,
	serverErrors,
	productType,
	productTypeMeta,
}) {
	const { label, inputs } = productTypeMeta[productType];

	return (
		<div className="row option my-auto">
			<p>{label}</p>
			{inputs.map((input) => (
				<Input
					key={input.id}
					className={input.className}
					type={input.type}
					id={input.id}
					name={input.name}
					value={productData[input.name]}
					onChange={handleInputChange}
					placeholder={input.placeholder}
					errors={errors[input.name]}
					serverErrors={serverErrors[input.name]}
				/>
			))}
		</div>
	);
}

export default ProductTypeInput;
