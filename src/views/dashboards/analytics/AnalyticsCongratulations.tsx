// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    order: -1,
    display: 'flex',
    justifyContent: 'center'
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  right: 60,
  bottom: -1,
  height: 170,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    position: 'static'
  }
}))

const AnalyticsCongratulations = () => {
  // ** Hook
  const { t } = useTranslation()

  return (
    <Card sx={{ position: 'relative', height: '100%' }}>
      <CardContent sx={{ py: theme => `${theme.spacing(9)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={7} sx={{ textAlign: ['center', 'start'] }}>
            <Typography variant='h5' sx={{ mb: 4, color: 'primary.main' }}>
              {t('home.congratulations', { name: 'Valeria Vidal' })}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{t('home.newSuscribers', { count: 20 })}</Typography>
            <Typography sx={{ mb: 3, color: 'text.secondary' }}>{t('home.checkYourEarnings')}</Typography>
          </Grid>
          <StyledGrid item xs={12} sm={5}>
            <Img alt='Congratulations John' src={`/images/undraw_happy_news_re_tsbd.svg`} />
          </StyledGrid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AnalyticsCongratulations
