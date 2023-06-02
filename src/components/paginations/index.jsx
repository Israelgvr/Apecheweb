import { createContext, forwardRef, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import  Boxes  from '../boxes';
import PaginationRoot from './PaginationRoot';

const Context = createContext()

export const Paginations = forwardRef(
  ({ item, variant, color, size, active, children, ...rest }, ref ) => {
    const context = useContext( Context );
    const paginationSize = context ? context.size : null;

    const value = useMemo( () => ({ variant, color, size }), [ variant, color, size ] );
    
    return (
      <Context.Provider value = { value }>
        { item ? (
          <PaginationRoot
            {...rest}
            ref = { ref }
            variant = { active ? context.variant : "outlined" }
            color = { active ? context.color : "secondary" }
            iconOnly
            circular
            ownerState = {{ variant, active, paginationSize }}
          >
            { children }
          </PaginationRoot>
        ) : (
          <Boxes
            display = "flex"
            justifyContent = "flex-end"
            alignItems = "center"
            sx = {{ listStyle: "none" }}
          >
            { children } 
          </Boxes>
        )}
      </Context.Provider>
    );
  }
);

Paginations.defaultProps = {
  item: false,
  variant: 'gradient',
  color: 'info',
  size: 'medium',
  active: false,
};

Paginations.propTypes = {
  item: PropTypes.bool,
  variant: PropTypes.oneOf([ 'gradient', 'contained' ]),
  color: PropTypes.oneOf([
    'white',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
  ]),
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Paginations;