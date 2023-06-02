import { useRef, useEffect, useState, useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";

import Boxes from '../../../components/boxes';
import Typography from '../../../components/typography';

// Material Dashboard 2 React helper functions
import gradientChartLine from "../../../assets/theme/functions/gradientChartLine";

// MixedChart configurations
import configs from './configs';

// Material Dashboard 2 React base styles
import colors from '../../../assets/theme/base/colors';
import { Card, Icon } from "@mui/material";

export const MixedChart = ({ icon, title, description, height, chart }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({});
  const { data, options } = chartData;

  useEffect(() => {
    const chartDatasets = chart.datasets
      ? chart.datasets.map((dataset) => {
          let finalConfigs;

          const defaultLine = {
            ...dataset,
            type: "line",
            tension: 0,
            borderWidth: 4,
            pointRadius: 2,
            pointBackgroundColor: colors[dataset.color]
              ? colors[dataset.color || "dark"].main
              : colors.dark.main,
            borderColor: colors[dataset.color]
              ? colors[dataset.color || "dark"].main
              : colors.dark.main,
            maxBarThickness: 6,
          };

          const gradientLine = {
            ...dataset,
            type: "line",
            tension: 0,
            pointRadius: 0,
            borderWidth: 4,
            borderColor: colors[dataset.color]
              ? colors[dataset.color || "dark"].main
              : colors.dark.main,
            fill: true,
            maxBarThickness: 6,
            backgroundColor: gradientChartLine(
              chartRef.current.children[0],
              colors[dataset.color] ? colors[dataset.color || "dark"].main : colors.dark.main
            ),
          };

          const bar = {
            ...dataset,
            type: "bar",
            weight: 5,
            borderWidth: 0,
            borderRadius: 4,
            backgroundColor: colors[dataset.color]
              ? colors[dataset.color || "dark"].main
              : colors.dark.main,
            fill: false,
            maxBarThickness: 35,
          };

          const thinBar = {
            ...dataset,
            type: "bar",
            weight: 5,
            borderWidth: 0,
            borderRadius: 4,
            backgroundColor: colors[dataset.color]
              ? colors[dataset.color || "dark"].main
              : colors.dark.main,
            fill: false,
            maxBarThickness: 10,
          };

          if (dataset.chartType === "default-line") {
            finalConfigs = defaultLine;
          } else if (dataset.chartType === "gradient-line") {
            finalConfigs = gradientLine;
          } else if (dataset.chartType === "thin-bar") {
            finalConfigs = thinBar;
          } else {
            finalConfigs = bar;
          }

          return { ...finalConfigs };
        })
      : [];

    setChartData(configs(chart.labels || [], chartDatasets));
  }, [chart]);

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
          <Boxes ref={chartRef} sx={{ height }}>
            <Line data={data} options={options} />
          </Boxes>
        ),
        [chartData, height]
      )}
    </Boxes>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of MixedChart
MixedChart.defaultProps = {
  icon: { color: "info", component: "" },
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the MixedChart
MixedChart.propTypes = {
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

export default MixedChart;
