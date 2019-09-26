import PropTypes from 'prop-types';

const ColorProps = {
	primary: PropTypes.bool,
	info: PropTypes.bool,
	danger: PropTypes.bool,
	warning: PropTypes.bool,
	success: PropTypes.bool,
	link: PropTypes.bool
};

const SizeProps = {
	small: PropTypes.bool,
	medium: PropTypes.bool,
	normal: PropTypes.bool,
	large: PropTypes.bool
};

const ModifierProps = {
	rounded: PropTypes.bool,
	delete: PropTypes.bool
};

export { ColorProps, SizeProps, ModifierProps };
