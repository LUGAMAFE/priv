// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      icon: 'oui:stats',
      title: 'Statistics',
      children: [
        {
          title: 'Analytics',
          path: '/dashboards/analytics'
        },
        {
          title: 'CRM',
          path: '/dashboards/crm'
        },
        {
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
          title: 'nav.earnings',
          path: '/dashboards/earnings'
        },
        {
          title: 'nav.payoutRequests',
          path: '/dashboards/payout-requests'
        },
        {
          title: 'nav.chargebacks',
          path: '/dashboards/chargebacks'
        },
        {
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
          path: '/pages/faq'
        },
        {
          title: 'Help Center',
          path: '/pages/help-center'
        },
        {
          title: 'Menu Levels',
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
          disabled: true
        },
        {
          title: 'Raise Support',
          externalLink: true,
          openInNewTab: true
        },
        {
          title: 'Documentation',
          externalLink: true,
          openInNewTab: true,
          path: '/documentation'
        }
      ]
    }
  ]
}

export default navigation
