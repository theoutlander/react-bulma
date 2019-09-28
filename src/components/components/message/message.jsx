import React from 'react';
// import PropTypes from 'prop-types';
import { ColorProps, SizeProps } from '../../props';

const Message = (props) => {
	return <article className={`message ${props.colorClass} ${props.sizeClass}`}>{props.children}</article>;
};

Message.propTypes = {
	...ColorProps,
	...SizeProps
};

export default Message;
