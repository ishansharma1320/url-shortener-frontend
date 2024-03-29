import { OutlinedInput, Divider, Box, Card, CardContent, Button, Typography, CardHeader, FormControl, IconButton, InputAdornment, InputLabel, Stack, TextField } from '@mui/material';

import { Visibility, Mail, Apple, Google, Facebook } from '@mui/icons-material';
import { Link } from 'react-router-dom';



export default function AuthForm(props: any) {
  const isSignUp = props.isSignUp;
  return (
    <Stack direction="column" sx={{ padding: "2rem", marginTop: "5rem" }}>
      <Box sx={{ minHeight: 200, textAlign: "center" }}>
        <Typography variant='h3'>👋 Welcome to URL Shortener</Typography>
        <Typography variant='h5'>Please enter your details</Typography>
      </Box>
      <Box sx={{ margin: "5rem" }}>
        <Card sx={{ borderRadius: "4rem", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <CardHeader title={isSignUp ? "Sign Up" : "Login"} sx={{ textAlign: "center", marginTop: "1em" }}></CardHeader>
          <CardContent>
            <Stack direction="column" spacing={2} sx={{ margin: "3rem 10rem" }}>
              <FormControl variant="outlined">
                <TextField
                  id="outlined-adornment-email"
                  type="text"

                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px"
                    }
                  }}
                  InputProps={{
                    endAdornment:
                      <InputAdornment position="end" >
                        <Mail />
                      </InputAdornment>
                  }}

                  label="Email"
                />
              </FormControl>
              <FormControl variant="outlined">
                <TextField
                  id="outlined-adornment-password"
                  type="text"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px"
                    }
                  }}
                  InputProps={{
                    endAdornment:
                      <InputAdornment position="end" >
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <Visibility />
                        </IconButton>
                      </InputAdornment>
                  }}
                  label="Password"
                />
              </FormControl>
              {isSignUp && <FormControl variant="outlined" >
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px"
                    }
                  }}
                  id="outlined-adornment-confirmpassword"
                  type="text"
                  InputProps={{
                    endAdornment:
                      <InputAdornment position="end" >
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <Visibility />
                        </IconButton>
                      </InputAdornment>
                  }}
                  label="Confirm Password"
                />
              </FormControl>}
              <Button variant="contained" sx={{ borderRadius: "25px", padding: "1em", marginTop: "2em" }}>Login</Button>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px', marginBottom: '16px', color: "#e7e7ea" }}>
                <Divider style={{ flex: '1' }} />
                <Typography variant="body2" style={{ margin: '0 8px', color: "#c5c5c7" }}>
                  Or
                </Typography>
                <Divider style={{ flex: '1' }} />
              </div>
              <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <IconButton sx={{ border: "1px solid #e7e7ea", width: "fit-content" }}> <Apple /></IconButton>
                <IconButton sx={{ border: "1px solid #e7e7ea", width: "fit-content" }}> <Google /></IconButton>
                <IconButton sx={{ border: "1px solid #e7e7ea", width: "fit-content" }}>  <Facebook /> </IconButton>
              </Stack>
              <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                {isSignUp ?
                  <>
                    <p> Already have an account</p>
                    <Link to="/auth/login">Login</Link>
                  </> : <>
                    <p>You dont have an account yet</p>
                    <Link to="/auth/signup">Sign Up</Link>
                  </>
                }
              </Stack>
            </Stack>

          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
}