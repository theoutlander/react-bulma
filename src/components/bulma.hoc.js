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
	} else if (props.fullHeight) {
		return 'is-fullheight';
	} else if (props.fullHeightWithNavbar) {
		return 'is-fullheight-with-navbar';
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
				styleClass={mapStyle(props)}
				stateClass={mapState(props)}
				typeClass={mapType(props)}
				contextualClass={mapContext(props)}
				helperClass={mapHelpers(props)}
				textColorClass={mapTextColors(props)}
				backgroundColorClass={mapBackgroundColors(props)}
        textAlignmentClass={mapTextAlignment(props)}
				widthClass={mapWidth(props)}
			/>
		);
	};
};
