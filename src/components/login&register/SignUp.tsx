import { useMemo, useState } from "react";
import {Card,CardContent,TextField,Typography,Button,InputAdornment,IconButton} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import {ContactEmergencyRounded,ContactMailRounded,RemoveRedEyeRounded,FiberManualRecordRounded,VisibilityOffRounded,KeyRounded} from '@mui/icons-material';
import bgLoginLg from "../../assets/images/xx.jpg";
import bgLoginSm from "../../assets/images/yy.jpg";
import { styled } from '@mui/material/styles';


const SignUp = () => {
  const [showPass,setShowPass] = useState<boolean>(false);
  
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
      lg:`url(${bgLoginLg})`
    },backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:0}}>
      <Grid container sx={{height:"100vh",alignContent:"center",p:5}}>
        <Grid xs={12} sm={12} md={5}>
          <CardContent>
            <Typography variant="body2" color="white" fontSize="small">START FOR FREE</Typography>
            <Typography variant="h2" display="block" color="white">Create new account<Typography variant="h3" color="primary" display="inline"><FiberManualRecordRounded fontSize="small"/></Typography></Typography>
            <Typography variant="subtitle2" display="inline" color="white">Already A Member? <Typography color="primary" display="inline">Log in</Typography></Typography>
          </CardContent>
          <form autoComplete="off">
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
                    inputProps={{
                      color:"white"
                    }}
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
                      label="Conform password"
                      InputProps={{
                        endAdornment:(
                          <InputAdornment position="end">
                            <KeyRounded sx={{color:"#A0AAB4"}}/>
                          </InputAdornment>
                        )
                      }}
                    />
                </Grid>
                <Grid xs={12}>
                  <Button variant="contained" fullWidth>Create Account</Button>
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Grid>
      </Grid>
    </Card>
  )
}

export default SignUp;