import { useEffect, useState } from "react";
import { getAllAdmin } from "../../../api/admin.service";
import Avatars from "../../../components/avatars";
import Boxes from "../../../components/boxes";
import Typography from "../../../components/typography";

export default function data() {
  const [admin, setAdmin] = useState([]);

  const getAdmin = async () => {
    const response = await getAllAdmin();
    const { adminInfo } = response;
    setAdmin(adminInfo);
  };

  useEffect(() => {
    getAdmin();
  }, []);

  const Contact = ({ image, name, email }) => (
    <Boxes display="flex" alignItems="center" lineHeight={1}>
      <Avatars src={image} name={name} size="sm" />
      <Boxes ml={2} lineHeight={1}>
        <Typography display="block" variant="button" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="caption">{email}</Typography>
      </Boxes>
    </Boxes>
  );

  const rowAdmin = (email, verification, name, nickname, picture, sub) => {
    return {
      email: <Contact image={picture} name={name} email={email} />,
      verification: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {verification.toString()}
        </Typography>
      ),
      name: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {name}
        </Typography>
      ),
      nickname: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {nickname}
        </Typography>
      ),
      sub: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {sub}
        </Typography>
      ),
      picture: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {picture}
        </Typography>
      ),
    };
  };

  const rowComplet = () => {
    const rowAdm = [];
    admin.map(({ email, verification, name, nickname, picture, sub, id }) => {
      rowAdm.push(
        rowAdmin(email, verification, name, nickname, picture, sub, id)
      );
    });
    return rowAdm;
  };

  return {
    columns: [
      { Header: "email", accessor: "email", width: "45%", align: "left" },
      { Header: "verification", accessor: "verification", align: "center" },
      { Header: "name", accessor: "name", align: "center" },
      { Header: "nickname", accessor: "nickname", align: "center" },
      { Header: "picture", accessor: "picture", align: "center" },
    ],
    rows: rowComplet(),
  };
}
