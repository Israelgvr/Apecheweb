import { Icon, styled } from '@mui/material';

export const SnackbarRoot = styled( Icon ) (
    ({ theme, ownerState }) => {
        const { palette, functions, typography } = theme;
        const { color, bgWhite } = ownerState;

        const { white, transparent, gradients } = palette;
        const { pxToRem, linearGradient } = functions;
        const { size } = typography;

        let backgroundImageValue;

        if (bgWhite) {
            backgroundImageValue = gradients[color]
                ? linearGradient(gradients[color].main, gradients[color].state)
                : linearGradient(gradients.info.main, gradients.info.state);
        } else if (color === 'light') {
            backgroundImageValue = linearGradient(gradients.dark.main, gradients.dark.state);
        }

        return {
            backgroundImage: backgroundImageValue,
            WebkitTextFillColor: bgWhite || color === 'light' ? transparent.main : white.main,
            WebkitBackgroundClip: 'text',
            marginRight: pxToRem(8),
            fontSize: size.lg,
            transform: `translateY(${pxToRem(-2)})`,
        };
    }
);

export default SnackbarRoot;