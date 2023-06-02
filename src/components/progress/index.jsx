import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '../typography';
import ProgressRoot from './ProgressRoot';

export const Progress = forwardRef(
  ({ variant, color, value, label, ...rest }, ref ) => (
    <>
      { label && (
          <Typography 
            variant = "button" 
            fontWeight = "medium" 
            color = "text"
          >
            { value }%
          </Typography>
        )
      }
      <ProgressRoot
        { ...rest }
        ref = { ref }
        variant = "determinate"
        value = { value }
        ownerState = {{ color, value, variant }}
      />
    </>
  )
);

Progress.defaultProps = {
  variant: 'contained',
  color: 'info',
  value: 0,
  label: false,
};

Progress.propTypes = {
  variant: PropTypes.oneOf(['contained', 'gradient']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default Progress;