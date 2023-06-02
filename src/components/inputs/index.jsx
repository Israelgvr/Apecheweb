import { forwardRef } from "react";
import PropTypes from "prop-types";
import { InputRoot } from "./InputRoot";

export const Inputs = forwardRef(
  ({ error, success, disabled, ...rest }, ref ) => (
    <InputRoot
      {...rest} 
      ref = {ref} 
      ownerState = {{ error, success, disabled }}
    />
  )
);

Inputs.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

Inputs.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Inputs;