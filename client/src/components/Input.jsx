import React from 'react';

function Input({ type, id, name, value, onChange, errors, placeholder }) {
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
			/>
			{errors && <div className="ms-2 my-auto">{errors}</div>}
		</div>
	);
}

export default Input;
