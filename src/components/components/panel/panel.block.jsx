import React from 'react';
import PropTypes from 'prop-types';

const PanelBlock = (props) => {
	return (
		<React.Fragment>
			{props.icon && (
				<span class="panel-icon">
					<i class={`fas ${props.icon}`} aria-hidden="true" />
				</span>
			)}
			<p className={`panel-block ${props.active && 'is-active'}`}>{props.children}</p>
		</React.Fragment>
	);
};

PanelBlock.propTypes = {
	active: PropTypes.bool,
	icon: PropTypes.string
};

export default PanelBlock;
