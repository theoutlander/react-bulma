import PropTypes from 'prop-types';

const ColorProps = {
	primary: PropTypes.bool,
	info: PropTypes.bool,
	danger: PropTypes.bool,
	warning: PropTypes.bool,
	success: PropTypes.bool,
  link: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  
};

const SizeProps = {
	small: PropTypes.bool,
	medium: PropTypes.bool,
	normal: PropTypes.bool,
	large: PropTypes.bool,
	size: PropTypes.number,
	fullheight: PropTypes.bool
};

const ModifierProps = {
	rounded: PropTypes.bool,
	delete: PropTypes.bool
};

const AlignmentProps = {
	centered: PropTypes.bool,
	right: PropTypes.bool
};

const SeparatorProps = {
	dotSeparator: PropTypes.bool,
	arrowSeparator: PropTypes.bool,
	bulletSeparator: PropTypes.bool,
	succeedsdotSeparator: PropTypes.bool
};

const StyleProps = {
	boxed: PropTypes.bool,
	toggle: PropTypes.bool,
	toggleRounded: PropTypes.bool,
	fullWidth: PropTypes.bool
};

const StateProps = {
	hovered: PropTypes.bool,
	focused: PropTypes.bool,
	loading: PropTypes.bool
};

export { ColorProps, SizeProps, ModifierProps, AlignmentProps, SeparatorProps, StyleProps, StateProps };
