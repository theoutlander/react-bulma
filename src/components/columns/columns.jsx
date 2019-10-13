import 'bulma';
import React from 'react';
// import { mapClasses } from '../util';//
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc';

const Columns = (props) => {
	let classes = props.CSSClasses; //mapClasses(props);

	if (props.gap >= 0) {
		classes = `is-variable ${props.classes}`;
	}
	return <div className={`columns ${classes}`}>{props.children}</div>;
};

Columns.propTypes = {
	gap           : PropTypes.number,
	desktopGap    : PropTypes.number,
	mobileGap     : PropTypes.number,
	tabletGap     : PropTypes.number,
	touchGap      : PropTypes.number,
	widescreenGap : PropTypes.number,
	fullhdGap     : PropTypes.number,

	multiline     : PropTypes.bool,
	vCentered     : PropTypes.bool,
	centered      : PropTypes.bool
};

export default BulmaHOC(Columns);
