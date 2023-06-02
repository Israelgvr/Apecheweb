import { Card, Grid, Divider, Skeleton } from "@mui/material";
import { useRef } from "react";
import { useState, useEffect } from "react";
import avatar from "../../../../assets/images/avatar.png";
import Avatars from "../../../../components/avatars";
import Boxes from "../../../../components/boxes";
import breakpoints from "../../../../assets/theme/base/breakpoints";
import Buttons from "../../../../components/buttons";
import FormUserDevice from "./formUserDevice";
import PropTypes from "prop-types";
import ReactToPrint from "react-to-print";
import Typography from "../../../../components/typography";
import FormAdminInfo from "./FormAdminInfo";

export const Header = ({ params, userDeviceInfo, children }) => {
  // console.log(userDeviceInfo);
  let componentRef = useRef(null);
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");

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

  return (
    <div ref={(el) => (componentRef = el)}>
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
                  {model}
                </Typography>
              </Boxes>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
              <ReactToPrint
                trigger={() => {
                  return (
                    <Buttons
                      type="submit"
                      variant="gradient"
                      color="info"
                      fullWidth
                    >
                      Exportar a pdf
                    </Buttons>
                  );
                }}
                content={() => componentRef}
                documentTitle={name}
                pageStyle="print"
                copyStyles
              />
            </Grid>
          </Grid>
          <Divider />
          {Object.keys(userDeviceInfo).length != 0 ? (
            <>
              <FormAdminInfo />
              <FormUserDevice name={name} userDeviceInfo={userDeviceInfo} />
            </>
          ) : (
            <>
              <Skeleton variant="rounded" height={100} />
              <br />
              <Skeleton variant="rounded" height={100} />
            </>
          )}
          {children}
        </Card>
      </Boxes>
    </div>
  );
};

Header.defaultProps = {
  children: "",
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
