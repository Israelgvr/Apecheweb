import { Button, Grid, Icon, Typography } from "@mui/material";
import { downloadExcel } from "react-export-table-to-excel";
import contactsTableData from "./data/contactsTableData";
import DataTable from "../../templates/Tables/DataTable";
import { useEffect, useState } from "react";
import { getAllCallLogs } from "../../api/callLog.service";

const DataTableCallLog = ({ userDeviceInfo }) => {
  const { columns, rows } = contactsTableData(userDeviceInfo);
  const [userCallLogs, setUserCallLogs] = useState([]);

  const getAllCallLog = async (userDeviceInfo) => {
    const { callLogs } = await getAllCallLogs(userDeviceInfo.token);
    setUserCallLogs(callLogs);
  };

  const getCallLog = async (userDeviceInfo) => {
    const rawResponse = await fetch(
      "https://backend-alisero-v1.herokuapp.com/api/v1/callLog/getCallLogs",
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

    setUserCallLogs(response.callLogs);
    // console.log(response.callLogs);
  };

  useEffect(() => {
    if (userDeviceInfo != null) {
      // getCallLog(userDeviceInfo);
      getAllCallLog(userDeviceInfo);
    }
  }, []);

  const header = [
    "Number",
    "NameContact",
    "Duration",
    "Type",
    "TypeRaw",
    "Date",
    "",
    "CreatedAt",
    "UpdatedAt",
    "id",
  ];
  const handleDownloadExcel = () => {
    downloadExcel({
      fileName: "CallLog",
      sheet: "CallLog",
      tablePayload: {
        header,
        body: userCallLogs,
      },
    });
  };

  return (
    <>
      <br />
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

export default DataTableCallLog;
