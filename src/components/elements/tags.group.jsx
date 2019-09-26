// https://bulma.io/documentation/elements/tag/
import React from 'react';
import PropTypes from 'prop-types';
// import { ColorProps, SizeProps } from '../props';
import BulmaHOC from '../bulma.hoc';

// TODO: You can change the size of all tags at once:
// Tags containers

const TagsGroup = (props) => {
	let items = Array.isArray(props.children) ? props.children : [ props.children ];
	return (
		<div className={`field is-grouped ${props.multiline && 'is-grouped-multiline'}`}>
			{items.map((tags, i) => (
				<div key={i} className="control">
					{tags}
				</div>
			))}
		</div>
	);
};

TagsGroup.propTypes = {
	// ...ColorProps,
	// ...SizeProps,
	// label: PropTypes.string.required,
	multiline: PropTypes.bool
	// ${ props.addons && 'has-addons' }
};

export default BulmaHOC(TagsGroup);
