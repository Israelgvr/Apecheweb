import { Card, Grid } from "@mui/material";
import Boxes from "../../components/boxes";
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import DataTableUser from "./DataTableUser";
import Footer from "../../templates/Footer";
import MapUser from "../../templates/MapLayout/MapUser";
import Typography from "../../components/typography";

export const Maps = () => {
 
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Boxes pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <Boxes
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <Typography variant="h6" color="white">
                  Mapas de Georeferencia
                </Typography>
              </Boxes>
              <Boxes>
                <div style={{ height: "400px" }}>
                  <MapUser/>
                </div>
              </Boxes>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <Boxes
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <Typography variant="h6" color="white">
                  Localizacion de Usuarios
                </Typography>
              </Boxes>
              <Boxes pt={3}>
                <DataTableUser/>
              </Boxes>
            </Card>
          </Grid>
        </Grid>
      </Boxes>
      <Footer />
    </DashboardLayout>
  );
};

export default Maps;
