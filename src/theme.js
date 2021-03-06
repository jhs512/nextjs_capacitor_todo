import { createTheme } from "@mui/material/styles";
import { koKR } from "@mui/material/locale";
import "moment/locale/ko";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ["GmarketSansMedium"],
  },
  palette: {
    primary: {
      main: "#ff8686",
      contrastText: "#ffffff",
    },
  },
  koKR,
});

export default theme;
