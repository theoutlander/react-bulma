import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = (props) => {
	return (
		<header className="card-header">
			<p className="card-header-title">{props.title}</p>
			{props.icon && (
				// eslint-disable-next-line
				<a href="#" className="card-header-icon" aria-label={props.ariaLabel}>
					<span className="icon">
						<i className={`fas ${props.icon}`} aria-hidden="true" />
					</span>
				</a>
			)}
		</header>
	);
};

CardHeader.propTypes = {
	ariaLabel: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.string
};

export default CardHeader;
