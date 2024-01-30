// ** MUI Imports
import { Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const series = [{ data: [185, 207, 226, 250, 320, 350, 400, 410, 452] }]

const AnalyticsOrder = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      zoom: {
        enabled: false // deshabilita la función de zoom
      }
    },

    tooltip: {
      enabled: true

      //followCursor: true // Habilita que el tooltip siga al cursor
    },

    // dataLabels: { enabled: false },
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round'
    },

    grid: {
      show: false,
      padding: {
        left: 0,
        top: -25,
        right: 17
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0.7,
        opacityFrom: 0.5,
        shadeIntensity: 1,
        stops: [0, 90, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.6,
              color: theme.palette.success.main
            },
            {
              offset: 100,
              opacity: 0.1,
              color: theme.palette.background.paper
            }
          ]
        ]
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: theme.palette.success.main
      }
    },

    // xaxis: {
    //   labels: { show: false },
    //   axisTicks: { show: false },
    //   axisBorder: { show: false }
    // },
    // legend: {
    //   position: 'top',
    //   horizontalAlign: 'left'
    // }
    xaxis: {
      categories: ['25 Ene', '26 Ene', '27 Ene', '28 Ene', '29 Ene', '30 Ene', '31 Ene', '1 Feb', '2 Feb'], // Etiquetas del eje X para los últimos 5 días
      labels: { show: true },
      crosshairs: {
        show: true // Habilita el crosshair para eje X
      }
    },

    yaxis: {
      show: false,
      crosshairs: {
        show: true // Habilita el crosshair para eje X
      }
    },

    markers: {
      size: 1,
      offsetY: 2,
      offsetX: -4,
      strokeWidth: 4,
      strokeOpacity: 1,
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 6,
          seriesIndex: 0,
          fillColor: theme.palette.common.white,
          strokeColor: theme.palette.success.main,
          dataPointIndex: series[0].data.length - 1
        }
      ]
    }
  }

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(3.5, 5, 0)} !important` }}>
        <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Suscriptores Totales</Typography>
        <Typography variant='h5'>452</Typography>
      </CardContent>
      <Box height={'100%'}>
        <ReactApexcharts type='area' height={'100%'} options={options} series={series} />
      </Box>
    </Card>
  )
}

export default AnalyticsOrder
