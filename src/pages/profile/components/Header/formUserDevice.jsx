import { Card } from "@mui/material";
import Boxes from "../../../../components/boxes";
import Buttons from "../../../../components/buttons";
import Inputs from "../../../../components/inputs";
import TextInfo from "./textInfo";
import Typography from "../../../../components/typography";
import { updateUserDevice } from "../../../../api/userDevice.service";
const FormUserDevice = ({ id, name, model, userDeviceInfo }) => {
  const { token } = userDeviceInfo;

  const updateUserDevices = async (newName) => {
    const resp = await updateUserDevice(id, newName, token);
    // console.log(resp);
    window.location.replace(
      `/${id}/${model}/${resp.UserDevice.nameUser}/profile`
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    const newName = target.name.value;
    updateUserDevices(newName);
    // window.location.replace(`/${id}/${model}/${newName}/profile`);
  };

  return (
    <Card>
      <Boxes p={2}>
        <Typography variant="h4" fontWeight="medium" textTransform="capitalize">
          Editar Usuario
        </Typography>
      </Boxes>
      <Boxes pt={4} pb={3} px={3} onSubmit={onSubmit}>
        <Boxes component="form" role="form">
          <Boxes mb={2}>
            <Inputs
              type="text"
              label="Current Name"
              id="name"
              defaultValue={name}
              fullWidth
            />
          </Boxes>
          <TextInfo userDeviceInfo={userDeviceInfo} />
          <Boxes mt={4} mb={1}>
            <Buttons type="submit" variant="gradient" color="info" fullWidth>
              Actualizar
            </Buttons>
          </Boxes>
        </Boxes>
      </Boxes>
    </Card>
  );
};

export default FormUserDevice;
