// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

interface Props {
  hidden: LayoutProps['hidden']
  settings: LayoutProps['settings']
  saveSettings: LayoutProps['saveSettings']
  appBarContent: NonNullable<NonNullable<LayoutProps['horizontalLayoutProps']>['appBar']>['content']
  appBarBranding: NonNullable<NonNullable<LayoutProps['horizontalLayoutProps']>['appBar']>['branding']
}

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

const AppBarContent = (props: Props) => {
  // ** Props
  const { appBarContent: userAppBarContent, appBarBranding: userAppBarBranding } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {userAppBarBranding ? (
        userAppBarBranding(props)
      ) : (
        <LinkStyled href='/'>
          {/* <svg width={22} height={32} viewBox='0 0 55 81' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fill={theme.palette.primary.main}
              d='M30.1984 0.0144043C24.8945 0.425781 25.2534 6.16968 26.6435 7.65326C22.693 10.3649 13.1875 16.8867 6.76944 21.2803C1.21531 25.0824 -0.842975 34.6064 1.11159 40.8262C3.00952 46.8658 12.4904 51.3615 17.5337 52.7256C17.5337 52.7256 11.7188 56.0269 6.60358 60.0482C1.48831 64.0695 -0.622615 69.3436 3.06836 75.262C6.75933 81.1805 12.725 80.761 17.5257 78.6229C22.3264 76.4848 32.1683 69.1692 37.9402 65.1633C42.7282 61.5411 43.9669 53.6444 41.7631 46.9643C39.9758 41.5468 30.0969 36.4284 25.1792 34.6064C27.1946 33.1595 32.4935 29.4242 37.129 26.0909C38.7184 30.5636 43.9998 30.212 45.6103 27.8209C47.6216 23.4326 51.8339 13.4663 53.9579 8.55175C54.8862 4.81044 52.5639 2.78457 50.2227 2.35938C46.8672 1.75 38.3222 0.960115 30.1984 0.0144043Z'
            />
            <path
              fillOpacity='0.2'
              fill={theme.palette.common.white}
              d='M26.6523 7.65625C24.9492 5.625 25.3239 0.255308 30.2922 0.0105286C33.0074 0.326611 35.7804 0.62685 38.3907 0.909477C43.5904 1.47246 48.1446 1.96556 50.311 2.3748C52.7331 2.83234 54.886 5.06072 53.9543 8.61103C53.2063 10.3418 52.2075 12.6646 51.1482 15.1282C49.1995 19.6601 47.0459 24.6685 45.8717 27.3445C44.7224 29.964 39.111 31.0585 37.1137 26.0951C32.4782 29.4283 27.2884 33.1556 25.273 34.6026C24.931 34.4553 24.3074 34.2381 23.5124 33.9613C20.8691 33.0407 16.331 31.4602 13.9477 29.5966C9.61363 25.5918 11.6259 19.4662 13.1737 16.904C17.8273 13.7183 20.7417 11.7161 23.4984 9.82236C24.5437 9.10427 25.5662 8.40178 26.6523 7.65625Z'
            />
            <path
              fillOpacity='0.2'
              fill={theme.palette.common.white}
              d='M17.543 52.7266C21.2241 53.9875 28.5535 57.0509 30.091 59.101C32.0129 61.6635 33.1576 64.34 29.2527 71.2039C28.5954 71.6481 27.9821 72.0633 27.4069 72.4528C22.1953 75.9817 20.1085 77.3946 16.6243 79.0531C13.5855 80.2464 6.61575 81.7103 2.66559 74.5653C-1.11764 67.7222 3.23818 62.7113 6.5963 60.065L12.1695 56.0339L14.8359 54.3477L17.543 52.7266Z'
            />
          </svg> */}
          <svg width='64' height='28' viewBox='0 0 89 36' fill='none'>
            <path
              d='M19.6726 35.4423H1.10848L4.81454 19.664C4.92206 19.2166 4.80802 19.0203 4.45938 18.7725C1.51252 16.6811 -0.063224 13.7654 0.00194316 10.1546C0.0983905 4.84574 3.85463 1.1163 8.31988 0.172739C12.1641 -0.6397 17.4179 1.42006 19.453 6.2176C21.3025 10.577 19.9835 15.6486 16.1836 18.5149C15.8271 18.7837 15.7626 19.0058 15.8636 19.4235L19.6726 35.4423Z'
              fill='white'
            ></path>
            <path
              d='M39.0365 7.32364C43.8908 7.32364 46.0745 10.8205 46.0745 14.318C46.0745 17.8458 43.8901 21.2807 39.0365 21.2807H35.1832V28.4589H30.4194V7.32364H39.0365ZM38.8247 17.0782C40.6148 17.0782 41.2815 15.6674 41.2815 14.3173C41.2815 12.9672 40.6142 11.5262 38.8547 11.5262H35.1838V17.0782H38.8247Z'
              fill='white'
            ></path>
            <path
              d='M59.2401 14.1948L58.1785 18.5199C57.2981 17.9987 56.6008 17.9684 56.1453 17.9684C54.3858 17.9684 52.93 19.4714 52.93 23.7049V28.4596H48.4399V14.1336H52.8687V17.1705C53.6885 14.8076 55.3868 13.7652 57.1163 13.7652C57.7843 13.7652 58.5122 13.8265 59.2401 14.1948Z'
              fill='white'
            ></path>
            <path
              d='M60.6655 9.34852C60.6655 7.84488 61.9395 6.71024 63.4566 6.71024C64.9737 6.71024 66.1871 7.84554 66.1871 9.34852C66.1871 10.7902 64.9737 11.9861 63.4566 11.9861C61.9395 11.9861 60.6655 10.7902 60.6655 9.34852ZM61.2116 28.4589V14.1335H65.7016V28.4589H61.2116Z'
              fill='white'
            ></path>
            <path
              d='M78.6247 14.1335H83.509L77.5019 28.4589H73.5886L67.5815 14.1335H72.4658L75.5606 22.6611L78.6247 14.1335Z'
              fill='white'
            ></path>
            <path
              d='M83.478 26.0045C83.478 24.4712 84.7214 23.3359 86.2085 23.3359C87.7256 23.3359 88.9996 24.4712 88.9996 26.0045C88.9996 27.6004 87.7256 28.7344 86.2085 28.7344C84.7214 28.735 83.478 27.6004 83.478 26.0045Z'
              fill='white'
            ></path>
          </svg>
          <Typography
            variant='h5'
            sx={{
              ml: 2,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: '-0.45px',
              textTransform: 'lowercase',
              fontSize: '1.75rem !important'
            }}
          >
            {themeConfig.templateName}
          </Typography>
        </LinkStyled>
      )}
      {userAppBarContent ? userAppBarContent(props) : null}
    </Box>
  )
}

export default AppBarContent
