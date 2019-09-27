// https://bulma.io/documentation/components/dropdown/

import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../../bulma.hoc';
import { SizeProps } from '../../props';

// TODO: toggle active on-click
// An interactive dropdown menu for discoverable content
const DropDown = (props) => {
	let icon = props.icon || (props.up ? 'fa-angle-up' : 'fa-angle-down');
	return (
		<div
			className={`dropdown ${props.active && 'is-active'} ${props.hoverable && 'is-hoverable'} ${props.right &&
				'is-right'} ${props.up && 'is-up'}`}
		>
			<div className="dropdown-trigger">
				<button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
					<span>{props.title}</span>
					<span className={`icon ${props.sizeClass}`}>
						<i className={`fas ${icon}`} aria-hidden="true" />
					</span>
				</button>
			</div>
			<div className="dropdown-menu" id="dropdown-menu" role="menu">
				<div className="dropdown-content">{props.children}</div>
			</div>
		</div>
	);
};

DropDown.propTypes = {
	...SizeProps,
	title: PropTypes.string,
	icon: PropTypes.string,
	active: PropTypes.bool,
	hoverable: PropTypes.bool,
	right: PropTypes.bool
};

export default BulmaHOC(DropDown);
