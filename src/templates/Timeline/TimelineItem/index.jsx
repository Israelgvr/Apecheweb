
import { Icon } from "@mui/material";
import PropTypes from "prop-types";

import Boxes from '../../../components/boxes';
import Typography from '../../../components/typography';
import { useTimeline } from '../context';

import timelineItem from './styles';

export const TimelineItem = ({ color, icon, title, dateTime, description, lastItem }) => {
  const isDark = useTimeline();

  return (
    <Boxes position="relative" mb={3} sx={(theme) => timelineItem(theme, { lastItem, isDark })}>
      <Boxes
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={color}
        color="white"
        width="2rem"
        height="2rem"
        borderRadius="50%"
        position="absolute"
        top="8%"
        left="2px"
        zIndex={2}
        sx={{ fontSize: ({ typography: { size } }) => size.sm }}
      >
        <Icon fontSize="inherit">{icon}</Icon>
      </Boxes>
      <Boxes ml={5.75} pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth="30rem">
        <Typography variant="button" fontWeight="medium" color={isDark ? "white" : "dark"}>
          {title}
        </Typography>
        <Boxes mt={0.5}>
          <Typography variant="caption" color={isDark ? "secondary" : "text"}>
            {dateTime}
          </Typography>
        </Boxes>
        <Boxes mt={2} mb={1.5}>
          {description ? (
            <Typography variant="button" color={isDark ? "white" : "dark"}>
              {description}
            </Typography>
          ) : null}
        </Boxes>
      </Boxes>
    </Boxes>
  );
}

TimelineItem.defaultProps = {
  color: "info",
  lastItem: false,
  description: "",
};

TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lastItem: PropTypes.bool,
};

export default TimelineItem;
