import { useMemo, useState } from "react";
import {CardActions, CardContent,Typography,Button, TextField, InputAdornment,FormGroup,FormControlLabel,Checkbox, IconButton} from "@mui/material";
import {FiberManualRecordRounded,PersonRounded,VisibilityOffRounded,RemoveRedEyeRounded,Google} from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { useFormik } from "formik";
import { Login_Person } from "../../constant/model";
import { loginSchema } from "../../validation/validation";

const Login = () => {
  const [showPass,setShowPass] = useState<boolean>(false)

  const initialLoginData: Login_Person ={
    username:"",
    password:""
  };

  const formik = useFormik({
    initialValues:initialLoginData,
    onSubmit: (values:Login_Person) => {
      console.log(values);
    },
    validationSchema:loginSchema
  });


  const CssTextField = useMemo(() => {
    return (
      styled(TextField)({
        '& label':{
          color:"#A0AAB4"
        },
        '& label.Mui-focused': {
          color: '#A0AAB4',
        },
        '& .MuiInputBase-input':{
          color:"whitesmoke"
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#E0E3E7',
          },
          '&:hover fieldset': {
            borderColor: '#B2BAC2',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
          },
        },
      })
    )
  },[])
  return (
    <>
      <CardContent sx={{mb:3}}>
        <Typography sx={{fontSize:{
          xs:"1.75rem",
          md:"2.75rem",
          xl:"3.75rem"
        }}} display="block" color="white">Welcome back<Typography variant="h3" color="primary" display="inline"><FiberManualRecordRounded fontSize="small"/></Typography></Typography>
        <Typography variant="subtitle2" display="inline" color="whitesmoke">welcome back! Please enter your details.</Typography>
      </CardContent>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <CssTextField
                fullWidth
                type="text"
                size="small"
                id="outlined-basic"
                variant="outlined"
                name="username"
                helperText={formik.touched.username ? formik.errors.username : null}
                error={Boolean(formik.touched.username && formik.errors.username)}
                value={formik.values?.username}
                onChange={formik.handleChange}
                label="Enter your email"
                InputProps={{
                  endAdornment:(
                    <InputAdornment position="end">
                      <PersonRounded sx={{color:"#A0AAB4"}}/>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid xs={12}>
              <CssTextField
                fullWidth
                type={showPass ? "text" : "password"}
                size="small"
                id="outlined-basic"
                variant="outlined"
                name="password"
                label="Password"
                helperText={formik.touched.password ? formik.errors.password : null}
                error={Boolean(formik.touched.password && formik.errors.password)}
                value={formik.values?.password}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment:(
                    <InputAdornment position="end">
                      <IconButton sx={{p:0}} aria-label="toggle password visibility" onClick={() => setShowPass(!showPass)}>
                        {showPass ? <VisibilityOffRounded sx={{color:"#A0AAB4"}}/> : <RemoveRedEyeRounded sx={{color:"#A0AAB4"}}/>}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </form>
      <CardContent>
        <Grid container>
          <Grid xs={6}>
            <FormGroup sx={{color:"whitesmoke",fontSize:"small"}}>
              <FormControlLabel control={<Checkbox sx={{color:"whitesmoke"}} color="default"/>} label="Remember for 30 days!" />
            </FormGroup>
          </Grid>
          <Grid xs={6} sx={{alignSelf:"center"}}>
            <Typography color="primary" fontWeight="600" textAlign="end">Forgot Password</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{px:2,flexDirection:"column",alignItems:"flex-end"}}>
          <Button variant="contained" fullWidth onClick={() => {formik.handleSubmit()}}>sign in</Button>
          <Button variant="outlined" fullWidth startIcon={<Google/>}  sx={{mt:2,color:"whitesmoke"}}>Sign in with Google</Button>
      </CardActions>
    </>
  )
}

export default Login