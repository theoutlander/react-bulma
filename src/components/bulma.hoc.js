import React from 'react';
//is-128x128

function mapSize(props) {
	if (props.small) {
		return 'is-small';
	} else if (props.medium) {
		return 'is-medium';
	} else if (props.normal) {
		return 'is-normal';
	} else if (props.large) {
		return 'is-large';
	} else if (props.size >= 0) {
		return `is-${props.size}`;
	}

	return '';
}

function mapDimension(props) {
	switch (props.dimension) {
		case 16:
			return 'is-16x16';
		case 24:
			return 'is-24x24';
		case 32:
			return 'is-32x32';
		case 64:
			return 'is-64x64';
		case 128:
			return 'is-128x128';
		default:
			return '';
	}
}

function mapColors(props) {
	if (props.primary) {
		return 'is-primary';
	} else if (props.info) {
		return 'is-info';
	} else if (props.danger) {
		return 'is-danger';
	} else if (props.warning) {
		return 'is-warning';
	} else if (props.link) {
		return 'is-link';
	} else if (props.success) {
		return 'is-success';
	} else if (props.black) {
		return 'is-black';
	} else if (props.dark) {
		return 'is-dark';
	} else if (props.light) {
		return 'is-light';
	} else if (props.white) {
		return 'is-white';
	}

	return '';
}

function mapModifiers(props) {
	let classes = [];
	if (props.rounded) {
		classes.push('is-rounded');
	}

	// TODO: ???
	// if (props.delete) {
	// 	classes.push('is-delete');
	// }

	return classes.join(' ');
}

function mapAlignment(props) {
	if (props.centered) {
		return 'is-centered';
	} else if (props.right) {
		return 'is-right';
	}

	return '';
}

function mapSeparators(props) {
	if (props.arrowSeparator) {
		return 'has-arrow-separator';
	} else if (props.bulletSeparator) {
		return 'has-bullet-separator';
	} else if (props.dotSeparator) {
		return 'has-dot-separator';
	} else if (props.succeedsSeparator) {
		return 'has-succeeds-separator';
	}

	return '';
}

export default (Component) => {
	return (props) => {
		return (
			<Component
				{...props}
				sizeClass={mapSize(props)}
				dimensionClass={mapDimension(props)}
				colorClass={mapColors(props)}
				modifierClass={mapModifiers(props)}
				alignmentClass={mapAlignment(props)}
				separatorClass={mapSeparators(props)}
			/>
		);
	};
};
