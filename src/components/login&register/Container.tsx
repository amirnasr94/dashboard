import { Card } from "@mui/material";
import { SignUp } from "..";
import bgLoginLg from "../../assets/images/bg-lg.jpg";
import bgLoginSm from "../../assets/images/bg-sm.jpg";
import Grid from '@mui/material/Unstable_Grid2';

const Container = () => {
  return (
    <Card sx={{height:"100vh",backgroundImage:{
        xs:`url(${bgLoginSm})`,
        md:`url(${bgLoginLg})`
      },backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:0}}>
        <Grid container sx={{height:"100vh",alignContent:"center",p:5}}>
          <Grid xs={12} sm={12} md={5} sx={{backgroundColor:{
            xs:"#3f4143a1",
            md:"#3a3e187a"
          },py:{
            xs:2,
            sm:2,
            md:3,
            lg:4,
            xl:13
          },borderRadius:5}}>
            <SignUp/>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Container