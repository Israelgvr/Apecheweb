import { Breadcrumbs, Icon } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Boxes from '../../components/boxes';
import Typography from '../../components/typography';

export const Breadcrumb = ({ icon, title, route, light }) => {
    const routes = route.slice(0, -1);
    return(
        <Boxes mr={{ xs: 0, xl: 8 }}>
            <Breadcrumbs
                sx={{
                    "& .MuiBreadcrumbs-separator": {
                    color: ({ palette: { white, grey } }) => (light ? white.main : grey[600]),
                    },
                }}
            >
                <Link to="/">
                    <Typography 
                        component="span"
                        variant="body2"
                        color={light ? "white" : "dark"}
                        opacity={light ? 0.8 : 0.5}
                        sx={{ lineHeight: 0 }}
                    >
                        <Icon>
                            { icon }
                        </Icon>
                    </Typography>
                </Link>
                { routes.map((routeLink) => {
                    <Link to={`/${ routeLink }`} key={ routeLink }>
                        <Typography
                            component="span"
                            variant="button"
                            fontWeight="regular"
                            textTransform="capitalize"
                            color={light ? "white" : "dark"}
                            opacity={light ? 0.8 : 0.5}
                            sx={{ lineHeight: 0 }}
                        >
                            { routeLink }
                        </Typography>
                    </Link>
                })}
            </Breadcrumbs>
            <Typography
                fontWeight="bold"
                textTransform="capitalize"
                variant="h6"
                color={light ? "white" : "dark"}
                noWrap
            >
                { title.replace("-", " ") }
            </Typography>
        </Boxes>
    );
};

Breadcrumb.defaultProps = {
    light: false,
};

Breadcrumb.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    route: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    light: PropTypes.bool,
};
  

export default Breadcrumb;