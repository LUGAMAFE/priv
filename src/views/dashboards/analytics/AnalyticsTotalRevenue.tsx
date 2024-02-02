// ** React Imports

// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Icons Imports

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Hook Import

// ** Util Import
import { formatCurrency } from 'src/@core/utils/format'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import CardCustom from 'src/views/ui/cards/statistics/CardCustom'

const currentYear = new Date().getFullYear()
const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic', 'Ene']
const last7Months = monthNames.slice(-7)

// const yearOptions = [currentYear - 1, currentYear - 2, currentYear - 3]

const series = [{ name: `${currentYear}`, data: [18067, 7083, 15509, 29050, 18002, 12125, 9080, 10080] }]

const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const AnalyticsTotalRevenue = () => {
  // // ** State
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // // ** Hooks & Var
  const theme = useTheme()

  // const { settings } = useSettings()
  // const { direction } = settings

  // const handleClick = (event: MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget)
  // }

  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

  const barOptions: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    dataLabels: {
      enabled: true,
      formatter: function (value: number) {
        return formatCurrency(value) // Agrega el signo de peso mexicano
      },
      style: {
        fontSize: '12px',
        colors: ['#FFF']
      }
    },
    stroke: {
      width: 6,
      lineCap: 'round',
      colors: [theme.palette.background.paper]
    },
    colors: [hexToRGBA(theme.palette.primary.main, 1), hexToRGBA(theme.palette.info.main, 1)],
    legend: {
      offsetX: -10,
      position: 'top',
      fontSize: '14px',
      horizontalAlign: 'left',
      fontFamily: theme.typography.fontFamily,
      labels: {
        colors: theme.palette.text.secondary
      },
      itemMargin: {
        vertical: 4,
        horizontal: 10
      },
      markers: {
        width: 8,
        height: 8,
        radius: 10,
        offsetX: -4
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      borderColor: theme.palette.divider,
      padding: {
        bottom: 5
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '30%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    xaxis: {
      categories: last7Months,
      axisTicks: { show: false },
      crosshairs: { opacity: 0 },
      axisBorder: { show: false },
      labels: {
        style: {
          fontSize: '14px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    yaxis: {
      labels: {
        formatter: function (value: number) {
          return formatCurrency(value) // Agrega el signo de peso mexicano
        },
        style: {
          fontSize: '14px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        options: {
          plotOptions: {
            bar: { columnWidth: '43%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          plotOptions: {
            bar: { columnWidth: '30%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: {
            bar: { columnWidth: '42%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: { columnWidth: '45%' }
          }
        }
      }
    ]
  }

  const radialBarOptions: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    labels: ['Mas'],
    stroke: { dashArray: 5 },
    colors: [hexToRGBA(theme.palette.primary.main, 1)],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityTo: 0.6,
        opacityFrom: 1,
        shadeIntensity: 0.5,
        stops: [30, 70, 100],
        inverseColors: false,
        gradientToColors: [theme.palette.primary.main]
      }
    },
    plotOptions: {
      radialBar: {
        endAngle: 120,
        startAngle: -140,
        hollow: { size: '50%' },
        track: { background: 'transparent' },
        dataLabels: {
          name: {
            offsetY: 25,
            fontWeight: 600,
            fontSize: '14px',
            color: theme.palette.text.secondary,
            fontFamily: theme.typography.fontFamily
          },
          value: {
            offsetY: -15,
            fontWeight: 500,
            fontSize: '24px',
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 900,
        options: {
          chart: { height: 200 }
        }
      },
      {
        breakpoint: 735,
        options: {
          chart: { height: 200 }
        }
      },
      {
        breakpoint: 660,
        options: {
          chart: { height: 200 }
        }
      },
      {
        breakpoint: 600,
        options: {
          chart: { height: 280 }
        }
      }
    ]
  }

  return (
    <Card>
      <Grid container>
        <StyledGrid
          item
          sm={7}
          xl={8}
          xs={12}
          sx={{ '& .apexcharts-series[rel="2"]': { transform: 'translateY(-10px)' } }}
        >
          <CardContent sx={{ p: `${theme.spacing(5, 6, 0)} !important` }}>
            <Typography variant='h6'>Ganancias últimos meses</Typography>
          </CardContent>
          <ReactApexcharts type='bar' height={312} options={barOptions} series={series} />
        </StyledGrid>
        <Grid item xs={12} sm={5} xl={4}>
          <CardContent sx={{ p: `${theme.spacing(8, 6, 7.5)} !important` }}>
            <CardCustom
              title='Ganancias Este Mes'
              stats='$14,679 MXN'
              trendNumber={78}
              avatarSrc='/images/cards/stats-vertical-wallet.png'
              optionsMenuProps={{
                options: ['Ver Detalles'],
                iconButtonProps: { size: 'small', className: 'card-more-options', sx: { color: 'text.secondary' } }
              }}
              extra='+ que el mes anterior'
            />
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <ReactApexcharts type='radialBar' height={150} series={[78]} options={radialBarOptions} />
              <Typography sx={{ mt: 0, fontWeight: 600, color: 'text.secondary' }}>Crecimiento de ganancias</Typography>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default AnalyticsTotalRevenue
