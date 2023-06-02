import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
import { useMaterialUIController } from "../../../../context";
import Boxes from "../../../../components/boxes";
import Buttons from "../../../../components/buttons";
import PropTypes from "prop-types";
import Typography from "../../../../components/typography";

export const CardInformation = ({
  id,
  deviceId,
  nameUser,
  brand,
  model,
  noGutter,
}) => {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Boxes
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <Boxes width="100%" display="flex" flexDirection="column">
        <Boxes
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <Typography
            variant="button"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {nameUser}
          </Typography>

          <Boxes
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
          >
            <Link to={`/${id}/${model}/${nameUser}/profile`}>
              <Buttons variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>launch</Icon> Ver Perfil
              </Buttons>
            </Link>
          </Boxes>
        </Boxes>
        <Boxes mb={1} lineHeight={0}>
          <Typography variant="caption" color="text">
            Device Id:&nbsp;&nbsp;&nbsp;
            <Typography
              variant="caption"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {deviceId}
            </Typography>
          </Typography>
        </Boxes>
        <Boxes mb={1} lineHeight={0}>
          <Typography variant="caption" color="text">
            Brand:&nbsp;&nbsp;&nbsp;
            <Typography variant="caption" fontWeight="medium">
              {brand}
            </Typography>
          </Typography>
        </Boxes>
        <Boxes mb={1} lineHeight={0}>
          <Typography variant="caption" color="text">
            Model:&nbsp;&nbsp;&nbsp;
            <Typography variant="caption" fontWeight="medium">
              {model}
            </Typography>
          </Typography>
        </Boxes>
      </Boxes>
    </Boxes>
  );
};

CardInformation.defaultProps = {
  noGutter: false,
};

CardInformation.propTypes = {
  noGutter: PropTypes.bool,
};

export default CardInformation;
