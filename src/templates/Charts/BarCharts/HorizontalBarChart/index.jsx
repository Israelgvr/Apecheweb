import PropTypes from "prop-types";

import { Bar } from "react-chartjs-2";

import Boxes from '../../../../components/boxes';
import Typography from '../../../../components/typography';

import colors from '../../../../assets/theme/base/colors';
import { useMemo } from "react";
import configs from "./configs";
import { Card, Icon } from "@mui/material";

export const HorizontalBarChart = ({ icon, title, description, height, chart }) => {
  const chartDatasets = chart.datasets
    ? chart.datasets.map((dataset) => ({
        ...dataset,
        weight: 5,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: colors[dataset.color]
          ? colors[dataset.color || "dark"].main
          : colors.dark.main,
        fill: false,
        maxBarThickness: 35,
      }))
    : [];

  const { data, options } = configs(chart.labels || [], chartDatasets);

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
      { useMemo(
        () => (
          <Boxes height={height}>
            <Bar data={data} options={options} />
          </Boxes>
        ),
        [chart, height]
      )}
    </Boxes>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

HorizontalBarChart.defaultProps = {
  icon: { color: "info", component: "" },
  title: "",
  description: "",
  height: "19.125rem",
};

HorizontalBarChart.propTypes = {
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
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default HorizontalBarChart;
