// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      icon: 'oui:stats',
      title: 'Statistics',
      children: [
        {
          icon: 'bx:pie-chart-alt-2',
          title: 'Analytics',
          path: '/dashboards/analytics'
        },
        {
          icon: 'bx:shape-circle',
          title: 'CRM',
          path: '/dashboards/crm'
        },
        {
          icon: 'bx:analyse',
          title: 'eCommerce',
          path: '/dashboards/ecommerce'
        }
      ]
    },
    {
      icon: 'iconamoon:invoice',
      title: 'nav.statements',
      children: [
        {
          icon: 'mingcute:pig-money-line',
          title: 'nav.earnings',
          path: '/dashboards/earnings'
        },
        {
          icon: 'game-icons:pay-money',
          title: 'nav.payoutRequests',
          path: '/dashboards/payout-requests'
        },
        {
          icon: 'mdi:cash-chargeback',
          title: 'nav.chargebacks',
          path: '/dashboards/chargebacks'
        },
        {
          icon: 'ph:users-three',
          title: 'nav.referrals',
          path: '/dashboards/referrals'
        }
      ]
    },
    {
      icon: 'ic:outline-handshake',
      title: 'nav.engagement',
      path: '/dashboards/engagement'
    },
    {
      icon: 'ph:users',
      title: 'nav.fans',
      path: '/apps/user/list'
    },
    {
      icon: 'uil:arrow-growth',
      title: 'nav.reach',
      path: '/dashboards/reach'
    },
    {
      title: 'Chat',
      icon: 'bx:message',
      path: '/apps/chat'
    },
    {
      title: 'Others',
      icon: 'bx:dots-horizontal-rounded',
      children: [
        {
          title: 'FAQ',
          path: '/pages/faq',
          icon: 'bx:help-circle'
        },
        {
          title: 'Help Center',
          icon: 'bx:buoy',
          path: '/pages/help-center'
        },
        {
          title: 'Menu Levels',
          icon: 'bx:menu',
          children: [
            {
              title: 'Menu Level 2.1'
            },
            {
              title: 'Menu Level 2.2',
              children: [
                {
                  title: 'Menu Level 3.1'
                },
                {
                  title: 'Menu Level 3.2'
                }
              ]
            }
          ]
        },
        {
          title: 'Disabled Menu',
          icon: 'bx:block',
          disabled: true
        },
        {
          title: 'Raise Support',
          icon: 'bx:support',
          externalLink: true,
          openInNewTab: true
        },
        {
          title: 'Documentation',
          icon: 'bx:file',
          externalLink: true,
          openInNewTab: true,
          path: '/documentation'
        }
      ]
    }
  ]
}

export default navigation
