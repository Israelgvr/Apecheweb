import React from "react";
import { Divider, Fade, Icon, IconButton, Snackbar } from "@mui/material";
import Boxes from "../boxes";
import SnackbarRoot from "./SnackbarRoot";
import Typography from "../typography";
import PropTypes from 'prop-types';

import { useMaterialUIController } from "../../context";


export const Snackbars = ({
  color,
  icon,
  title,
  dateTime,
  content,
  close,
  bgWhite,
  ...rest
}) => {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  let titleColor;
  let dateTimeColor;
  let dividerColor;

  if (bgWhite) {
    titleColor = color;
    dateTimeColor = "dark";
    dividerColor = false;
  } else if (color === "light") {
    titleColor = darkMode ? "inherit" : "dark";
    dateTimeColor = darkMode ? "inherit" : "text";
    dividerColor = false;
  } else {
    titleColor = "white";
    dateTimeColor = "white";
    dividerColor = true;
  }

  return (
    <Snackbar
      TransitionComponent={Fade}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      {...rest}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={close}
        >
          <Icon fontSize="small"> close </Icon>
        </IconButton>
      }
    >
      <Boxes
        variant={bgWhite ? "contained" : "gradient"}
        bgColor={bgWhite ? "white" : color}
        minWidth="21.875rem"
        maxWidth="100%"
        shadow="md"
        borderRadius="md"
        p={1}
        sx={{
          backgroundColor: ({ palette }) =>
            darkMode
              ? palette.background.card
              : palette[color] || palette.white.main,
        }}
      >
        <Boxes
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="dark"
          p={1.5}
        >
          <Boxes display="flex" alignItems="center" lineHeight={0}>
            <SnackbarRoot fontSize="small" ownerState={{ color, bgWhite }}>
              {icon}
            </SnackbarRoot>
            <Typography
              variant="button"
              fontWeight="medium"
              color={titleColor}
              textGradient={bgWhite}
            >
              {title}
            </Typography>
          </Boxes>
          <Boxes display="flex" alignItems="center" lineHeight={0}>
            <Typography variant="caption" color={dateTimeColor}>
              {dateTime}
            </Typography>
            <Icon
              sx={{
                color: ({ palette: { dark, white } }) =>
                  (bgWhite && !darkMode) || color === "light"
                    ? dark.main
                    : white.main,
                fontWeight: ({ typography: { fontWeightBold } }) =>
                  fontWeightBold,
                cursor: "pointer",
                marginLeft: 2,
                transform: "translateY(-1px)",
              }}
              onClick={close}
            >
              close
            </Icon>
          </Boxes>
        </Boxes>
        <Divider sx={{ margin: 0 }} light={dividerColor} />
        <Boxes
          p={1.5}
          sx={{
            fontSize: ({ typography: { size } }) => size.sm,
            color: ({ palette: { white, text } }) => {
              let colorValue =
                bgWhite || color === "light" ? text.main : white.main;

              if (darkMode) {
                colorValue = color === "light" ? "inherit" : white.main;
              }

              return colorValue;
            },
          }}
        >
          {content}
        </Boxes>
      </Boxes>
    </Snackbar>
  );
};

Snackbars.defaultProps = {
  bgWhite: false,
  color: "info",
};

Snackbars.propTypes = {
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
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  bgWhite: PropTypes.bool,
};

export default Snackbars;
