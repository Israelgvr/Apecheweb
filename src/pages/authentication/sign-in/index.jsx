import { Card, Grid } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import BasicLayout from "../components/BasicLayout";
import Boxes from "../../../components/boxes";
import Buttons from "../../../components/buttons";
import Typography from "../../../components/typography";

export const SignIn = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <BasicLayout>
      <Card>
        <Boxes
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <Typography variant="h4" fontWeight="medium" color="white" mt={1}>
            Inicio de Sesion
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 1, mb: 2 }}
          >
            <Typography display="block" variant="button" color="white" my={1}>
              DEPARTAMENTO II DEL COMANDO DE EJÉRCITO
            </Typography>
          </Grid>
        </Boxes>
        <Boxes pt={4} pb={3} px={3}>
          <Boxes component="form" role="form">
            {isAuthenticated ? (
              window.location.replace("/authentication/sign-up")
            ) : (
              <Boxes mt={2} mb={1}>
                <Buttons
                  type="submit"
                  variant="gradient"
                  color="info"
                  fullWidth
                  onClick={() => loginWithRedirect()}
                >
                  iniciar sesion
                </Buttons>
              </Boxes>
            )}
          </Boxes>
        </Boxes>
      </Card>
    </BasicLayout>
  );
};

export default SignIn;
