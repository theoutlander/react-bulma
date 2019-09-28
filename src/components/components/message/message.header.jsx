import React from 'react';
import PropTypes from 'prop-types';

const MessageHeader = (props) => {
	return (
		<div className="message-header">
			<p>{props.title}</p>
			<button className="delete" aria-label="delete" />
		</div>
	);
};

MessageHeader.propTypes = {
	title: PropTypes.string
};

export default MessageHeader;
