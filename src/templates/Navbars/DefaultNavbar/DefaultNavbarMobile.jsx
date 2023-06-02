
import { Menu } from "@mui/material";
import PropTypes from "prop-types";

import Boxes from '../../../components/boxes';
import DefaultNavbarLink from "./DefaultNavbarLink";


export const DefaultNavbarMobile = ({ open, close }) => {
  const { width } = open && open.getBoundingClientRect();

  return (
    <Menu
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <Boxes px={0.5}>
        {/* <DefaultNavbarLink icon="account_circle" name="sign up" route="/authentication/sign-up" /> */}
        <DefaultNavbarLink icon="key" name="sign in" route="/authentication/sign-in" />
      </Boxes>
    </Menu>
  );
}

DefaultNavbarMobile.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
