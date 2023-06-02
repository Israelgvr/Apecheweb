
import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";


import Boxes from '../../../../components/boxes';
import Typography from '../../../../components/typography';
import Progress from '../../../../components/progress';

// ProgressLineChart configurations
import configs from './config';
import { Card, Icon } from "@mui/material";

export const ProgressLineChart = ({ color, icon, title, count, progress, height, chart }) => {
  const { data, options } = configs(color, chart.labels || [], title, chart.data || []);

  return (
    <Card>
      <Boxes display="flex" alignItems="center" pt={2} px={2}>
        <Boxes
          width="3rem"
          height="3rem"
          display="grid"
          justifyContent="center"
          alignItems="center"
          borderRadius="md"
          shadow="md"
          color="white"
          bgColor={color}
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </Boxes>
        <Boxes ml={2} lineHeight={1}>
          <Typography
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            color="text"
          >
            {title}
          </Typography>
          {count ? (
            <Typography variant="h5" fontWeight="bold">
              {count}
            </Typography>
          ) : null}
        </Boxes>
        <Boxes width="25%" ml="auto">
          <Typography display="block" variant="caption" fontWeight="medium" color="text">
            {progress}%
          </Typography>
          <Boxes mt={0.25}>
            <Progress variant="gradient" color={color} value={progress} />
          </Boxes>
        </Boxes>
      </Boxes>
      {useMemo(
        () => (
          <Boxes mt={2}>
            <Line data={data} options={options} style={{ height }} />
          </Boxes>
        ),
        [chart, height]
      )}
    </Card>
  );
}

// Setting default values for the props of ProgressLineChart
ProgressLineChart.defaultProps = {
  color: "info",
  count: 0,
  height: "6.25rem",
};

// Typechecking props for the ProgressLineChart
ProgressLineChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  progress: PropTypes.number.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default ProgressLineChart;
