import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Boxes from "../../components/boxes";
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import Footer from "../../templates/Footer";
import ProfilesInformation from "./components/ProfilesInformation";
import StatisticsCard from "../../templates/Cards/StatisticsCard";

export const Dashboard = () => {
  const [countUser, setCountUser] = useState(0);
  const getAllUserDevice = async () => {
    const response = await fetch(
      "https://backend-alisero-v1.herokuapp.com/api/v1/userDevice/getUserDevice"
    );
    const { userDeviceInfo } = await response.json();
    // console.log(userDevice.length);
    setCountUser(userDeviceInfo.length);
  };
  useEffect(() => {
    getAllUserDevice();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Boxes py={3}>
        <Boxes>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <ProfilesInformation />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Grid item xs={12} md={6} lg={12}>
                <Boxes mb={1.5}>
                  <StatisticsCard
                    icon="groups"
                    // title="Registered Users"
                    title="Usuarios Registrados"
                    count={countUser}
                    percentage={{
                      color: "success",
                      amount: "+1",
                      label: "Total Registrados",
                    }}
                  />
                </Boxes>
                <br />
              </Grid>
              <Grid item xs={12} md={6} lg={12}>
                <Boxes mb={1.5}>
                  <StatisticsCard
                    color="success"
                    icon="phone"
                    title="Registro de llamadas"
                    count="+10"
                    percentage={{
                      color: "success",
                      amount: "+5",
                      label: "Total Registrados",
                    }}
                  />
                </Boxes>
                <br />
              </Grid>
              <Grid item xs={12} md={6} lg={12}>
                <Boxes mb={1.5}>
                  <StatisticsCard
                    color="warning"
                    icon="location_on"
                    title="Registro de Geolocalizacion"
                    count="+15"
                    percentage={{
                      color: "success",
                      amount: "+5",
                      label: "Total Registrados",
                    }}
                  />
                </Boxes>
                <br />
              </Grid>
            </Grid>
          </Grid>
        </Boxes>
      </Boxes>
      <Footer />
    </DashboardLayout>
  );
};

export default Dashboard;
