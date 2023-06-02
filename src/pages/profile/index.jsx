import { Grid, Card, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Boxes from "../../components/boxes";
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import DataTableCallLog from "./DataTableCallLog";
import DataTableLocation from "./DataTableLocation";
import DateCalendar from "../../components/date";
import Footer from "../../templates/Footer";
import Header from "./components/Header";
import MapLayout from "../../templates/MapLayout";
import Scrollbars from "react-custom-scrollbars-2";
import Typography from "../../components/typography";
import { getUserDeviceById } from "../../api/userDevice.service";

export const Profile = () => {
  const params = useParams();

  const [callUserDevice, setCallUserDevice] = useState({});
  const [userDeviceInfo, setUserDeviceInfo] = useState({});

  const getUserInfo = async () => {
    const { UserDevice } = await getUserDeviceById(params.id);
    setCallUserDevice(UserDevice);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    setUserDeviceInfo(callUserDevice);
  }, [callUserDevice]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Boxes mb={2} />
      <Header params={params} userDeviceInfo={userDeviceInfo}>
        <Boxes mt={5} mb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Boxes p={2}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item>
                    <Typography
                      variant="h4"
                      fontWeight="medium"
                      textTransform="capitalize"
                    >
                      Lista de Contactos
                    </Typography>
                  </Grid>
                  <Grid item>{/* <DateCalendar /> */}</Grid>
                </Grid>
              </Boxes>
              {/* <Scrollbars style={{ height: 350 }}> */}
                {Object.keys(userDeviceInfo) != 0 ? (
                  <DataTableCallLog userDeviceInfo={userDeviceInfo} />
                ) : (
                  <>
                    <Skeleton variant="rounded" height={100} />
                    <br />
                    <Skeleton variant="rounded" height={100} />
                    <br />
                    <Skeleton variant="rounded" height={100} />
                    <br />
                    <Skeleton variant="rounded" height={100} />
                  </>
                )}
              {/* </Scrollbars> */}
            </Grid>
            <Grid item xs={12}>
              <Boxes p={2}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item>
                    <Typography
                      variant="h4"
                      fontWeight="medium"
                      textTransform="capitalize"
                    >
                      Registro de localizaciones
                    </Typography>
                  </Grid>
                  <Grid item>{/* <DateCalendar /> */}</Grid>
                </Grid>
              </Boxes>

              {/* <Scrollbars style={{ height: 350 }}> */}
                {Object.keys(userDeviceInfo) != 0 ? (
                  <DataTableLocation userDeviceInfo={userDeviceInfo} />
                ) : (
                  <>
                    <Skeleton variant="rounded" height={100} />
                    <br />
                    <Skeleton variant="rounded" height={100} />
                    <br />
                    <Skeleton variant="rounded" height={100} />
                    <br />
                    <Skeleton variant="rounded" height={100} />
                  </>
                )}
              {/* </Scrollbars> */}
            </Grid>
          </Grid>
        </Boxes>
        <Grid item xs={12}>
          <Boxes
            mt={2}
            py={2}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <Typography variant="h6" color="white">
              Mapa de Georeferencia
            </Typography>
          </Boxes>
          <Card>
            <Boxes>
              <div style={{ height: "400px" }}>
                {Object.keys(userDeviceInfo) != 0 ? (
                  <MapLayout userDeviceInfo={userDeviceInfo} />
                ) : (
                  <Skeleton variant="rounded" height={400} />
                )}
              </div>
            </Boxes>
          </Card>
        </Grid>
      </Header>
      <Footer />
    </DashboardLayout>
  );
};

export default Profile;
