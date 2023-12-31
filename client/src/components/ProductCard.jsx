function ProductCard({ product, isSelected, onCheckboxChange }) {
	return (
		<div className="col-sm-3 mb-4 ">
			<div className="border border-2 ">
				<div className="card-body p-2 pb-5 pt-3">
					<div className="form-check-inline">
						<input
							className="delete-checkbox form-check-input"
							checked={isSelected}
							onChange={() => onCheckboxChange(product.id)}
							type="checkbox"
							name={product.id}
						/>
					</div>
					<div className="text-center lh-md">
						<p className="card-title">{product.sku}</p>
						<p className="card-title">{product.name}</p>
						<p className="card-title">{product.price}</p>
						<p className="card-title">{product.value}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
