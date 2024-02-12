import { Box, Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { containerStyle, backgroundImageStyle} from "./styles"

export default function AuthLayout() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      sx={containerStyle}
    >
      <Grid item xs={6}>
       
          <Outlet />

      </Grid>
      <Grid item xs={6}>
        <Box
          sx={backgroundImageStyle}
        >
        </Box>

      </Grid>

    </Grid>

  )
}
