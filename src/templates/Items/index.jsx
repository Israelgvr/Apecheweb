

import { forwardRef } from "react";

import PropTypes from "prop-types";

import Boxes from '../../components/boxes';
import Typography from '../../components/typography';

import menuItem from './styles';
import { Link, MenuItem } from "@mui/material";

export const NotificationItem = forwardRef(({ icon, title, ...rest }, ref) => (
  <MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
    <Boxes component={Link} py={0.5} display="flex" alignItems="center" lineHeight={1}>
      <Typography variant="body1" color="secondary" lineHeight={0.75}>
        {icon}
      </Typography>
      <Typography variant="button" fontWeight="regular" sx={{ ml: 1 }}>
        {title}
      </Typography>
    </Boxes>
  </MenuItem>
));

NotificationItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default NotificationItem;