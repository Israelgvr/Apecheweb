import { Card, Grid } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Avatars from "../../../../components/avatars";
import Boxes from "../../../../components/boxes";
import PropTypes from "prop-types";
import Typography from "../../../../components/typography";

const Header = ({ children }) => {
  const { user } = useAuth0();

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
            <Avatars
              src={user.picture}
              alt="profile-image"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <Boxes height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="medium">
                {user.nickname}
              </Typography>
              <Typography variant="button" color="text" fontWeight="regular">
                Administrador: {user.email}
              </Typography>
            </Boxes>
          </Grid>
        </Grid>
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
