import 'bulma';
import React from 'react';
import { mapClasses } from '../util';
import PropTypes from 'prop-types';

const Columns = (props) => {
	let classes = mapClasses(props);
	if (props.gap >= 0) {
		classes = `is-variable ${classes}`;
	}
	return <div className={`columns ${classes}`}>{props.children}</div>;
};

Columns.propTypes = {
	gap: PropTypes.number,
	multiline: PropTypes.bool,
	desktopGap: PropTypes.number,
	mobileGap: PropTypes.number,
	tabletGap: PropTypes.number,
	touchGap: PropTypes.number,
	widescreenGap: PropTypes.number,
	fullhdGap: PropTypes.number,
	vCentered: PropTypes.bool,
	centered: PropTypes.bool
};

export default Columns;
