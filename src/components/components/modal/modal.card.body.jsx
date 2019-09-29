// https://bulma.io/documentation/components/modal/
import React from 'react';
import PropTypes from 'prop-types';

// A classic modal overlay, in which you can include any content you want
const Modal = (props) => {
	return <section className="modal-card-body">{props.children}</section>;
};

Modal.propTypes = {
	active: PropTypes.bool
};

export default Modal;
