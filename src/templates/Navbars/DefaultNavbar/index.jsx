import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import Boxes from "../../../components/boxes";
import Typography from "../../../components/typography";
import Buttons from "../../../components/buttons";

import breakpoints from "../../../assets/theme/base/breakpoints";

import { useMaterialUIController } from "../../../context";
import DefaultNavbarLink from "./DefaultNavbarLink";
import DefaultNavbarMobile from "./DefaultNavbarMobile";
import { Container, Icon } from "@mui/material";

export const DefaultNavbar = ({ transparent, light, action }) => {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) =>
    setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    window.addEventListener("resize", displayMobileNavbar);

    displayMobileNavbar();

    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <Container>
      <Boxes
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={3}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="lg"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left={0}
        zIndex={3}
        sx={({
          palette: { transparent: transparentColor, white, background },
          functions: { rgba },
        }) => ({
          backgroundColor: transparent
            ? transparentColor.main
            : rgba(darkMode ? background.sidenav : white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <Boxes
          // component={Link}
          // to="/"
          py={transparent ? 1.5 : 0.75}
          lineHeight={1}
          pl={{ xs: 0, lg: 1 }}
        >
          <Typography
            variant="button"
            fontWeight="bold"
            color={light ? "white" : "dark"}
          >
            SISTEMA DE MONITOREO DE DISPOSITIVOS ANDROID
          </Typography>
        </Boxes>
        <Boxes color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
          {/* <DefaultNavbarLink
            icon="account_circle"
            name="sign up"
            route="/authentication/sign-up"
            light={light}
          /> */}
          <DefaultNavbarLink
            icon="key"
            name="sign in"
            route="/authentication/sign-in"
            light={light}
          />
        </Boxes>
        {action &&
          (action.type === "internal" ? (
            <Boxes display={{ xs: "none", lg: "inline-block" }}>
              <Buttons
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
              >
                {action.label}
              </Buttons>
            </Boxes>
          ) : (
            <Boxes display={{ xs: "none", lg: "inline-block" }}>
              <Buttons
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
                sx={{ mt: -0.3 }}
              >
                {action.label}
              </Buttons>
            </Boxes>
          ))}
        <Boxes
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
        </Boxes>
      </Boxes>
      {mobileView && (
        <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />
      )}
    </Container>
  );
};

DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
