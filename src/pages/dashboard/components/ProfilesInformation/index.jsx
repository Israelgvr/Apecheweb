import { Card, Grid, Skeleton, TextField } from "@mui/material";
import { getAllUserDevice } from "../../../../api/userDevice.service";
import { useEffect, useState } from "react";
import Boxes from "../../../../components/boxes";
import CardInformation from "../CardInformation";
import Scrollbars from "react-custom-scrollbars-2";
import Typography from "../../../../components/typography";

export const ProfilesInformation = () => {
  const [userDevices, setUserDevices] = useState([]);
  const [search, setSearch] = useState("");

  const getAllUserDevices = async () => {
    const { userDeviceInfo } = await getAllUserDevice();
    setUserDevices(userDeviceInfo);
  };

  const searcher = (event) => {
    setSearch(event.target.value);
    // console.log(event.target.value);
  };

  const results = !search
    ? userDevices
    : userDevices.filter((name) =>
        name.nameUser.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    getAllUserDevices();
  }, []);

  return (
    <Card>
      <Boxes pt={3} px={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Typography variant="h6" fontWeight="medium">
              Lista de Perfiles
            </Typography>
          </Grid>
          <Grid item>
            {userDevices.length != 0 ? (
              <TextField
                id="outlined-search"
                label="Buscar usuario"
                variant="outlined"
                onChange={searcher}
              />
            ) : (
              <TextField
                disabled
                id="outlined-search"
                label="Buscar usuario"
                variant="outlined"
                onChange={searcher}
              />
            )}
          </Grid>
        </Grid>
      </Boxes>
      <Boxes pt={1} pb={3} px={2}>
        <Boxes component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Scrollbars style={{ height: 400 }}>
            {userDevices.length != 0 ? (
              results.map(({ id, deviceId, nameUser, brand, model }) => {
                return (
                  <CardInformation
                    key={id}
                    id={id}
                    deviceId={deviceId}
                    nameUser={nameUser}
                    brand={brand}
                    model={model}
                  />
                );
              })
            ) : (
              <>
                <Skeleton variant="rounded" height={100} />
                <br />
                <Skeleton variant="rounded" height={100} />
                <br />
                <Skeleton variant="rounded" height={100} />
                <br />
                <Skeleton variant="rounded" height={100} />
              </>
            )}
          </Scrollbars>
        </Boxes>
      </Boxes>
    </Card>
  );
};

export default ProfilesInformation;
