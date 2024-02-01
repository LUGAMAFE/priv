// ** MUI Imports
import Box from '@mui/material/Box'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import NotificationDropdown, {
  NotificationsType
} from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import ShortcutsDropdown, { ShortcutsType } from 'src/@core/layouts/components/shared-components/ShortcutsDropdown'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import Autocomplete from 'src/layouts/components/Autocomplete'

// ** Hook Import
import { useAuth } from 'src/hooks/useAuth'

interface Props {
  hidden: boolean
  settings: Settings
  saveSettings: (values: Settings) => void
}

const notifications: NotificationsType[] = [
  {
    meta: 'Today',
    title: 'Felicidades Valeria! 🎉',
    subtitle: 'Wow eres la mejor creadora de contenido del mes. Sigue así.',
    avatarText: 'Valeria Vidal',
    avatarColor: 'primary'
  },
  {
    meta: '11 Aug',
    avatarAlt: 'message',
    title: 'Nuevo mensaje recibido 👋🏻',
    avatarImg: '/images/avatars/3.png',
    subtitle: 'You have 10 unread messages'
  },
  {
    meta: 'Yesterday',
    subtitle: '5 hours ago',
    avatarImg: '/images/avatars/5.png',
    avatarAlt: 'message',
    title: 'Nuevo usuario registrado'
  },
  {
    meta: '25 May',
    title: 'Paypal',
    avatarAlt: 'paypal',
    subtitle: 'Pago de $1000 recibido',
    avatarImg: '/images/misc/paypal.png'
  },
  {
    meta: '19 Mar',
    avatarAlt: 'order',
    title: 'Compra recibida',
    avatarImg: '/images/avatars/3.png',
    subtitle: 'Nueva compra de John $200'
  }
]

const shortcuts: ShortcutsType[] = [
  {
    url: '/dashboards/analytics',
    title: 'Analytics',
    subtitle: 'Account Stats',
    icon: 'bx:pie-chart-alt-2'
  },
  {
    icon: 'mingcute:pig-money-line',
    title: 'Earnings',
    url: '/dashboards/earnings',
    subtitle: 'Manage Earnings'
  },
  {
    title: 'Fans',
    icon: 'ph:users',
    url: '/apps/user/list',
    subtitle: 'Fans List'
  },
  {
    title: 'Payout Requests',
    icon: 'game-icons:pay-money',
    url: '/dashboards/payout-requests',
    subtitle: 'Check your payments'
  },
  {
    title: 'Help Center',
    icon: 'bx:help-circle',
    url: '/pages/help-center',
    subtitle: 'FAQs & Articles'
  },
  {
    icon: 'bx:cog',
    title: 'Settings',
    subtitle: 'Account Settings',
    url: '/pages/account-settings/account'
  }
]

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings } = props

  // ** Hook
  const auth = useAuth()

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, color: theme => theme.palette.secondary.main }}>
      {auth.user && <Autocomplete hidden={hidden} settings={settings} />}
      <LanguageDropdown settings={settings} saveSettings={saveSettings} />
      <ModeToggler settings={settings} saveSettings={saveSettings} />
      {auth.user && (
        <>
          <ShortcutsDropdown settings={settings} shortcuts={shortcuts} />
          <NotificationDropdown settings={settings} notifications={notifications} />
          <UserDropdown settings={settings} />
        </>
      )}
    </Box>
  )
}

export default AppBarContent
