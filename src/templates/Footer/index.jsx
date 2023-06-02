import PropTypes from "prop-types";

import Boxes from "../../components/boxes";

import typography from "../../assets/theme/base/typography";

export const Footer = ({ company, links }) => {
  const { size } = typography;

  return (
    <Boxes
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <Boxes
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        SISTEMA WEB Y APLICACIÓN MÓVIL PARA MONITOREO DE DISPOSITIVOS ANDROID
        BASADO EN TÉCNICAS DE SEGURIDAD INFORMÁTICA
      </Boxes>
      <Boxes
        component="ul"
        color="text"
        fontSize={size.sm}
        px={1.5}
        sx={({ breakpoints }) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 3,
          mb: 0,
          p: 0,

          [breakpoints.up("lg")]: {
            mt: 0,
          },
        })}
      >
        CASO DE ESTUDIO: DEPARTAMENTO II DEL COMANDO DE EJÉRCITO
      </Boxes>
    </Boxes>
  );
};

Footer.defaultProps = {
  company: { href: "https://www.creative-tim.com/", name: "Creative Tim" },
  links: [
    { href: "https://www.creative-tim.com/", name: "Creative Tim" },
    { href: "https://www.creative-tim.com/presentation", name: "About Us" },
    { href: "https://www.creative-tim.com/blog", name: "Blog" },
    { href: "https://www.creative-tim.com/license", name: "License" },
  ],
};

Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
