import { TextField } from "@mui/material";
import Boxes from "../../../../components/boxes";
import TextInfo from "./textInfo";
import Typography from "../../../../components/typography";

const FormUserDevice = ({ name, userDeviceInfo }) => {
  return (
    <>
      <Boxes p={2}>
        <Typography variant="h4" fontWeight="medium" textTransform="capitalize">
          Datos Generales del Usuario
        </Typography>
      </Boxes>
      <Boxes pt={4} pb={3} px={3}>
        <Boxes component="form" role="form">
          <Boxes mb={2}>
            <TextField
              disabled
              color="warning"
              label="Current Name"
              defaultValue={name}
              fullWidth
            />
          </Boxes>
          <TextInfo userDeviceInfo={userDeviceInfo} />
        </Boxes>
      </Boxes>
    </>
  );
};

export default FormUserDevice;
