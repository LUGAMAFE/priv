// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import DialogReferEarn from 'src/views/pages/dialog-examples/DialogReferEarn'
import CardTeamMembers from 'src/views/ui/cards/advanced/CardTeamMembers'

const AnalyticsDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6} justifyContent={'center'}>
        <Grid item xs={12} md={12}>
          <Typography variant='h3' sx={{ fontWeight: 400, pb: 4, fontSize: '2.5rem !important' }}>
            Referidos
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <DialogReferEarn />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardTeamMembers />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
