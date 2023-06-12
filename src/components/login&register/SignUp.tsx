import { useMemo, useState } from "react";
import { styled } from '@mui/material/styles';
import { useFormik } from "formik";
import { Sign_Up_Person } from "../../constant/model";
import { signUpSchema } from "../../validation/validation";
import {Card,CardContent,TextField,Typography,Button,InputAdornment,IconButton, CardActions} from "@mui/material";
import {ContactEmergencyRounded,ContactMailRounded,RemoveRedEyeRounded,FiberManualRecordRounded,VisibilityOffRounded,CheckRounded} from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2';
import bgLoginLg from "../../assets/images/xx.jpg";
import bgLoginSm from "../../assets/images/yy.jpg";


const SignUp = () => {
  const [showPass,setShowPass] = useState<boolean>(false);


  const initialInputNames:Sign_Up_Person = {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPass:""
  };
  const formik = useFormik({
    initialValues:initialInputNames,
    onSubmit: (values:Sign_Up_Person) => {
      console.log("values: ",values);
      
    },
    validationSchema:signUpSchema
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
          <CardContent sx={{mb:3}}>
            <Typography variant="body2" color="white" fontSize="small">START FOR FREE</Typography>
            <Typography sx={{fontSize:{
              xs:"1.75rem",
              md:"2.75rem",
              xl:"3.75rem"
            }}} display="block" color="white">Create new account<Typography variant="h3" color="primary" display="inline"><FiberManualRecordRounded fontSize="small"/></Typography></Typography>
            <Typography variant="subtitle2" display="inline" color="white">Already A Member? <Typography color="primary" display="inline">Log in</Typography></Typography>
          </CardContent>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                  <CssTextField
                    fullWidth
                    type="text"
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    color="primary"
                    name="firstname"
                    helperText={formik.touched.firstname ? formik.errors.firstname : null}
                    error={Boolean(formik.touched.firstname && formik.errors.firstname)}
                    value={formik.values?.firstname}
                    onChange={formik.handleChange}
                    label="first name"
                    InputProps={{
                      endAdornment:(
                        <InputAdornment position="end">
                          <ContactEmergencyRounded sx={{color:"#A0AAB4"}}/>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <CssTextField
                    fullWidth
                    type="text"
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    color="primary"
                    name="lastname"
                    helperText={formik.touched.lastname ? formik.errors.firstname : null}
                    error={Boolean(formik.touched.lastname && formik.errors.lastname)}
                    value={formik.values?.lastname}
                    onChange={formik.handleChange}
                    label="last name"
                    InputProps={{
                      endAdornment:(
                        <InputAdornment position="end">
                          <ContactEmergencyRounded sx={{color:"#A0AAB4"}}/>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid xs={12}>
                  <CssTextField
                    fullWidth
                    type="email"
                    size="small"
                    variant="outlined"
                    color="primary"
                    name="email"
                    helperText={formik.touched.email ? formik.errors.email : null}
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    value={formik.values?.email}
                    onChange={formik.handleChange}
                    label="Email"
                    InputProps={{
                      endAdornment:(
                        <InputAdornment position="end">
                          <ContactMailRounded sx={{color:"#A0AAB4"}}/>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <CssTextField
                      fullWidth
                      type= {showPass ? "text" : "password"}
                      size="small"
                      variant="outlined"
                      color="primary"
                      name="password"
                      helperText={formik.touched.password ? formik.errors.password : null}
                      error={Boolean(formik.touched.password && formik.errors.password)}
                      value={formik.values?.password}
                      onChange={formik.handleChange}
                      label="Password"
                      InputProps={{
                        endAdornment:(
                          <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={() => setShowPass(!showPass)} edge="end">
                              {showPass ? <VisibilityOffRounded sx={{color:"#A0AAB4"}}/> : <RemoveRedEyeRounded sx={{color:"#A0AAB4"}}/>}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                </Grid>
                <Grid xs={12} md={6}>
                  <CssTextField
                      fullWidth
                      type="password"
                      size="small"
                      variant="outlined"
                      color="primary"
                      name="confirmPass"
                      helperText={formik.touched.confirmPass ? formik.errors.confirmPass : null}
                      error={Boolean(formik.touched.confirmPass && formik.errors.confirmPass)}
                      value={formik.values?.confirmPass}
                      onChange={formik.handleChange}
                      label="Confirm password"
                      InputProps={{
                        endAdornment:(
                          <InputAdornment position="end">
                            <CheckRounded sx={{color:"#A0AAB4"}}/>
                          </InputAdornment>
                        )
                      }}
                    />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button type="submit" variant="contained" sx={{mt:2}} fullWidth>Create Account</Button>
            </CardActions>
          </form>
        </Grid>
      </Grid>
    </Card>
  )
}

export default SignUp;