import { Grid, Card } from "@mui/material";
import { useState } from "react";
import Alerts from "../../components/alerts";
import Boxes from "../../components/boxes";
import Buttons from "../../components/buttons";
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import Footer from "../../templates/Footer";
import Snackbars from "../../components/snackbars";
import Typography from "../../components/typography";

export const Notifications = () => {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <Typography variant="body2" color="white">
      A simple {name} alert with{" "}
      <Typography
        component="a"
        href="#"
        variant="body2"
        fontWeight="medium"
        color="white"
      >
        an example link
      </Typography>
      . Give it a click if you like.
    </Typography>
  );

  const renderSuccessSB = (
    <Snackbars
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <Snackbars
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <Snackbars
      color="warning"
      icon="star"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <Snackbars
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Boxes mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <Boxes p={2}>
                <Typography variant="h5">Alerts</Typography>
              </Boxes>
              <Boxes pt={2} px={2}>
                <Alerts color="primary" dismissible>
                  {alertContent("primary")}
                </Alerts>
                <Alerts color="secondary" dismissible>
                  {alertContent("secondary")}
                </Alerts>
                <Alerts color="success" dismissible>
                  {alertContent("success")}
                </Alerts>
                <Alerts color="error" dismissible>
                  {alertContent("error")}
                </Alerts>
                <Alerts color="warning" dismissible>
                  {alertContent("warning")}
                </Alerts>
                <Alerts color="info" dismissible>
                  {alertContent("info")}
                </Alerts>
                <Alerts color="light" dismissible>
                  {alertContent("light")}
                </Alerts>
                <Alerts color="dark" dismissible>
                  {alertContent("dark")}
                </Alerts>
              </Boxes>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <Boxes p={2} lineHeight={0}>
                <Typography variant="h5">Notifications</Typography>
                <Typography variant="button" color="text" fontWeight="regular">
                  Notifications on this page use Toasts from Bootstrap. Read
                  more details here.
                </Typography>
              </Boxes>
              <Boxes p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Buttons
                      variant="gradient"
                      color="success"
                      onClick={openSuccessSB}
                      fullWidth
                    >
                      success notification
                    </Buttons>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Buttons
                      variant="gradient"
                      color="info"
                      onClick={openInfoSB}
                      fullWidth
                    >
                      info notification
                    </Buttons>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Buttons
                      variant="gradient"
                      color="warning"
                      onClick={openWarningSB}
                      fullWidth
                    >
                      warning notification
                    </Buttons>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Buttons
                      variant="gradient"
                      color="error"
                      onClick={openErrorSB}
                      fullWidth
                    >
                      error notification
                    </Buttons>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </Boxes>
            </Card>
          </Grid>
        </Grid>
      </Boxes>
      <Footer />
    </DashboardLayout>
  );
};

export default Notifications;
