// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const AnalyticsSales = () => {
  return (
    <CardStatisticsVertical
      title='Ganancias Este Mes'
      stats='$14,679 MXN'
      trendNumber={28.14}
      avatarSrc='/images/cards/stats-vertical-wallet.png'
      optionsMenuProps={{
        options: ['Ver Detalles'],
        iconButtonProps: { size: 'small', className: 'card-more-options', sx: { color: 'text.secondary' } }
      }}
      extra='+ que el mes anterior'
    />
  )
}

export default AnalyticsSales
