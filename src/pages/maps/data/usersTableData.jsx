import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import avatar from "../../../assets/images/avatar.png";
import Avatars from "../../../components/avatars";
import Badge from "../../../components/badge";
import Boxes from "../../../components/boxes";
import Typography from "../../../components/typography";
import { getAllUserDevice } from "../../../api/userDevice.service";

export default function data() {
  const [userDevices, setUserDevices] = useState([]);
  const currentDate = new Date()
  const getAllUserDevices = async () => {
    const { userDeviceInfo } = await getAllUserDevice();
    setUserDevices(userDeviceInfo);
  };

  useEffect(() => {
    getAllUserDevices();
  }, []);

  const User = ({ image, name, id }) => (
    <Boxes display="flex" alignItems="center" lineHeight={1}>
      <Avatars src={image} name={name} size="sm" />
      <Boxes ml={2} lineHeight={1}>
        <Typography display="block" variant="button" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="caption">{id}</Typography>
      </Boxes>
    </Boxes>
  );

  const rowUserDevice = (nameUser, model, id) => {
    return {
      user: <User image={avatar} name={nameUser} id={model} />,
      status: (
        <Boxes ml={-1}>
          <Badge
            badgeContent="loading ..." //offline online
            color="warning" //error  success
            variant="gradient"
            size="sm"
          />
        </Boxes>
      ),
      date: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {currentDate.toDateString()}
        </Typography>
      ),
      ubication: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          -17.38415, -66.156481
        </Typography>
      ),
      action: (
        <Link to={`/${id}/${model}/${nameUser}/profile`}>
          <Typography component="a" color="text">
            <Icon>launch</Icon>
          </Typography>
        </Link>
      ),
    };
  };

  const rowComplet = () => {
    const rowUser = [];
    userDevices.map(({ nameUser, model, id }) => {
      rowUser.push(rowUserDevice(nameUser, model, id));
    });

    return rowUser;
  };

  return {
    columns: [
      { Header: "user", accessor: "user", width: "40%", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "date", accessor: "date", align: "center" },
      { Header: "ubication", accessor: "ubication", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: rowComplet(),
    // rows: []
  };
}
