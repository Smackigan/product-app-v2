import React from 'react';

function Button({ onClick, label, className }) {
	return (
		<button onClick={onClick} className={`btn ${className}`}>
			{label}
		</button>
	);
}

export default Button;
