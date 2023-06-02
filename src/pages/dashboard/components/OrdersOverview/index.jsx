import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import Boxes from "../../../../components/boxes";
import TimelineItem from "../../../../templates/Timeline/TimelineItem";
import Typography from "../../../../components/typography";

export const OrdersOverview = () => {
  return (
    <Card sx={{ height: "100%" }}>
      <Boxes pt={3} px={3}>
        <Typography variant="h6" fontWeight="medium">
          Reports
        </Typography>
      </Boxes>
      <Boxes p={2}>
        <Link to="/reports">
          <TimelineItem
            color="success"
            icon="phone"
            title="View calls report"
            dateTime="22 DEC 7:20 PM"
          />
        </Link>
        <Link to="/reports">
          <TimelineItem
            color="error"
            icon="groups"
            title="View profiles report"
            dateTime="22 DEC 7:20 PM"
          />
        </Link>
        <Link to="/reports">
          <TimelineItem
            color="info"
            icon="location_on"
            title="View locations report"
            dateTime="22 DEC 7:20 PM"
          />
        </Link>
      </Boxes>
    </Card>
  );
};

export default OrdersOverview;
