import { Grid, TextField } from "@mui/material";
import Boxes from "../../../../components/boxes";
import React from "react";

const TextInfo = ({ userDeviceInfo }) => {
  const {
    board,
    brand,
    codeName,
    device,
    deviceId,
    manufacturer,
    release,
    sdk,
    type,
  } = userDeviceInfo;

  return (
    <Boxes mb={2}>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="Board"
            defaultValue={board}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="Brand"
            defaultValue={brand}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="CodeName"
            defaultValue={codeName}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="Device"
            defaultValue={device}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="DeviceId"
            defaultValue={deviceId}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="Manufacturer"
            defaultValue={manufacturer}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="Release (Android Version)"
            defaultValue={release}
          />
        </Grid>
        <Grid item>
          <TextField disabled color="warning" label="SDK" defaultValue={sdk} />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="Type"
            defaultValue={type}
          />
        </Grid>
      </Grid>
    </Boxes>
  );
};

export default TextInfo;
