import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Header() {
	return (
		<div className="d-flex justify-content-between my-5 px-4 border-bottom border-1 border-secondary">
			<h2 className="px-4 mb-4">Product List</h2>
			<div className="btns px-4">
				<Link to="/add-product" className="btn btn-primary">
					ADD
				</Link>
				<button
					type="submit"
					className="btn btn-danger"
					id="delete-product-btn">
					MASS DELETE
				</button>
			</div>
		</div>
	);
}

export default Header;
