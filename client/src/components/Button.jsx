function Button({ label, onClick }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="btn btn-secondary mx-1">
			{label}
		</button>
	);
}

export default Button;
