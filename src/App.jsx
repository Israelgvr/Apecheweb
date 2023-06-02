import { CssBaseline, ThemeProvider } from "@mui/material";
import { routes } from "./routes/routes";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useMaterialUIController, setMiniSidenav } from "./context";
import brandWhite from "./assets/images/logo-tower-color.png";
import Sidenav from "./templates/Sidenav";
import SignIn from "./pages/authentication/sign-in";
import SignUp from "./pages/authentication/sign-up";
import theme from "./assets/theme";

export const App = () => {
  const { isAuthenticated } = useAuth0();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, direction, layout, sidenavColor } = controller;

  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isAuthenticated ? (
        <>
          {layout === "dashboard" && (
            <>
              <Sidenav
                color={sidenavColor}
                brand={brandWhite}
                brandName="SISTEMA DE MONITOREO"
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              />
            </>
          )}
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/authentication/sign-in/" element={<SignIn />} />
          <Route path="/authentication/sign-up/" element={<SignUp />} />
          <Route
            path="*"
            element={<Navigate to="/authentication/sign-in/" />}
          />
        </Routes>
      )}
    </ThemeProvider>
  );
};

export default App;
