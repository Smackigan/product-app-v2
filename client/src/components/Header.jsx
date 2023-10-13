import Button from './Button';

function Header({ title, primaryButton, secondaryButton }) {
	return (
		<header>
			<div className="d-flex justify-content-between my-5 px-4 border-bottom border-1 border-secondary">
				<h2 className="px-4 mb-4">{title}</h2>
				<div className="btns px-4 ">
					<Button
						label={primaryButton.label}
						onClick={primaryButton.onClick}
					/>

					<Button
						label={secondaryButton.label}
						onClick={secondaryButton.onClick}
					/>
				</div>
			</div>
		</header>
	);
}

export default Header;
