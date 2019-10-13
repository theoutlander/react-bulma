import PropTypes from 'prop-types';

const ColorProps = {
	primary : PropTypes.bool,
	info    : PropTypes.bool,
	danger  : PropTypes.bool,
	warning : PropTypes.bool,
	success : PropTypes.bool,
	link    : PropTypes.bool,
	light   : PropTypes.bool,
	dark    : PropTypes.bool,
	white   : PropTypes.bool,
	black   : PropTypes.bool
};

const TextColorProps = {
	textPrimary : PropTypes.bool,
	textInfo    : PropTypes.bool,
	textDanger  : PropTypes.bool,
	textWarning : PropTypes.bool,
	textSuccess : PropTypes.bool,
	textLink    : PropTypes.bool,
	textLight   : PropTypes.bool,
	textDark    : PropTypes.bool,
	textWhite   : PropTypes.bool,
	textBlack   : PropTypes.bool
};

const BackgroundColorProps = {
	backgroundPrimary : PropTypes.bool,
	backgroundInfo    : PropTypes.bool,
	backgroundDanger  : PropTypes.bool,
	backgroundWarning : PropTypes.bool,
	backgroundSuccess : PropTypes.bool,
	backgroundLink    : PropTypes.bool,
	backgroundLight   : PropTypes.bool,
	backgroundDark    : PropTypes.bool,
	backgroundWhite   : PropTypes.bool,
	backgroundBlack   : PropTypes.bool
};

const SizeProps = {
	small      : PropTypes.bool,
	medium     : PropTypes.bool,
	normal     : PropTypes.bool,
	large      : PropTypes.bool,
	size       : PropTypes.number,
	fullheight : PropTypes.bool
};

const ModifierProps = {
	rounded : PropTypes.bool,
	delete  : PropTypes.bool
};

const AlignmentProps = {
	centered : PropTypes.bool,
	right    : PropTypes.bool
};

const TextAlignmentProps = {
	left      : PropTypes.bool,
	right     : PropTypes.bool,
	centered  : PropTypes.bool,
	justified : PropTypes.bool
};

const SeparatorProps = {
	dotSeparator         : PropTypes.bool,
	arrowSeparator       : PropTypes.bool,
	bulletSeparator      : PropTypes.bool,
	succeedsdotSeparator : PropTypes.bool
};

const StyleProps = {
	boxed         : PropTypes.bool,
	toggle        : PropTypes.bool,
	toggleRounded : PropTypes.bool,
	fullWidth     : PropTypes.bool,
	outlined      : PropTypes.bool
};

const StateProps = {
	hovered : PropTypes.bool,
	focused : PropTypes.bool,
	loading : PropTypes.bool,
	active  : PropTypes.bool
};

export {
	ColorProps,
	SizeProps,
	ModifierProps,
	AlignmentProps,
	SeparatorProps,
	StyleProps,
	StateProps,
	TextColorProps,
	BackgroundColorProps,
	TextAlignmentProps
};
