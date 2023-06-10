import {FC} from "react";
import { ThemeProvider } from "@mui/material/styles"
import { Outlet } from "react-router-dom"
import { darkTheme, lightTheme } from "./theme/theme"
import Grid from '@mui/material/Unstable_Grid2';

interface Props{
    mode: boolean
}

const MainLayout:FC<Props> = ({mode}) => {
    const theme = mode ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
        <Grid container sx={{height:"100vh"}}>
            <Outlet/>
        </Grid>
    </ThemeProvider>
  )
}

export default MainLayout