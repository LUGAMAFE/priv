// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Component Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Content from 'src/pages/dashboards/payout-requests/content'

const PayoutRequests = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6} justifyContent={'center'}>
        <Grid item xs={12} md={12}>
          <Content />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default PayoutRequests
