
import colors from "../../../../assets/theme/base/colors";

const { transparent } = colors;

export const iconButton = {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default iconButton;
