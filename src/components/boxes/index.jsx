import { forwardRef } from "react";
import { BoxRoot } from "./BoxRoot";

import PropTypes from 'prop-types';

export const Boxes = forwardRef(
    ({ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }, ref ) => (
        <BoxRoot
            { ...rest }
            ref = { ref }
            ownerState = {{ 
                variant, 
                bgColor, 
                color, 
                opacity, 
                borderRadius, 
                shadow, 
                coloredShadow 
            }}
        />
    )
);

Boxes.defaultProps = {
    variant: 'contained',
    bgColor: 'transparent',
    color: 'dark',
    opacity: 1,
    borderRadius: 'none',
    shadow: 'none',
    coloredShadow: 'none',
};
  
Boxes.propTypes = {
    variant: PropTypes.oneOf([ 'contained', 'gradient' ]),
    bgColor: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.number,
    borderRadius: PropTypes.string,
    shadow: PropTypes.string,
    coloredShadow: PropTypes.oneOf([
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'light',
        'dark',
        'none',
    ]),
};

export default Boxes;