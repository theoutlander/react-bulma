import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  if (props.anchor) {
    return <a className="button">Anchor</a>;
  } else if (props.submit) {
    return <input className="button" type="submit" value="Submit input" />;
  } else if (props.reset) {
    return <input className="button" type="reset" value="Reset input" />;
  } else {
    return <button className="button">Button</button>;
  }
};

Button.propTypes = {
  anchor: PropTypes.bool,
  submit: PropTypes.bool,
  reset: PropTypes.bool,
  button: PropTypes.bool,
  white: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  black: PropTypes.bool,
  text: PropTypes.bool,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  link: PropTypes.bool
  // type: PropTypes.oneOf(["anchor", "button", "submit", "reset"])
};

export default Button;
