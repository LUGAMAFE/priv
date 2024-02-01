import { useTheme } from '@mui/material/styles'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { formatCurrency } from 'src/@core/utils/format'

const Chart = ({ days = 30, showDollars = true }: { days: number; showDollars?: boolean }) => {
  const theme = useTheme()

  // Genera las fechas de los últimos 30 días
  const getLastNDaysDates = (days: number) => {
    const dates = []
    const currentDate = new Date(2024, 1, 2) // Asegúrate de que la fecha sea correcta
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000)

      // Agrega timestamps al arreglo
      dates.push(date.getTime())
    }

    return dates
  }

  const options = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        },
        autoSelected: 'pan'
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    colors: ['#ff9f43'],
    stroke: { curve: 'straight' },
    dataLabels: { enabled: false },
    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      colors: ['#ff9f43'],
      strokeColors: ['#fff']
    },
    grid: {
      padding: { top: -10 },
      borderColor: theme.palette.divider,
      xaxis: {
        lines: { show: true }
      }
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        return `<div class='bar-chart'>
          <span>${
            showDollars ? formatCurrency(series[seriesIndex][dataPointIndex]) : series[seriesIndex][dataPointIndex]
          }</span>
        </div>`
      }
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return showDollars ? formatCurrency(value) : value
        },
        style: { colors: theme.palette.text.disabled }
      }
    },
    xaxis: {
      type: 'datetime',
      categories: getLastNDaysDates(days),
      tickPlacement: 'on',

      tickAmount: 7, // Esto asegura que solo se muestren 7 ticks en el eje X a la vez.
      range: days * 24 * 60 * 60 * 1000, // Esto define el rango visible del eje X como 7 días en milisegundos.
      labels: {
        rotate: 0,
        rotateAlways: false,
        style: {
          colors: theme.palette.text.disabled,
          cssClass: 'apexcharts-xaxis-label'
        }
      }
    }
  }

  // Genera datos aleatorios para las ganancias diarias
  const generateRandomEarnings = (days: number) => {
    const earnings = []
    const value = showDollars ? 4000 : 1000
    for (let i = 0; i < days; i++) {
      earnings.push(Math.floor(Math.random() * (value - value * 0.8 + 1) + value))
    }

    return earnings
  }

  const series = [
    {
      name: 'Ganancias Diarias',
      data: generateRandomEarnings(days)
    }
  ]

  return <ReactApexcharts options={options} series={series} type='line' height={400} />
}

export default Chart
