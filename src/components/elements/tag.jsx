// https://bulma.io/documentation/elements/tag/
import React from 'react';
import PropTypes from 'prop-types';
import { ColorProps, SizeProps, ModifierProps } from '../props';
import BulmaHOC from '../bulma.hoc';

const Tag = (props) => {
	return (
		<React.Fragment>
			{/* <span className="tag is-success"> 
				Bar
				<button className="delete is-small" />
			</span> */}
			<span className={`tag ${props.colorClass} ${props.CSSClasses}`}>
				{props.children}
				{props.delete && <button className={`delete ${props.colorClass} ${props.sizeClass}`} />}
			</span>
		</React.Fragment>
	);
};

Tag.propTypes = {
	...ColorProps,
	...SizeProps,
	...ModifierProps,
	delete : PropTypes.bool
};

export default BulmaHOC(Tag);
