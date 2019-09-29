import React from 'react';
import { AlignmentProps, StyleProps } from '../../props';
import BulmaHOC from '../../bulma.hoc';
// import PropTypes from 'prop-types';

const Tabs = (props) => (
	<p className={`tabs ${props.alignmentClass} ${props.styleClass}`}>
		<ul>{props.children}</ul>
	</p>
);

Tabs.propTypes = {
	...AlignmentProps,
	...StyleProps
};
export default BulmaHOC(Tabs);
