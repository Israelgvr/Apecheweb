import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import { FaVideo, FaImage, FaInfoCircle } from 'react-icons/fa';
import { RiMapPin2Line } from 'react-icons/ri';
import { IoMdClipboard } from 'react-icons/io';

import { Avatar , makeStyles} from "@material-ui/core";
import androidAvatar from "./android.png";
import { Link } from "react-router-dom";

function UserDevices() {
  const useStyles = makeStyles((theme) => ({
    avatar: {
      marginRight: theme.spacing(6),
      width: 200, // Aumentar el tamaño del avatar a 80x80
      height: 90,
    },
    CardContent: {
      display: "flex",
      alignItems: "flex-end",
    },
    largeIcon: {
      fontSize: '10rem', // Ajusta el tamaño del icono aquí según tus necesidades
    },
  }));
  const classes = useStyles();
  const [userData, setUserData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://condor.onrender.com/api/userDivice')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error(error));
  }, []);

 

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box  sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {userData.map(user => (
          <Card key={user.userId} variant="outlined">
            <CardContent>
              <Avatar className={classes.avatar} src={androidAvatar} />
              <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                <h3>Fabricate</h3>
                 {user.fabricate}
              </Typography>
              <Typography variant="h5" component="div">
                <h3>Modelo</h3>
                {user.modelo}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <h5>Version Android</h5>
                {user.version}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/videos/${user.userId}`}>
                <Button size="small" style={{backgroundColor: '#2980B9', color: 'white'}}>  <FaVideo className={classes.largeIcon}/> </Button>
              </Link>
              <Link to={`/imagenes/${user.userId}`}>
                <Button size="small" style={{backgroundColor: '#16A085', color: 'white'}}><FaImage className={classes.largeIcon} /></Button>
              </Link>
              <Link to={`/Locations/${user.userId}`}>
                <Button size="small" style={{backgroundColor: '#515A5A ', color: 'white'}}> <RiMapPin2Line  className={classes.largeIcon}/></Button>
              </Link>
              <Link to={`/InfoDisp/${user.userId}`}>
                <Button size="small" style={{backgroundColor: '#515A5A ', color: 'white'}}> <FaInfoCircle  className={classes.largeIcon} /></Button>
              </Link>
              <Link to={`/gerenciales/${user.userId}`}>
                <Button size="small" style={{backgroundColor: '#515A5A ', color: 'white'}}> <IoMdClipboard  className={classes.largeIcon}/></Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    </DashboardLayout>
  );
}

export default  UserDevices;
