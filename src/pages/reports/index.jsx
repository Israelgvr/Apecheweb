import Boxes from "../../components/boxes";
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import Footer from "../../templates/Footer";
import ProfilesReport from "./ProfilesReport";

export const Reports = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Boxes py={3}>
        <h1>Reports</h1>
        <ProfilesReport />
      </Boxes>
      <Footer />
    </DashboardLayout>
  );
};
export default Reports;
