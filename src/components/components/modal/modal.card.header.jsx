// https://bulma.io/documentation/components/modal/
import React from 'react';
import PropTypes from 'prop-types';

// A classic modal overlay, in which you can include any content you want
const ModalHeader = (props) => {
	return (
		<header className="modal-card-head">
			<p className="modal-card-title">{props.children}</p>
			<button className="delete" aria-label="close" />
		</header>
	);
};

ModalHeader.propTypes = {
	active: PropTypes.bool
};

export default ModalHeader;
