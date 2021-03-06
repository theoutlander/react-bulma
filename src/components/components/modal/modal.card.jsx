// https://bulma.io/documentation/components/modal/
import React from 'react';
import PropTypes from 'prop-types';

// A classic modal overlay, in which you can include any content you want
const ModalCard = (props) => {
	//${props.clipped && 'is-clipped'}

	return (
		<div className={`modal ${props.active && 'is-active'}`}>
			<div className="modal-background" />
			<div className="modal-card">{props.children}</div>
		</div>
	);
};

ModalCard.propTypes = {
	active: PropTypes.bool
};

export default ModalCard;
