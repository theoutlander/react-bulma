// https://bulma.io/documentation/components/modal/
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// A classic modal overlay, in which you can include any content you want
const Modal = (props) => {
	//${props.clipped && 'is-clipped'}

	const [ active, setActive ] = useState(props.active);

	return (
		<div class={`modal ${active && 'is-active'} `}>
			<div class="modal-background" />
			<div class="modal-content">{props.children}</div>
			<button
				class="modal-close is-large"
				aria-label="close"
				onClick={() => {
					setActive(false);
				}}
			/>
		</div>
	);
};

Modal.propTypes = {
	active: PropTypes.bool
};

export default Modal;
