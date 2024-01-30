// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Import
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'

// ** Icons Imports

// ** Third Party Imports

// ** Custom Components Imports
import Table from 'src/pages/dashboards/payout-requests/table'

interface DataType {
  stats: string
  title: string
  avatarSrc: string
  difference: number
  trendNumber: number
  progressValue: number
  trend?: 'positive' | 'negative'
  series: { data: number[] }[]
}

const data: { [key: string]: DataType } = {
  all: {
    difference: 39,
    title: 'Ganancias',
    stats: '$45,100 MXN',
    trendNumber: 42.9,
    progressValue: 6.5,
    avatarSrc: '/images/cards/wallet-with-bg.png',
    series: [
      {
        data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
      }
    ]
  },
  subscriptions: {
    difference: 16,
    stats: '$15,000 MXN',
    title: 'Suscripciones',
    trend: 'negative',
    trendNumber: 27.8,
    progressValue: 7.2,
    avatarSrc: '/images/cards/credit-card.png',
    series: [
      {
        data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
      }
    ]
  },
  tips: {
    difference: 28,
    title: 'Propinas',
    stats: '$2,050 MXN',
    trendNumber: 35.1,
    progressValue: 4.2,
    avatarSrc: '/images/cards/stats-vertical-wallet.png',
    series: [
      {
        data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
      }
    ]
  },
  sells: {
    difference: 16,
    stats: '$15,050 MXN',
    title: 'Ventas',
    trend: 'negative',
    trendNumber: 27.8,
    progressValue: 7.2,
    avatarSrc: '/images/cards/wallet-with-bg.png',
    series: [
      {
        data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
      }
    ]
  },
  posts: {
    difference: 28,
    title: 'Posts',
    stats: '$10,000 MXN',
    trendNumber: 35.1,
    progressValue: 4.2,
    avatarSrc: '/images/cards/chart.png',
    series: [
      {
        data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
      }
    ]
  },
  messages: {
    difference: 28,
    title: 'Mensajes',
    stats: '$3,000 MXN',
    trendNumber: 35.1,
    progressValue: 4.2,
    avatarSrc: '/images/cards/chart.png',
    series: [
      {
        data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
      }
    ]
  }
}

// Styled TabList component
const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  minHeight: 40,
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .MuiTab-root': {
    minHeight: 40,
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadius,
    '&.Mui-selected': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main
    }
  }
}))

const Content = () => {
  // ** State
  const [value, setValue] = useState<string>('all')

  // ** Hook
  const theme = useTheme()

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
      <Typography variant='h3' sx={{ fontWeight: 400, pb: 4, fontSize: '2.5rem !important' }}>
        Solicitudes de pago
      </Typography>
      <Table></Table>
    </>
  )
}

export default Content
