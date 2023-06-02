import { Grid } from "@mui/material";
import adminTableData from "./data/adminTableData";
import Boxes from "../../components/boxes";
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import DataTable from "../../templates/Tables/DataTable";
import Footer from "../../templates/Footer";
import Header from "./components/Header";
import Typography from "../../components/typography";

export const Admin = () => {
  const { columns, rows } = adminTableData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Boxes mb={2} />
      <Header>
        <Boxes mt={5} mb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Boxes p={2}>
                <Typography
                  variant="h4"
                  fontWeight="medium"
                  textTransform="capitalize"
                >
                  Lista de Usuarios Administradores
                </Typography>
              </Boxes>
              <DataTable
                table={{ columns, rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
                noEndBorder
              />
            </Grid>
          </Grid>
        </Boxes>
      </Header>
      <Footer />
    </DashboardLayout>
  );
};

export default Admin;
