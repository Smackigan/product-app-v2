function ProductCard({ product, size, weight }) {
	return (
		<div className="col-md-3 p-4 mb-4">
			<div className="border border-2">
				<div className="card-body p-4 pb-5">
					<div className="form-check-inline">
						<label className="form-check-inline">
							<input
								className="delete-checkbox form-check-input"
								// onClick={handleCheck}
								type="checkbox"
								name={product.id}
							/>
							{product.id}
						</label>
					</div>
					<div className="text-center lh-md">
						<p className="card-title">{product.sku}</p>
						<p className="card-title">{product.name}</p>
						<p className="card-title">{product.price}</p>
						<p className="card-title">{product.value}</p>
						<p className="card-title">{size && 'Size: ' + size}</p>
						<p className="card-title">
							{weight && 'Weight: ' + weight}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
