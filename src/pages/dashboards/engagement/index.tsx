// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Content from 'src/pages/dashboards/engagement/content'

const Engagement = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6} justifyContent={'center'}>
        <Grid item xs={12} md={12}>
          <Typography variant='h3' sx={{ fontWeight: 400, fontSize: '2.5rem !important' }}>
            Compromiso
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Content />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Engagement
