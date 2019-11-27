// import 'bulma';
import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc';

const Columns = (props) => {
	let classes = props.CSSClasses;

	if (props.gap >= 0) {
		classes = `is-variable is-${props.gap} ${classes}`;
	}

	if (props.desktopGap >= 0) {
		classes = `is-${props.desktopGap}-desktop ${classes}`;
	}

	if (props.mobileGap >= 0) {
		classes = `is-${props.mobileGap}-mobile ${classes}`;
	}

	if (props.tabletGap >= 0) {
		classes = `is-${props.tabletGap}-tablet ${classes}`;
	}

	if (props.touchGap >= 0) {
		classes = `is-${props.touchGap}-touch ${classes}`;
	}

	if (props.widescreenGap >= 0) {
		classes = `is-${props.widescreenGap}-widescreen ${classes}`;
	}

	if (props.fullhdGap >= 0) {
		classes = `is-${props.fullhdGap}-fullhd ${classes}`;
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
