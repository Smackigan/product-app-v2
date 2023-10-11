function ProductCard({ product, isSelected, onCheckboxChange }) {
	return (
		<div className="col-md-3 p-4 mb-4">
			<div className="border border-2">
				<div className="card-body p-4 pb-5">
					<div className="form-check-inline">
						<label className="form-check-inline">
							<input
								className="delete-checkbox form-check-input"
								checked={isSelected}
								onChange={() => onCheckboxChange(product.id)}
								type="checkbox"
								name={product.id}
							/>
						</label>
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
