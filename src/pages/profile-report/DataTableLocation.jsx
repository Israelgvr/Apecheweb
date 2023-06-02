import DataTable from "../../templates/Tables/DataTable";
import locationsTableData from "./data/locationsTableData";
import Typography from "../../components/typography";

const DataTableLocation = ({ userDeviceInfo }) => {
  const { columns, rows } = locationsTableData(userDeviceInfo);

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

export default DataTableLocation;
