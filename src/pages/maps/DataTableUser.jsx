import { Grid } from "@mui/material";
import DataTable from "../../templates/Tables/DataTable";
import React from "react";
import Typography from "../../components/typography";
import usersTableData from "./data/usersTableData";

const DataTableUser = () => {
  const { columns, rows } = usersTableData();
  return (
    <>
      <Grid container spacing={3} alignItems="center">
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

export default DataTableUser;
