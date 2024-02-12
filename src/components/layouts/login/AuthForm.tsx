import { OutlinedInput, Divider, Box, Card, CardContent, Button, Typography, CardHeader, FormControl, IconButton, InputAdornment, InputLabel, Stack } from '@mui/material';

import { Visibility, Mail, Apple, Google, Facebook } from '@mui/icons-material';



export default function AuthForm(props: any) {
  const isSignUp = props.isSignUp;
  return (
    <Stack direction="column" sx={{ padding: "2rem", marginTop: "5rem" }}>
      <Box sx={{ minHeight: 200, textAlign: "center" }}>
        <Typography variant='h3'>👋 Welcome to URL Shortener</Typography>
        <Typography variant='h5'>Please enter your details</Typography>
      </Box>
      <Box sx={{ margin: "5rem" }}>
        <Card >
          <CardHeader title={isSignUp ? "Sign Up" : "Login"} sx={{ textAlign: "center", marginTop: "1em" }}></CardHeader>
          <CardContent>
            <Stack direction="column" spacing={2} sx={{ margin: "3rem 10rem" }}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email" sx={{ marginLeft: "12px" }}>Email</InputLabel>
                <OutlinedInput classes={{
                  root: '&.MuiInputBase-root.MuiOutlinedInput-root',
                }}
                  sx={{
                    '&.MuiInputBase-root.MuiOutlinedInput-root': {
                      borderRadius: '50px',
                    },
                  }}
                  id="outlined-adornment-email"
                  type="text"
                  endAdornment={
                    <InputAdornment position="end" sx={{ marginRight: "12px" }}>
                      <Mail />
                    </InputAdornment>
                  }
                  label="Email"
                />
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" sx={{ marginLeft: "12px" }}>Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="text"
                  classes={{
                    root: '&.MuiInputBase-root.MuiOutlinedInput-root',
                  }}
                  sx={{
                    '&.MuiInputBase-root.MuiOutlinedInput-root': {
                      borderRadius: '50px',
                    },
                  }}
                  endAdornment={
                    <InputAdornment position="end" sx={{ marginRight: "12px" }}>
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <Visibility />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {isSignUp && <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-confirmpassword" sx={{ marginLeft: "12px" }}>Confirm Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirmpassword"
                  type="text"
                  classes={{
                    root: '&.MuiInputBase-root.MuiOutlinedInput-root',
                  }}
                  sx={{
                    '&.MuiInputBase-root.MuiOutlinedInput-root': {
                      borderRadius: '50px',
                    },
                  }}
                  endAdornment={
                    <InputAdornment position="end" sx={{ marginRight: "12px" }}>
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <Visibility />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>}
              <Button variant="contained" sx={{ borderRadius: "50px", padding: "1em", marginTop: "2em" }}>Login</Button>
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
            </Stack>

          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
}