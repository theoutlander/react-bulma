import React from 'react';
import PropTypes from 'prop-types';

const classMap = {
	medium               : 'is-medium',
	large                : 'is-large',
	fullHeight           : 'is-fullheight',
	fullHeightWithNavbar : 'is-fullheight',
	fluid                : 'is-fluid',
	widescreen           : 'is-widescreen',
	backgroundPrimary    : 'has-background-primary',
	backgroundDanger     : 'has-background-danger',
	bold                 : 'is-bold',
	primary              : 'is-primary',
	danger               : 'is-danger',
	colorPrimary         : 'is-primary',
	colorDanger          : 'is-danger',
	primary              : 'is-primary',
	info                 : 'is-primary',
	danger               : 'is-danger',
	success              : 'is-success',
	link                 : 'is-link',
	warning              : 'is-warning',
	light                : 'is-light',
	dark                 : 'is-dark',
	white                : 'is-white',
	black                : 'is-black',
	small                : 'is-small',
	medium               : 'is-medium',
	normal               : 'is-normal',
	large                : 'is-large',
	fullWidth            : 'is-fullwidth',
	outlined             : 'is-outlined',
	hovered              : 'is-hovered',
	active               : 'is-active',
	static               : 'is-static',
	focused              : 'is-focused',
	loading              : 'is-loading',
	rounded              : 'is-rounded',
	inverted             : 'is-inverted',
	selected             : 'is-selected',
	button               : 'button',
	centered             : 'is-centered',
	right                : 'is-right',
	textCentered         : 'has-text-centered',
	textRight            : 'has-text-right',
	textLeft             : 'has-text-left',
	textJustified        : 'has-text-justified',
	arrowSeparator       : 'has-arrow-separator',
	bulletSeparator      : 'has-bullet-separator',
	dotSeparator         : 'has-dot-separator',
	succeedsSeparator    : 'has-succeeds-separator',
	boxed                : 'is-boxed',
	toggle               : 'is-toggle',
	toggleRounded        : 'is-toggle-rounded',
	boxed                : 'is-boxed',
	text                 : 'text',
	tel                  : 'tel',
	email                : 'email',
	password             : 'password',
	ancestor             : 'is-ancestor',
	parent               : 'is-parent',
	child                : 'is-child',
	clearfix             : 'is-clearfix',
	pulledLeft           : 'is-pulledLeft',
	pulledRight          : 'is-pulledRight',
	marginless           : 'is-marginless',
	paddingless          : 'is-paddingless',
	overlay              : 'is-overlay',
	clipped              : 'is-clipped',
	radiusless           : 'is-radiusless',
	shadowless           : 'is-shadowless',
	unselectable         : 'is-unselectable',
	invisible            : 'is-invisible',
	hidden               : 'is-hidden',
	screenreader         : 'is-sr-only',
	relative             : 'is-relative',
	textPrimary          : 'has-text-primary',
	textInfo             : 'has-text-info',
	textDanger           : 'has-text-danger',
	textWarning          : 'has-text-warning',
	textSuccess          : 'has-text-link',
	textBlack            : 'has-text-black',
	textDark             : 'has-text-dark',
	textLight            : 'has-text-light',
	textWhite            : 'has-text-white',
	backgroundPrimary    : 'has-background-primary',
	backgroundInfo       : 'has-background-info',
	backgroundDanger     : 'has-background-danger',
	backgroundWarning    : 'has-background-warning',
	backgroundLink       : 'has-background-link',
	backgroundSuccess    : 'has-background-success',
	backgroundBlack      : 'has-background-black',
	backgroundDark       : 'has-background-dark',
	backgroundLight      : 'has-background-light',
	backgroundWhite      : 'has-background-white',
	oneThird             : 'is-one-third',
	twoThirds            : 'is-two-thirds',
	half                 : 'is-half',
	full                 : 'is-full',
	oneQuarter           : 'is-one-quarter',
	threeQuarters        : 'is-three-quarters',
	oneFifth             : 'is-one-fifth',
	twoFifths            : 'is-two-fifths',
	threeFifths          : 'is-three-fifths',
	fourFifths           : 'is-four-fifths'
};

function mapClasses(props) {
	let val = Object.keys(props).map((p) => classMap[props[p]]).filter((m) => m).join(' ');
	return val;
}

function mapCSSClasses(props, Classes) {
	let val = Object.keys(Classes).filter((c) => Classes[c] === PropTypes.bool && props[c]).map((c) => classMap[c]);

	let val2 = Object.keys(Classes)
		.filter((c) => Classes[c] === PropTypes.string && classMap[props[c]])
		.map((c) => classMap[props[c]]);

	return [
		...val,
		...val2
	].join(' ');
}

function mapSize(props) {
	if (props.size >= 0) {
		return `is-${props.size}`;
	} else if (props.small) {
		return 'is-small';
	} else if (props.medium) {
		return 'is-medium';
	} else if (props.normal) {
		return 'is-normal';
	} else if (props.large) {
		return 'is-large';
	} else if (props.fullHeight) {
		return 'is-fullheight';
	} else if (props.fullHeightWithNavbar) {
		return 'is-fullheight-with-navbar';
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

function mapTextColors(props) {
	if (props.textPrimary) {
		return 'has-text-primary';
	} else if (props.textInfo) {
		return 'has-text-info';
	} else if (props.textDanger) {
		return 'has-text-danger';
	} else if (props.textWarning) {
		return 'has-text-warning';
	} else if (props.textLink) {
		return 'has-text-link';
	} else if (props.textSuccess) {
		return 'has-text-success';
	} else if (props.textBlack) {
		return 'has-text-black';
	} else if (props.textDark) {
		return 'has-text-dark';
	} else if (props.textLight) {
		return 'has-text-light';
	} else if (props.textWhite) {
		return 'has-text-white';
	}

	return '';
}

function mapBackgroundColors(props) {
	if (props.backgroundPrimary) {
		return 'has-background-primary';
	} else if (props.backgroundInfo) {
		return 'has-background-info';
	} else if (props.backgroundDanger) {
		return 'has-background-danger';
	} else if (props.backgroundWarning) {
		return 'has-background-warning';
	} else if (props.backgroundLink) {
		return 'has-background-link';
	} else if (props.backgroundSuccess) {
		return 'has-background-success';
	} else if (props.backgroundBlack) {
		return 'has-background-black';
	} else if (props.backgroundDark) {
		return 'has-background-dark';
	} else if (props.backgroundLight) {
		return 'has-background-light';
	} else if (props.backgroundWhite) {
		return 'has-background-white';
	}

	return '';
}

function mapModifiers(props) {
	let classes = [];
	if (props.rounded) {
		classes.push(
			mapClasses([
				'rounded'
			])
		);
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

function mapTextAlignment(props) {
	if (props.centered) {
		return 'has-text-centered';
	} else if (props.right) {
		return 'has-text-right';
	} else if (props.left) {
		return 'has-text-left';
	} else if (props.justified) {
		return 'has-text-justified';
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

function mapStyle(props) {
	let classes = [];
	if (props.boxed) {
		classes.push('is-boxed');
	}

	if (props.toggle) {
		classes.push('is-toggle');
	}

	if (props.toggleRounded) {
		classes.push('is-toggle-rounded');
	}

	if (props.fullWidth) {
		classes.push('is-full-width');
	}

	return classes.join(' ');
}

function mapState(props) {
	let classes = [];

	if (props.hovered) {
		classes.push('is-hovered');
	}

	if (props.focused) {
		classes.push('is-focused');
	}

	if (props.loading) {
		classes.push('is-loading');
	}

	return classes.join(' ');
}

function mapType(props) {
	let classes = [];

	if (props.text) {
		classes.push('text');
	}

	if (props.tel) {
		classes.push('tel');
	}

	if (props.email) {
		classes.push('email');
	}

	if (props.password) {
		classes.push('password');
	}

	return classes.join(' ');
}

function mapContext(props) {
	if (props.ancestor) {
		return 'is-ancestor';
	} else if (props.parent) {
		return 'is-parent';
	} else if (props.child) {
		return 'is-child';
	}

	return '';
}

function mapHelpers(props) {
	let classes = [];
	if (props.clearfix) {
		classes.push('is-clearfix');
	} else if (props.pulledLeft) {
		classes.push('is-pulledLeft');
	} else if (props.pulledRight) {
		classes.push('is-pulledRight');
	} else if (props.marginless) {
		classes.push('is-marginless');
	} else if (props.paddingless) {
		classes.push('is-paddingless');
	} else if (props.overlay) {
		classes.push('is-overlay');
	} else if (props.clipped) {
		classes.push('is-clipped');
	} else if (props.radiusless) {
		classes.push('is-radiusless');
	} else if (props.shadowless) {
		classes.push('is-shadowless');
	} else if (props.unselectable) {
		classes.push('is-unselectable');
	} else if (props.invisible) {
		classes.push('is-invisible');
	} else if (props.hidden) {
		classes.push('is-hidden');
	} else if (props.screenreader) {
		classes.push('is-sr-only');
	} else if (props.relative) {
		classes.push('is-relative');
	}

	return classes.join(' ');
}

function mapWidth(props) {
	if (props.oneThird) {
		return 'is-one-third';
	} else if (props.twoThirds) {
		return 'is-two-thirds';
	} else if (props.half) {
		return 'is-half';
	} else if (props.full) {
		return 'is-full';
	} else if (props.oneQuarter) {
		return 'is-one-quarter';
	} else if (props.threeQuarters) {
		return 'is-three-quarters';
	} else if (props.oneFifth) {
		return 'is-one-fifth';
	} else if (props.twoFifths) {
		return 'is-two-fifths';
	} else if (props.threeFifths) {
		return 'is-three-fifths';
	} else if (props.fourFifths) {
		return 'is-four-fifths';
	}

	return '';
}

function mapOffset(props) {
	if (props.offsetFourFifths) {
		return 'is-offset-four-fifths';
	} else if (props.offsetThreeFifths) {
		return 'is-offset-three-fifths';
	} else if (props.offsetTwoFifths) {
		return 'is-offset-two-fifths';
	} else if (props.offsetOneFifth) {
		return 'is-offset-one-fifth';
	} else if (props.offsetThreeQuarters) {
		return 'is-offset-three-quarters';
	} else if (props.offsetOneQuarter) {
		return 'is-offset-one-quarter';
	} else if (props.offsetTwoThirds) {
		return 'is-offset-two-thirds';
	} else if (props.offsetOneThird) {
		return 'is-offset-one-third';
	} else if (props.offsetFull) {
		return 'is-offset-full';
	} else if (props.offsetHalf) {
		return 'is-offset-half';
	}

	return '';
}

export default (Component, ClassesProps) => {
	return (props) => {
		let Classes;
		console.log(Component.propTypes);

		if (Component.propTypes) {
			Classes = mapCSSClasses(props, Component.propTypes);
			console.log(Classes);
		}

		if (Component.propTypes.dimension) {
			Classes = `${Classes} ${mapDimension(props)}`;
		}

		if (Component.propTypes.size) {
			Classes = `${Classes} ${mapSize(props)}`;
		}

		return (
			<Component
				{...props}
				sizeClass={mapSize(props)}
				dimensionClass={mapDimension(props)}
				colorClass={mapColors(props)}
				modifierClass={mapModifiers(props)}
				alignmentClass={mapAlignment(props)}
				separatorClass={mapSeparators(props)}
				styleClass={mapStyle(props)}
				stateClass={mapState(props)}
				typeClass={mapType(props)}
				contextualClass={mapContext(props)}
				helperClass={mapHelpers(props)}
				textColorClass={mapTextColors(props)}
				backgroundColorClass={mapBackgroundColors(props)}
				textAlignmentClass={mapTextAlignment(props)}
				widthClass={mapWidth(props)}
				offsetClass={mapOffset(props)}
				// classes={mapClasses(props)}
				CSSClasses={Classes}
			/>
		);
	};
};
