import React from 'react';
import PropTypes from 'prop-types';
import { mapClasses } from '../util';
import { TextAlignmentProps } from '../props';
import BulmaHOC from '../bulma.hoc';

const Column = (props) => {
	let classes = mapClasses(props);
	return <div className={`column ${classes} ${props.textAlignmentClass}`}>{props.children}</div>;
};

Column.propTypes = {
	...TextAlignmentProps,
	width: PropTypes.number,
	half: PropTypes.bool,
	full: PropTypes.bool,
	oneThird: PropTypes.bool,
	twoThirds: PropTypes.bool,
	oneQuarter: PropTypes.bool,
	threeQuarters: PropTypes.bool,
	oneFifth: PropTypes.bool,
	twoFifths: PropTypes.bool,
	threeFifths: PropTypes.bool,
	fourFifths: PropTypes.bool,
	offset: PropTypes.number,
	offsetHalf: PropTypes.bool,
	offsetFull: PropTypes.bool,
	offsetOneThird: PropTypes.bool,
	offsetTwoThirds: PropTypes.bool,
	offsetOneQuarter: PropTypes.bool,
	offsetThreeQuarters: PropTypes.bool,
	offsetOneFifth: PropTypes.bool,
	offsetTwoFifths: PropTypes.bool,
	offsetThreeFifths: PropTypes.bool,
	offsetFourFifths: PropTypes.bool,
	narrow: PropTypes.bool,
	narrowMobile: PropTypes.bool,
	narrowTouch: PropTypes.bool,
	narrowTablet: PropTypes.bool,
	narrowWidescreen: PropTypes.bool,
	narrowDesktop: PropTypes.bool,
	narrowFullhd: PropTypes.bool
};

export default BulmaHOC(Column);
