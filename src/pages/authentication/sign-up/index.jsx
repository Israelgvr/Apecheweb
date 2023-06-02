import {
  registerNewAdmin,
  updateCheckEmailAdmin,
} from "../../../api/admin.service";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Boxes from "../../../components/boxes";
import CoverLayout from "../components/CoverLayout";
import Typography from "../../../components/typography";

export const SignUp = () => {
  const { logout, user } = useAuth0();
  const [checkEmail, setCheckEmail] = useState({});

  const registerAdmin = async (
    email,
    verification,
    name,
    nickname,
    picture,
    sub
  ) => {
    const response = await registerNewAdmin({
      email,
      verification,
      name,
      nickname,
      picture,
      sub,
    });
  };

  const updateAdmin = async (email, verification) => {
    const { data } = await updateCheckEmailAdmin({ email, verification });
    // console.log(data);
  };

  useEffect(() => {
    if (user != null) {
      setCheckEmail(user);
      registerAdmin(
        user.email,
        user.email_verified,
        user.name,
        user.nickname,
        user.picture,
        user.sub
      );
    }
  });

  return (
    // <CoverLayout image={bgImage}>
    <CoverLayout>
      <Card>
        <Boxes
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <Typography variant="h4" fontWeight="medium" color="white" mt={1}>
            SISTEMA DE MONITOREO DE DISPOSITIVOS ANDROID
          </Typography>
          <Typography display="block" variant="button" color="white" my={1}>
            DEPARTAMENTO II DEL COMANDO DE EJÉRCITO
          </Typography>
        </Boxes>
        <Boxes pt={4} pb={3} px={3}>
          <Boxes component="form" role="form">
            <Boxes mt={4} mb={1}>
              {checkEmail.email_verified ? (
                <>
                  <Link to="/dashboard">
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        updateAdmin(
                          checkEmail.email,
                          checkEmail.email_verified
                        );
                      }}
                    >
                      Go to Dashboard
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Typography
                    display="block"
                    variant="button"
                    color="error"
                    my={1}
                  >
                    Se envio un link de verificacion a su correo. Por favor
                    verifique su correo
                  </Typography>
                  <Button variant="contained" fullWidth disabled>
                    Ir al Dashboard
                  </Button>
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Utilizar otro correo
                  </Button>
                </>
              )}
            </Boxes>
          </Boxes>
        </Boxes>
      </Card>
    </CoverLayout>
  );
};

export default SignUp;
