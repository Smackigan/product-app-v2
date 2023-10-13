import React from 'react';

function Input({
	type,
	id,
	name,
	value,
	onChange,
	errors,
	placeholder,
	serverErrors,
}) {
	const displayErrors = errors || serverErrors;

	return (
		<div className="mb-3 d-flex">
			<label className="form-label col-2 my-auto">{placeholder}</label>
			<input
				className="form-control w-25"
				type={type}
				id={id}
				name={name}
				value={value}
				onChange={onChange}
				required
			/>

			{displayErrors && (
				<div className="ms-2 my-auto">{displayErrors}</div>
			)}
		</div>
	);
}

export default Input;
