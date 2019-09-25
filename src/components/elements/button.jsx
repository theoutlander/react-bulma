import React from "react";
import PropTypes from "prop-types";
import { mapClasses } from "../util";

const Button = props => {
  let classes = `button ${mapClasses(props)}`;

  if (props.anchor) {
    return <a className={classes}>{props.value}</a>;
  } else if (props.submit) {
    return <input className={classes} type="submit" value="Submit input" />;
  } else if (props.reset) {
    return <input className={classes} type="reset" value="Reset input" />;
  } else {
    return <button className={classes}>{props.value}</button>;
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
