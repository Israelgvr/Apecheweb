import { Avatar } from "@mui/material";
import { getAllCallLogs } from "../../../api/callLog.service";
import { stringAvatar } from "../../../helpers";
import { useEffect, useState } from "react";
import avatar from "../../../assets/images/avatar.png";
import Boxes from "../../../components/boxes";
import Typography from "../../../components/typography";

export default function data(userDeviceInfo) {
  const [userCallLogs, setUserCallLogs] = useState([]);

  const getAllCallLog = async (userDeviceInfo) => {
    const { callLogs } = await getAllCallLogs(userDeviceInfo.token);
    setUserCallLogs(callLogs);
  };

  useEffect(() => {
    if (userDeviceInfo != null) {
      getAllCallLog(userDeviceInfo);
    }
  }, []);

  const Contact = ({ image, name, number }) => (
    <Boxes display="flex" alignItems="center" lineHeight={1}>
      <Avatar {...stringAvatar(name)} />
      <Boxes ml={2} lineHeight={1}>
        <Typography display="block" variant="button" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="caption">{number}</Typography>
      </Boxes>
    </Boxes>
  );

  const rowCallInfo = (
    nameContact,
    number,
    type,
    typeRaw,
    duration,
    date,
    id
  ) => {
    return {
      contact: (
        <Contact
          image={avatar}
          name={nameContact}
          number={number}
          key={id}
          id="nameContact"
        />
      ),
      type: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
          id="type"
        >
          {type}
        </Typography>
      ),
      typeRaw: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
          id="typeRaw"
        >
          {typeRaw}
        </Typography>
      ),
      duration: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
          id="duration"
        >
          {duration}
        </Typography>
      ),
      date: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
          id="date"
        >
          {date}
        </Typography>
      ),
    };
  };

  const rowComplete = () => {
    const rowCall = [];
    userCallLogs.map(
      ({ nameContact, number, type, typeRaw, duration, date, id }) => {
        rowCall.push(
          rowCallInfo(nameContact, number, type, typeRaw, duration, date, id)
        );
      }
    );

    return rowCall;
  };

  return {
    columns: [
      { Header: "contact", accessor: "contact", width: "40%", align: "left" },
      { Header: "type", accessor: "type", align: "center" },
      { Header: "typeRaw", accessor: "typeRaw", align: "center" },
      { Header: "duration", accessor: "duration", align: "center" },
      { Header: "date", accessor: "date", align: "center" },
    ],
    rows: rowComplete(),
    // rows: [],
  };
}
