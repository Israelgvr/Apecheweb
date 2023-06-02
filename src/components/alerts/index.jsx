import { useState } from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@mui/material';
import Boxes from '../boxes';
import AlertRoot from './AlertRoot';
import AlertCloseIcon from './AlertCloseIcon';

export const Alerts = ({ color, dismissible, children, ...rest }) => {
    const [alertStatus, setAlertStatus] = useState( 'mount' );
    const handleAlertStatus = () => setAlertStatus( 'fadeOut' );

    const alertTemplate = ( mount = true ) => (
        <Fade in={ mount } timeout={ 300 }>
        <AlertRoot ownerState={{ color }} { ...rest }>
            <Boxes display="flex" alignItems="center" color="white">
            { children }
            </Boxes>
            { dismissible ? (
                    <AlertCloseIcon onClick={ mount ? handleAlertStatus : null }>&times;</AlertCloseIcon>
                ) : null
            }
        </AlertRoot>
        </Fade>
    );

    switch ( true ) {
        case alertStatus === 'mount':
            return alertTemplate();
        case alertStatus === 'fadeOut':
            setTimeout(() => setAlertStatus('unmount'), 400);
            return alertTemplate(false);
        default:
            alertTemplate();
            break;
    };  

    return null;
};

Alerts.defaultProps = {
    color: 'info',
    dismissible: false,
};
  
Alerts.propTypes = {
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
    dismissible: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Alerts;