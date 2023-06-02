import { Grid } from "@mui/material";
import Boxes from "../../../../components/boxes";
import DefaultNavbar from "../../../../templates/Navbars/DefaultNavbar";
import PageLayout from "../../../../templates/LayoutContainers/PageLayout";
import PropTypes from "prop-types";

function BasicLayout({ image, children }) {
  return (
    <PageLayout>
      <DefaultNavbar/>
      <Boxes
        position="absolute"
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Boxes px={1} width="100%" height="100vh" mx="auto">
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </Boxes>
    </PageLayout>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
