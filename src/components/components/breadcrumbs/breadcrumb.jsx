import React from 'react';
// import PropTypes from 'prop-types';
// import { AlignmentProps } from '../props';
import BulmaHOC from '../../bulma.hoc';

const BreadCrumb = (props) => {
	return (
		// eslint-disable-next-line
		<li className={`${props.active && 'is-active'}`}>
			<a href="#">
				{props.icon && (
					<React.Fragment>
						<span className={`icon ${props.sizeClass}`}>
							<i className={`fas ${props.icon}`} aria-hidden="true" />
						</span>
						<span>{props.children}</span>
					</React.Fragment>
				)}
				{!props.icon && props.children}
			</a>
		</li>
	);
};

BreadCrumb.propTypes = {};

export default BulmaHOC(BreadCrumb);
