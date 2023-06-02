
// react-routers components
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import Boxes from '../../components/boxes';
import Typography from '../../components/typography';
import Avatars from '../../components/avatars';
import Buttons from '../../components/buttons';
import { Card } from "@mui/material";

export const ProfilesList = ({ title, profiles, shadow }) => {
  const renderProfiles = profiles.map(({ image, name, description, action }) => (
    <Boxes key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <Boxes mr={2}>
        <Avatars src={image} alt="something here" shadow="md" />
      </Boxes>
      <Boxes display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <Typography variant="button" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="caption" color="text">
          {description}
        </Typography>
      </Boxes>
      <Boxes ml="auto">
        {action.type === "internal" ? (
          <Buttons component={Link} to={action.route} variant="text" color="info">
            {action.label}
          </Buttons>
        ) : (
          <Buttons
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </Buttons>
        )}
      </Boxes>
    </Boxes>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <Boxes pt={2} px={2}>
        <Typography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </Typography>
      </Boxes>
      <Boxes p={2}>
        <Boxes component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </Boxes>
      </Boxes>
    </Card>
  );
}

ProfilesList.defaultProps = {
  shadow: true,
};

ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default ProfilesList;
