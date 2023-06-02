import { Grid, TextField } from "@mui/material";
import Boxes from "../../../../components/boxes";
import TextInfo from "./textInfo";
import Typography from "../../../../components/typography";
import { useAuth0 } from "@auth0/auth0-react";

const FormAdminInfo = () => {
  const { user } = useAuth0();
  const currentDate = new Date();
  return (
    <>
      <Boxes p={2}>
        <Typography variant="h4" fontWeight="medium" textTransform="capitalize">
          Datos Generales del Administrador de turno
        </Typography>
      </Boxes>
      <Boxes pt={4} pb={3} px={3}>
        <Boxes component="form" role="form">
          <Boxes mb={2}>
            <TextField
              disabled
              color="success"
              label="Nombre Completo Administrador:"
              defaultValue=" "
              fullWidth
            />
          </Boxes>
          <Boxes mb={2}>
            <TextField
              disabled
              color="success"
              label="Rol dentro de la Unidad"
              defaultValue=" "
              fullWidth
            />
          </Boxes>
          <Boxes mb={2}>
            <TextField
              disabled
              color="success"
              label="Fecha Actual"
              defaultValue={currentDate}
              fullWidth
            />
          </Boxes>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <TextField
                disabled
                color="warning"
                label="Email"
                defaultValue={user.email}
              />
            </Grid>
            <Grid item>
              <TextField
                disabled
                color="warning"
                label="Name"
                defaultValue={user.name}
              />
            </Grid>
            <Grid item>
              <TextField
                disabled
                color="warning"
                label="Nickname"
                defaultValue={user.nickname}
              />
            </Grid>
          </Grid>

          <br />
        <Boxes mb={2}>
          <TextField
            disabled
            color="success"
            label="Firma del responsable:"
            defaultValue=" "
            fullWidth
          />
        </Boxes>
        </Boxes>
      </Boxes>
    </>
  );
};

export default FormAdminInfo;
