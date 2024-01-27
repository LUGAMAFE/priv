// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import AuthIllustrationWrapper from 'src/views/pages/auth/AuthIllustrationWrapper'

// ** Styled Components
const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginLeft: theme.spacing(1),
  color: theme.palette.primary.main
}))

const VerifyEmailV1 = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Box className='content-center'>
      <AuthIllustrationWrapper>
        <Card>
          <CardContent sx={{ p: `${theme.spacing(8, 8, 7)} !important` }}>
            <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img width={70} height={28} alt='Congratulations John' src={`/images/logo.svg`} />
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
            </Box>
            <Typography variant='h5' sx={{ mb: 1.5 }}>
              Verify your email ✉️
            </Typography>
            <Typography sx={{ mb: 6, color: 'text.secondary' }}>
              Account activation link sent to your email address: <strong>john.doe@email.com</strong> Please follow the
              link inside to continue.
            </Typography>
            <Button fullWidth variant='contained' sx={{ mb: 4 }}>
              Skip for now
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ mr: 1 }} variant='body2'>
                Didn't get the mail?
              </Typography>
              <LinkStyled href='/' onClick={e => e.preventDefault()}>
                Resend
              </LinkStyled>
            </Box>
          </CardContent>
        </Card>
      </AuthIllustrationWrapper>
    </Box>
  )
}

VerifyEmailV1.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default VerifyEmailV1
