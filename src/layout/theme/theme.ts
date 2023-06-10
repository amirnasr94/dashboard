import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    direction:"ltr",
    palette:{
        mode:"light"
    },
    typography:{
        fontFamily:"sans-serif"
    }
});

export const darkTheme = createTheme({
    direction:"ltr",
    palette:{
        mode:"dark"
    },
    typography:{
        fontFamily:"sans-serif"
    }
});