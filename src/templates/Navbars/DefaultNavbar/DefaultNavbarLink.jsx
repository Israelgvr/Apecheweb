
import { Icon } from "@mui/material";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Boxes from '../../../components/boxes';
import Typography from '../../../components/typography';

export const DefaultNavbarLink = ({ icon, name, route, light }) => {
  return (
    <Boxes
      component={Link}
      to={route}
      mx={1}
      p={1}
      display="flex"
      alignItems="center"
      sx={{ cursor: "pointer", userSelect: "none" }}
    >
      <Icon
        sx={{
          color: ({ palette: { white, secondary } }) => (light ? white.main : secondary.main),
          verticalAlign: "middle",
        }}
      >
        {icon}
      </Icon>
      <Typography
        variant="button"
        fontWeight="regular"
        color={light ? "white" : "dark"}
        textTransform="capitalize"
        sx={{ width: "100%", lineHeight: 0 }}
      >
        &nbsp;{name}
      </Typography>
    </Boxes>
  );
}

DefaultNavbarLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default DefaultNavbarLink;
