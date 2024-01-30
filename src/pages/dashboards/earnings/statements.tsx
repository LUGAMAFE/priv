// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Content from 'src/pages/dashboards/earnings/content'
import CardFinanceSummary from 'src/views/ui/cards/advanced/CardFinanceSummary'

const AnalyticsDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6} justifyContent={'center'}>
        <Grid item xs={12} md={12}>
          <Typography variant='h3' sx={{ fontWeight: 400, pb: 4, fontSize: '2.5rem !important' }}>
            Ganancias
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <CardFinanceSummary />
        </Grid>
        <Grid item xs={12} md={12}>
          <Content />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
