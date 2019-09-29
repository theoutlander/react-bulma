import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../../bulma.hoc';
import { SizeProps } from '../../props';

const TabItem = (props) => (
	<React.Fragment>
		{props.icon && (
			<span className={`icon ${props.sizeClass}`}>
				<i className={`fas ${props.icon}`} aria-hidden="true" />
			</span>
		)}
		<li className={props.active && 'is-active'}>
			<a>{props.children}</a>
		</li>
	</React.Fragment>
);

TabItem.propTypes = {
	active: PropTypes.bool,
	icon: PropTypes.string,
	...SizeProps
};

export default BulmaHOC(TabItem);
