
import PropTypes from "prop-types";

import Boxes from '../../../components/boxes';
import Typography from '../../../components/typography';

import { useMaterialUIController } from '../../../context';

import { TimelineProvider } from '../context';
import { Card } from "@mui/material";

export const TimelineList = ({ title, dark, children }) => {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <TimelineProvider value={dark}>
      <Card>
        <Boxes
          bgColor={dark ? "dark" : "white"}
          variant="gradient"
          borderRadius="xl"
          sx={{ background: ({ palette: { background } }) => darkMode && background.card }}
        >
          <Boxes pt={3} px={3}>
            <Typography variant="h6" fontWeight="medium" color={dark ? "white" : "dark"}>
              {title}
            </Typography>
          </Boxes>
          <Boxes p={2}>{children}</Boxes>
        </Boxes>
      </Card>
    </TimelineProvider>
  );
}

TimelineList.defaultProps = {
  dark: false,
};

TimelineList.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TimelineList;
