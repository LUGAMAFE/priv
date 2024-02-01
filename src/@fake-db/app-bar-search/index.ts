// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { AppBarSearchType } from 'src/@fake-db/types'

const searchData: AppBarSearchType[] = [
  {
    id: 104,
    url: '/dashboards/earnings',
    icon: 'mingcute:pig-money-line',
    title: 'Earnings',
    category: 'dashboards'
  },
  {
    id: 105,
    url: '/dashboards/payout-requests',
    icon: 'game-icons:pay-money',
    title: 'Payout Requests',
    category: 'dashboards'
  },
  {
    id: 106,
    url: '/dashboards/chargebacks',
    icon: 'mdi:cash-chargeback',
    title: 'Chargebacks',
    category: 'dashboards'
  },
  {
    id: 107,
    url: '/dashboards/referrals',
    icon: 'ph:users-three',
    title: 'Referrals',
    category: 'dashboards'
  },
  {
    id: 108,
    url: '/dashboards/engagement',
    icon: 'ic:outline-handshake',
    title: 'Engagement',
    category: 'dashboards'
  },
  {
    id: 109,
    url: '/dashboards/reach',
    icon: 'uil:arrow-growth',
    title: 'Reach',
    category: 'dashboards'
  },
  {
    id: 110,
    url: '/dashboards/analytics',
    icon: 'bx:pie-chart-alt-2',
    title: 'Analytics',
    category: 'dashboards'
  },
  {
    id: 111,
    url: '/dashboards/crm',
    icon: 'bx:shape-circle',
    title: 'CRM',
    category: 'dashboards'
  },
  {
    id: 112,
    url: '/dashboards/ecommerce',
    icon: 'bx:analyse',
    title: 'eCommerce',
    category: 'dashboards'
  },
  {
    id: 113,
    url: '/pages/faq',
    icon: 'bx:help-circle',
    title: 'FAQ',
    category: 'dashboards'
  },
  {
    id: 114,
    url: '/pages/help-center',
    icon: 'bx:buoy',
    title: 'Help Center',
    category: 'dashboards'
  }
]

// ** GET Search Data
mock.onGet('/app-bar/search').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const exactData: { [k: string]: AppBarSearchType[] } = {
    dashboards: [],
    appsPages: [],
    userInterface: [],
    formsTables: [],
    chartsMisc: []
  }

  const includeData: { [k: string]: AppBarSearchType[] } = {
    dashboards: [],
    appsPages: [],
    userInterface: [],
    formsTables: [],
    chartsMisc: []
  }

  searchData.forEach(obj => {
    const isMatched = obj.title.toLowerCase().startsWith(queryLowered)
    if (isMatched && exactData[obj.category].length < 5) {
      exactData[obj.category].push(obj)
    }
  })

  searchData.forEach(obj => {
    const isMatched =
      !obj.title.toLowerCase().startsWith(queryLowered) && obj.title.toLowerCase().includes(queryLowered)
    if (isMatched && includeData[obj.category].length < 5) {
      includeData[obj.category].push(obj)
    }
  })

  const categoriesCheck: string[] = []

  Object.keys(exactData).forEach(category => {
    if (exactData[category].length > 0) {
      categoriesCheck.push(category)
    }
  })
  if (categoriesCheck.length === 0) {
    Object.keys(includeData).forEach(category => {
      if (includeData[category].length > 0) {
        categoriesCheck.push(category)
      }
    })
  }

  const resultsLength = categoriesCheck.length === 1 ? 5 : 3

  return [
    200,
    [
      ...exactData.dashboards.concat(includeData.dashboards).slice(0, resultsLength),
      ...exactData.appsPages.concat(includeData.appsPages).slice(0, resultsLength),
      ...exactData.userInterface.concat(includeData.userInterface).slice(0, resultsLength),
      ...exactData.formsTables.concat(includeData.formsTables).slice(0, resultsLength),
      ...exactData.chartsMisc.concat(includeData.chartsMisc).slice(0, resultsLength)
    ]
  ]
})
