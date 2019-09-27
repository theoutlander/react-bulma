import React from 'react';
// import PropTypes from 'prop-types';
import { colorProps, sizeProps } from '../../props';

const Message = (props) => {
	return <article className={`message ${props.colorClass} ${props.sizeClass}`}>{props.children}</article>;
};

Message.propTypes = {
	...colorProps,
	...sizeProps
};

export default Message;
