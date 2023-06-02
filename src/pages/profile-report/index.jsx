import { Grid, Card, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Boxes from "../../components/boxes";
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import DataTableCallLog from "./DataTableCallLog";
import DataTableLocation from "./DataTableLocation";
import Footer from "../../templates/Footer";
import Header from "./components/Header";
import MapLayout from "../../templates/MapLayout";
import Typography from "../../components/typography";

export const ProfileReport = () => {
  const params = useParams();

  const [callUserDevice, setCallUserDevice] = useState({});
  const [userDeviceInfo, setUserDeviceInfo] = useState({});

  const getUserDeviceById = async () => {
    const response = await fetch(
      `https://backend-alisero-v1.herokuapp.com/api/v1/userDevice/${params.id}/getUserDeviceById`
    );
    const { UserDevice } = await response.json();
    setCallUserDevice(UserDevice);
    // console.log(userDeviceInfo);
  };

  useEffect(() => {
    getUserDeviceById();
    // console.log(contactsTableData(userDeviceInfo));
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
                </Grid>
              </Boxes>
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
                </Grid>
              </Boxes>
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

export default ProfileReport;
