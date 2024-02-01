// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Import
import TabContext from '@mui/lab/TabContext'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports

// ** Custom Components Imports
import { Divider, Stack } from '@mui/material'
import OptionsMenu from 'src/@core/components/option-menu'
import Chart from 'src/pages/dashboards/earnings/chart'

interface DataType {
  stats: string
  title: string
  avatarSrc: string
  difference: number
  trendNumber: number
  progressValue: number
  trend?: 'positive' | 'negative'
  series: { data: number[] }[]
  showDollars?: boolean
}

const data: { [key: string]: DataType } = {
  purchases: {
    difference: 16,
    stats: '$15,000 MXN',
    title: 'Compras',
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
  likes: {
    difference: 16,
    stats: '150',
    title: 'Likes',
    trend: 'negative',
    trendNumber: 27.8,
    progressValue: 7.2,
    avatarSrc: '/images/cards/wallet-with-bg.png',
    series: [
      {
        data: [4, 20, 30, 20, 2, 4, 5, 8, 5, 5, 6, 20, 15, 10, 5]
      }
    ],
    showDollars: false
  },
  comments: {
    difference: 28,
    title: 'Comentarios',
    stats: '1000',
    trendNumber: 35.1,
    progressValue: 4.2,
    avatarSrc: '/images/cards/chart.png',
    series: [
      {
        data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
      }
    ],
    showDollars: false
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
  const [value, setValue] = useState<string>('purchases')

  // ** Hook
  const theme = useTheme()

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
      <Card>
        <Box sx={{ p: 5, pb: 0, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Stack>
            <Typography variant='h4' sx={{ fontWeight: 500 }}>
              Ultimos 30 dias
            </Typography>
            <Typography variant='body2' sx={{ fontWeight: 400 }}>
              Ene 25, 2024 - Feb 02, 2024
            </Typography>
          </Stack>
          <OptionsMenu
            options={[
              'Ultimos 30 dias',
              'Ultimos 15 dias',
              'Ultimos 7 dias',
              { divider: true },
              '2024',
              '2023',
              'Todo el histórico',
              { divider: true },
              'Febrero',
              'Enero',
              'Diciembre',
              'Noviembre',
              'Octubre',
              'Septiembre',
              'Agosto'
            ]}
            icon={<Icon icon='solar:alt-arrow-down-line-duotone' width={30} />}
            iconButtonProps={{ size: 'small', className: 'card-more-options', sx: { color: 'text.secondary' } }}
          />
        </Box>
        <Divider orientation='vertical' flexItem />
        <TabContext value={value}>
          <CardContent
            sx={{
              p: `${theme.spacing(5)} !important`,
              borderBottom: `1px solid ${theme.palette.divider}`
            }}
          >
            <TabList variant='scrollable' scrollButtons='auto' onChange={handleChange} aria-label='tab widget card'>
              <Tab value='purchases' label='Compras' />
              <Tab value='tips' label='Propinas' />
              <Tab value='likes' label='Likes' />
              <Tab value='comments' label='Comentarios' />
            </TabList>
          </CardContent>
          <TabPanel value={value} sx={{ border: 0, boxShadow: 0, p: '0 !important', backgroundColor: 'transparent' }}>
            <Box sx={{ p: 5, display: 'flex', alignItems: 'center' }}>
              <Avatar variant='rounded' src={data[value].avatarSrc} sx={{ mr: 3.5, width: 46, height: 46 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ color: 'text.secondary' }}>{`${data[value].title}`}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: 'success.main' } }}>
                  <Typography variant='h6' sx={{ mr: 0.5 }}>
                    {data[value].stats}
                  </Typography>
                  <Icon icon='bx:chevron-up' />
                  <Typography variant='body2' sx={{ fontWeight: 500, color: 'success.main' }}>
                    {`${data[value].trendNumber}%`}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Chart series={data[value].series} showDollars={data[value]?.showDollars} />
            <Box sx={{ p: 5, pt: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ mr: 4, position: 'relative' }}>
                <CircularProgress
                  size={50}
                  value={100}
                  thickness={2}
                  variant='determinate'
                  sx={{
                    position: 'absolute',
                    color: 'customColors.trackBg',
                    '& .MuiCircularProgress-circle': { strokeWidth: 2 }
                  }}
                />
                <CircularProgress
                  size={50}
                  thickness={4}
                  color='primary'
                  variant='determinate'
                  value={data[value].progressValue * 10}
                  sx={{ '& .MuiCircularProgress-circle': { strokeWidth: 4, strokeLinecap: 'round' } }}
                />
                <Box sx={{ mt: -1, top: '50%', left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)' }}>
                  <Typography variant='body2' sx={{ fontWeight: 500 }}>
                    {`${data[value].progressValue}k`}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ color: 'text.secondary' }}>{`${data[value].title} estos ultimos 30 dias`}</Typography>
                <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                  {`$${data[value].difference} mas que el mes pasado`}
                </Typography>
              </Box>
            </Box>
          </TabPanel>
        </TabContext>
      </Card>
    </>
  )
}

export default Content
