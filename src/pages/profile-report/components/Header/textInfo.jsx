import { Grid, TextField } from "@mui/material";
import React from "react";
import Boxes from "../../../../components/boxes";

const TextInfo = ({ userDeviceInfo }) => {
  // console.log(userDeviceInfo);
  const {
    board,
    brand,
    codeName,
    device,
    deviceId,
    display,
    fingerPrint,
    hardware,
    host,
    id,
    manufacturer,
    model,
    product,
    release,
    sdk,
    securityPatch,
    type,
    user,
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
            label="Display"
            defaultValue={display}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="FingerPrint"
            defaultValue={fingerPrint}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="Hardware"
            defaultValue={hardware}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="Host"
            defaultValue={host}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="ID"
            defaultValue={id}
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
            label="Model"
            defaultValue={model}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="Product"
            defaultValue={product}
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
            label="Security Patch"
            defaultValue={securityPatch}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="Type"
            defaultValue={type}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            color="warning"
            label="User"
            defaultValue={user}
          />
        </Grid>
      </Grid>
    </Boxes>
  );
};

export default TextInfo;