import React from 'react';
import { Link } from 'react-router-dom';

function Header({ title, primary, secondary }) {
	return (
		<header>
			<div className="d-flex justify-content-between my-5 px-4 border-bottom border-1 border-secondary">
				<h2 className="px-4 mb-4">{title}</h2>
				<div className="btns px-4 d-flex">
					{primary && (
						<div>
							{primary.link && (
								<Link
									to={primary.link}
									className="btn btn-primary">
									{primary.label}
								</Link>
							)}
							{primary.onClick && (
								<button
									onClick={primary.onClick}
									className="btn btn-primary">
									{primary.label}
								</button>
							)}
						</div>
					)}
					{secondary && (
						<div>
							{secondary.link && (
								<Link
									to={secondary.link}
									className="btn btn-danger mx-1">
									{secondary.label}
								</Link>
							)}
							{secondary.onClick && (
								<button
									onClick={secondary.onClick}
									className="btn btn-danger mx-1">
									{secondary.label}
								</button>
							)}
						</div>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
