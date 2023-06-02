
import PropTypes from "prop-types";
import { Card, Divider, Icon } from "@mui/material";
import Boxes from '../../../components/boxes';
import Typography from '../../../components/typography';

export const StatisticsCard = ({ color, title, count, percentage, icon }) => {
  return (
    <Card>
      <Boxes display="flex" justifyContent="space-between" pt={1} px={2}>
        <Boxes
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </Boxes>
        <Boxes textAlign="right" lineHeight={1.25}>
          <Typography variant="button" fontWeight="light" color="text">
            {title}
          </Typography>
          <Typography variant="h4">{count}</Typography>
        </Boxes>
      </Boxes>
      <Divider/>
      <Boxes pb={2} px={2}>
        <Typography component="p" variant="button" color="text" display="flex">
          <Typography
            component="span"
            variant="button"
            fontWeight="bold"
            color={percentage.color}
          >
            {percentage.amount}
          </Typography>
          &nbsp;{percentage.label}
        </Typography>
      </Boxes>
    </Card>
  );
};


// Setting default values for the props of StatisticsCard
StatisticsCard.defaultProps = {
    color: "info",
    percentage: {
        color: "success",
        text: "",
        label: "",
    },
};
  
// Typechecking props for the StatisticsCard
StatisticsCard.propTypes = {
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
title: PropTypes.string.isRequired,
count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
percentage: PropTypes.shape({
    color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
}),
icon: PropTypes.node.isRequired,
};

export default StatisticsCard;