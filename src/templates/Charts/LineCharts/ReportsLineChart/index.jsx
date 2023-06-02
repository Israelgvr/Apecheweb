
import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";

import Boxes from '../../../../components/boxes';
import Typography from '../../../../components/typography';

// ReportsLineChart configurations
import configs from './configs';
import { Card, Divider, Icon } from "@mui/material";

export const ReportsLineChart = ({ color, title, description, date, chart }) => {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  return (
    <Card sx={{ height: "100%" }}>
      <Boxes padding="1rem">
        {useMemo(
          () => (
            <Boxes
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              <Line data={data} options={options} />
            </Boxes>
          ),
          [chart, color]
        )}
        <Boxes pt={3} pb={1} px={1}>
          <Typography variant="h6" textTransform="capitalize">
            {title}
          </Typography>
          <Typography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </Typography>
          <Divider/>
          <Boxes display="flex" alignItems="center">
            <Typography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </Typography>
            <Typography variant="button" color="text" fontWeight="light">
              {date}
            </Typography>
          </Boxes>
        </Boxes>
      </Boxes>
    </Card>
  );
}

// Setting default values for the props of ReportsLineChart
ReportsLineChart.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the ReportsLineChart
ReportsLineChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default ReportsLineChart;
