import { Button, Grid, Icon } from "@mui/material";
import { downloadExcel } from "react-export-table-to-excel";
import DataTable from "../../templates/Tables/DataTable";
import locationsTableData from "./data/locationsTableData";
import { useEffect, useState } from "react";
import Typography from "../../components/typography";
import { getAllLocations } from "../../api/location.service";

const DataTableLocation = ({ userDeviceInfo }) => {
  const { columns, rows } = locationsTableData(userDeviceInfo);
  const [userLocations, setUserLocations] = useState([]);

  const getAllLocation = async (userDeviceInfo) => {
    const { locations } = await getAllLocations(userDeviceInfo.token);
    setUserLocations(locations);
  };

  const getLocations = async (userDeviceInfo) => {
    const rawResponse = await fetch(
      "https://backend-alisero-v1.herokuapp.com/api/v1/location/getLocations",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-token": userDeviceInfo.token,
        },
      }
    );

    const response = await rawResponse.json();

    setUserLocations(response.locations);
    // console.log(response.locations);
  };

  useEffect(() => {
    if (userDeviceInfo != null) {
      // getLocations(userDeviceInfo);
      getAllLocation(userDeviceInfo);
    }
  }, []);

  const header = [
    "Address Lines",
    "Feature Name",
    "Admin Area",
    "Sub Admin Area",
    "Locality",
    "Thoroughfare",
    "Country Code",
    "Latitude",
    "Longitude",
    "Current Time",
    "",
    "CreatedAt",
    "UpdatedAt",
    "Id",
  ];
  
  const handleDownloadExcel = () => {
    downloadExcel({
      fileName: "Locations",
      sheet: "Informacion",
      tablePayload: {
        header,
        body: userLocations,
      },
    });
  };

  return (
    <>
      <Grid container spacing={3} alignItems="center">
        <Grid item>
          <Button
            variant="contained"
            color="success"
            endIcon={<Icon fontSize="inherit">send</Icon>}
            onClick={handleDownloadExcel}
          >
            Exportar datos
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="button" color="text" fontWeight="regular">
            Total Registrados: {rows.length}
          </Typography>
        </Grid>
      </Grid>
      <DataTable
        table={{ columns, rows }}
        isSorted={false}
        entriesPerPage={false}
        showTotalEntries={false}
        noEndBorder
      />
    </>
  );
};

export default DataTableLocation;
