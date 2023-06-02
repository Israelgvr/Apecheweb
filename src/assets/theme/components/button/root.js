import colors from '../../../../assets/theme/base/colors';
import typography from '../../../../assets/theme/base/typography';

import pxToRem from '../../../../assets/theme/functions/pxToRem';
import borders from '../../base/borders';
const { fontWeightBold, size } = typography;
const { borderRadius } = borders;

export const root = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: size.xs,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.lg,
  padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
  lineHeight: 1.4,
  textAlign: "center",
  textTransform: "uppercase",
  userSelect: "none",
  backgroundSize: "150% !important",
  backgroundPositionX: "25% !important",
  transition: "all 150ms ease-in",

  "&:disabled": {
    pointerEvent: "none",
    opacity: 0.65,
  },

  "& .material-icons": {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};

export default root;