// ** Custom Component Import
import { useTranslation } from 'react-i18next'
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const AnalyticsPayments = () => {
  const { t } = useTranslation()

  return (
    <CardStatisticsVertical
      stats='$2,468'
      trend='positive'
      title={t('dashboard.payments')}
      trendNumber={14.82}
      avatarSrc='/images/cards/stats-vertical-paypal.png'
    />
  )
}

export default AnalyticsPayments
