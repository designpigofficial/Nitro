import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

// A theme with custom primary and secondary color.
// It's optional.

const theme = createMuiTheme({
  drawerWidth: 240,
  palette: {
    primary: {
      main: "#070600",
      text: "#f7f7ff",
    },
    secondary: {
      light: "#74fbd7",
      main: "#06d6a0",
      dark: "#023c2c",
    },
    typography: {
      useNextVariants: true,
    },
  },
} as any);
export type Theme = typeof theme;
export default theme;


