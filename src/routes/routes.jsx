import { Admin } from "../pages/admin";
import { Dashboard } from "../pages/dashboard";
import { Icon } from "@mui/material";
import { Maps } from "../pages/maps";
import { Notifications } from "../pages/notifications";
import { Profile } from '../pages/profile';
import { Reports } from '../pages/reports';
import { SignIn } from '../pages/authentication/sign-in';
import { SignUp } from '../pages/authentication/sign-up';
import ProfileReport from "../pages/profile-report";
import Imagen from "../pages/imagen/Imagenes"
import Video from "../pages/Videos/Video"
import Locations from "../pages/locations/Locations"
import Dispositivo from "../pages/dispositivo/Dispositivos"
import InfoDis from "../pages/dispositivo/InfoDispo"
import Poligonos from "../pages/locations/Poligonos"
import Anormal from "../pages/locations/Anormalidad"
import Dash from "../pages/Gerenciales/Dash"
import Line from "../pages/Gerenciales/Line"
import Pie from "../pages/Gerenciales/pie"
import DatosAn from "../pages/locations/DatosAn"
import mapaAnormal from "../pages/locations/MapaAnormalidad"

//import Grafos from "../pages/grafos";

export const routes = [
  { // Admin
    type: "collapse",
    name: "Admin",
    key: "admin",
    icon: <Icon fontSize="small">summarize</Icon>,
    route: "/admin",
    component: <Admin/>,
  },
  { // Dashboard
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  { // Maps
    type: "none",
    name: "Mapas",
    key: "maps",
    icon: <Icon fontSize="small">map</Icon>,
    route: "/maps",
    component: <Maps />,
  },
  { // Notifications
    type: "none",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },  
  { // Sign In
    type: "none",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  { // Sign Up
    type: "none",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  { // Profiles
    type: "none",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/:id/:model/:name/profile",
    component: <Profile/>,
  },
  { // Dispositivos
    type: "collapse",
    name: "Dispositivos",
    key: "dispositivo",
    icon: <Icon fontSize="small">summarize</Icon>,
    route: "/dispositivo",
    component: <Dispositivo/>,
  },
  { // MULTIMEDIA
    type: "collapse",
    
    key: "imagen",
  
    route: "/imagenes/:userId",
    component: <Imagen/>,
  },
  { // VIDEO
    type: "collapse",
    
    key: "video",
    
    route: "/videos/:userId",
    component: <Video/>,
  },
  { // LOCALIZACION
    type: "collapse",
   
    key: "location",
    
    route: "/Locations/:userId",
    component: <Locations/>,
  },
  { // LOCALIZACION
    type: "collapse",
    
    key: "gerenciales",
    
    route: "/gerenciales/:userId",
    component: <Dash/>,
  },
  { // Reports
    type: "collapse",
    
    key: "reports",
    
    route: "/reports",
    component: <Reports />,
  },
  { // Profile Report
    type: "none",
    name: "ProfileReport",
    key: "profileReport",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/:id/:model/:name/profile-report",
    component: <ProfileReport/>,
  },
  { // InfoDis
    type: "none",
   
    key: "infoDis",

    route: "/InfoDisp/:userId",
    component: <InfoDis/>,
  },
  
  { // POLIGONOS
    type: "none",
    key: "Poligon",
    route: "/Poligons/:userId",
    component: <Poligonos/>,
  }
  ,
  
  { // Line
    type: "none",
    key: "line",
    route: "/line",
    component: <Line/>,
  },
  
  { // Pie
    type: "none",
    key: "Pie",
    route: "/pie",
    component: <Pie/>,
  },
  { // POLIGONOS
    type: "none",
    key: "Anormla",
    route: "/Anormalidades/:userId",
    component: <Anormal/>,
  },
  { // POLIGONOS
    type: "none",
    key: "Datosan",
    route: "/Datosanormal/:userId",
    component: <DatosAn/>,
  },
  { // mapaAnormal
    type: "none",
    key: "mapaAnormal",
    route: "/mapaAnormal/:userId",
    component: <mapaAnormal/>,
  },
];
