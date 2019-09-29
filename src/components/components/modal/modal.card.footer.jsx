// https://bulma.io/documentation/components/modal/
import React from 'react';
import PropTypes from 'prop-types';

// A classic modal overlay, in which you can include any content you want
const ModalFooter = (props) => {
	return <footer className="modal-card-foot">{props.children}</footer>;
};

ModalFooter.propTypes = {
	active: PropTypes.bool
};

export default ModalFooter;
