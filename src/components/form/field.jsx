import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc';

const Field = (props) => {
	return <div class={`field ${props.addons && 'has-addons'}`}>{props.children}</div>;
};

Field.propTypes = {
	addons : PropTypes.bool
};

export default BulmaHOC(Field);
