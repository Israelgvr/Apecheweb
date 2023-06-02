
import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Pie } from "react-chartjs-2";

import Boxes from '../../../components/boxes';
import Typography from '../../../components/typography';
// PieChart configurations
import configs from './configs';
import { Card, Icon } from "@mui/material";

export const PieChart = ({ icon, title, description, height, chart }) => {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const renderChart = (
    <Boxes py={2} pr={2} pl={icon.component ? 1 : 2}>
      {title || description ? (
        <Boxes display="flex" px={description ? 1 : 0} pt={description ? 1 : 0}>
          {icon.component && (
            <Boxes
              width="4rem"
              height="4rem"
              bgColor={icon.color || "info"}
              variant="gradient"
              coloredShadow={icon.color || "info"}
              borderRadius="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mt={-5}
              mr={2}
            >
              <Icon fontSize="medium">{icon.component}</Icon>
            </Boxes>
          )}
          <Boxes mt={icon.component ? -2 : 0}>
            {title && <Typography variant="h6">{title}</Typography>}
            <Boxes mb={2}>
              <Typography component="div" variant="button" color="text">
                {description}
              </Typography>
            </Boxes>
          </Boxes>
        </Boxes>
      ) : null}
      {useMemo(
        () => (
          <Boxes height={height}>
            <Pie data={data} options={options} />
          </Boxes>
        ),
        [chart, height]
      )}
    </Boxes>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of PieChart
PieChart.defaultProps = {
  icon: { color: "info", component: "" },
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the PieChart
PieChart.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]),
    component: PropTypes.node,
  }),
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default PieChart;
