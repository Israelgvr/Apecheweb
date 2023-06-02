import { Grid, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import { useMaterialUIController } from "../../../context";
import Boxes from "../../../components/boxes";
import PropTypes from "prop-types";
import Typography from "../../../components/typography";

export const CardReport = ({
  id,
  deviceId,
  nameUser,
  brand,
  model,
  noGutter,
}) => {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const CustomButtonIcon = ({ bgColor, icon }) => {
    return (
      <Boxes
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={bgColor}
        color="white"
        width="2rem"
        height="2rem"
        borderRadius="50%"
        // position="absolute"
        top="8%"
        // left="2px"
        zIndex={2}
        sx={{ fontSize: ({ typography: { size } }) => size.sm }}
      >
        <Icon fontSize="inherit">{icon}</Icon>
      </Boxes>
    );
  };

  return (
    <Boxes
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <Boxes width="100%" display="flex" flexDirection="column">
        <Boxes
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <Typography
            variant="button"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {nameUser}
          </Typography>

          <Boxes
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
          >
            {/* <Link to={`/${id}/${model}/${nameUser}/profile`}>
            <Link to={`/${id}/${model}/${nameUser}/profile`}>
              <Buttons variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>groups</Icon> View Profile
              </Buttons>
            </Link> */}
            <Grid container spacing={3} alignItems="center">
              <Grid item>
                <Link to={`/${id}/${model}/${nameUser}/profile-report`}>
                  <CustomButtonIcon bgColor="error" icon="launch" />
                </Link>
              </Grid>
              {/* <Grid item>
                <CustomButtonIcon bgColor="info" icon="location_on" />
              </Grid>
              <Grid item>
                <CustomButtonIcon bgColor="success" icon="phone" />
              </Grid> */}
            </Grid>
          </Boxes>
        </Boxes>
        <Grid container spacing={3}>
          <Grid item>
            <Boxes mb={1} lineHeight={0}>
              <Typography variant="caption" color="text">
                Device Id:&nbsp;&nbsp;&nbsp;
                <Typography
                  variant="caption"
                  fontWeight="medium"
                  textTransform="capitalize"
                >
                  {deviceId}
                </Typography>
              </Typography>
            </Boxes>
            <Boxes mb={1} lineHeight={0}>
              <Typography variant="caption" color="text">
                Number:&nbsp;&nbsp;&nbsp;
                <Typography variant="caption" fontWeight="medium">
                  Unknow
                </Typography>
              </Typography>
            </Boxes>
            <Boxes mb={1} lineHeight={0}>
              <Typography variant="caption" color="text">
                Brand:&nbsp;&nbsp;&nbsp;
                <Typography variant="caption" fontWeight="medium">
                  {brand}
                </Typography>
              </Typography>
            </Boxes>
            <Boxes mb={1} lineHeight={0}>
              <Typography variant="caption" color="text">
                Model:&nbsp;&nbsp;&nbsp;
                <Typography variant="caption" fontWeight="medium">
                  {model}
                </Typography>
              </Typography>
            </Boxes>
          </Grid>
        </Grid>
      </Boxes>
    </Boxes>
  );
};

CardReport.defaultProps = {
  noGutter: false,
};

CardReport.propTypes = {
  noGutter: PropTypes.bool,
};

export default CardReport;
