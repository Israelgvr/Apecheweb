import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { AvatarRoot } from './AvatarRoot';

export const Avatars = forwardRef(({ bgColor, size, shadow, ...rest }, ref ) => (
  <AvatarRoot 
    ref = {ref} 
    ownerState = {{ shadow, bgColor, size }} 
    {...rest}
  />
));

Avatars.defaultProps = {
  bgColor: 'transparent',
  size: 'md',
  shadow: 'none',
};

Avatars.propTypes = {
  bgColor: PropTypes.oneOf([
    'transparent',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  shadow: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'inset']),
};


export default Avatars;