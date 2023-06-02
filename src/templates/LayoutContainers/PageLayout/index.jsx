import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";

import Boxes from '../../../components/boxes';

import { useMaterialUIController, setLayout } from '../../../context';

export const PageLayout = ({ background, children }) => {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <Boxes
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </Boxes>
  );
}

PageLayout.defaultProps = {
  background: "default",
};

PageLayout.propTypes = {
  background: PropTypes.oneOf(["white", "light", "default"]),
  children: PropTypes.node.isRequired,
};

export default PageLayout;
