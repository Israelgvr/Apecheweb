import { Card, Grid, AppBar, Tabs, Tab, Icon, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import avatar from "../../../../assets/images/avatar.png";
import Avatars from "../../../../components/avatars";
import Boxes from "../../../../components/boxes";
import breakpoints from "../../../../assets/theme/base/breakpoints";
import FormUserDevice from "./formUserDevice";
import PropTypes from "prop-types";
import Typography from "../../../../components/typography";

export const Header = ({ params, userDeviceInfo, children }) => {
  // console.log(userDeviceInfo);
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  const { id, model, name } = params;

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);

    handleTabsOrientation();

    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => {
    event.preventDefault();
    setTabValue(newValue);
  };

  return (
    <Boxes position="relative" mb={5}>
      <Boxes
        mx={2}
        mt={3}
        py={8}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
      />
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatars src={avatar} alt="profile-image" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <Boxes height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="medium">
                {name}
              </Typography>
              <Typography variant="button" color="text" fontWeight="regular">
                Modelo: {model}
              </Typography>
            </Boxes>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
              >
                <Tab
                  id="dataPanel"
                  label="Panel"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      account_box
                    </Icon>
                  }
                />
                <Tab
                  id="edit"
                  label="Editar"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      settings
                    </Icon>
                  }
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
        {tabValue ? (
          <FormUserDevice
            id={id}
            name={name}
            model={model}
            userDeviceInfo={userDeviceInfo}
          />
        ) : (
          <Divider />
        )}
        {children}
      </Card>
    </Boxes>
  );
};

Header.defaultProps = {
  children: "",
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
