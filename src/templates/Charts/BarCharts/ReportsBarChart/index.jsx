import { useMemo } from "react";

import PropTypes from "prop-types";

import { Bar } from "react-chartjs-2";

import { Card, Divider, Icon } from "@mui/material";
import Boxes from '../../../../components/boxes';
import Typography from '../../../../components/typography';
import configs from "./configs";

function ReportsBarChart({ color, title, description, date, chart }) {
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
              <Bar data={data} options={options} />
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
          <Divider />
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

ReportsBarChart.defaultProps = {
  color: "dark",
  description: "",
};

ReportsBarChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default ReportsBarChart;
