import React from 'react';
import PropTypes from 'prop-types';
import { ColorProps } from '../props';

const Notification = (props) => {
	return (
		<div className={`notification ${props.colorClass}`}>
			{props.delete && <button className="delete" />}
			{props.children}
		</div>
	);
};

Notification.propTypes = {
	delete: PropTypes.bool,
	...ColorProps
};

export default Notification;
