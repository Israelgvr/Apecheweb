import { Typography } from "@mui/material";
import contactsTableData from "./data/contactsTableData";
import DataTable from "../../templates/Tables/DataTable";

const DataTableCallLog = ({ userDeviceInfo }) => {
  const { columns, rows } = contactsTableData(userDeviceInfo);

  return (
    <>
      <Typography variant="button" color="text" fontWeight="regular">
        &nbsp;&nbsp;&nbsp;&nbsp;Total Registrados: {rows.length}
      </Typography>
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
