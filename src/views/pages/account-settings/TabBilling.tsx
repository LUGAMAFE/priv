// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Types
import { PricingPlanType } from 'src/@core/components/plan-details/types'

// ** Demo Components
import BillingAddressCard from 'src/views/pages/account-settings/billing/BillingAddressCard'
import PaymentMethodCard from 'src/views/pages/account-settings/billing/PaymentMethodCard'

const TabBilling = ({ apiPricingPlanData }: { apiPricingPlanData: PricingPlanType[] }) => {
  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12}>
        <CurrentPlanCard data={apiPricingPlanData} />
      </Grid> */}

      <Grid item xs={12}>
        <PaymentMethodCard />
      </Grid>

      <Grid item xs={12}>
        <BillingAddressCard />
      </Grid>

      {/* <Grid item xs={12}>
        <BillingHistoryTable />
      </Grid> */}
    </Grid>
  )
}

export default TabBilling
