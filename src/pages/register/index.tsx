// ** React Imports
import { ReactNode, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import LogoIcon from 'src/@core/components/logo-icon'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Styled Components
const RegisterIllustration = styled('img')({
  height: 'auto',
  maxWidth: '100%'
})

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('lg')]: {
    maxWidth: 480
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 635
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(12)
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Register = () => {
  // ** States
  const [showPassword, setShowPassword] = useState<boolean>(false)

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('lg'))

  // ** Vars
  const { skin } = settings

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ p: 12, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <RegisterIllustration
            width={700}
            alt='register-illustration'
            src={`/images/pages/girl-with-laptop-${theme.palette.mode}.png`}
          />
        </Box>
      ) : null}
      <RightWrapper
        sx={{ ...(skin === 'bordered' && !hidden && { borderLeft: `1px solid ${theme.palette.divider}` }) }}
      >
        <Box sx={{ mx: 'auto', maxWidth: 400 }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center' }}>
            <LogoIcon width={70} height={28} />
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
          <Typography variant='h6' sx={{ mb: 1.5 }}>
            Adventure starts here 🚀
          </Typography>
          <Typography sx={{ mb: 6, color: 'text.secondary' }}>
            Manejar tu contenido y fans nunca había sido tan divertido!
          </Typography>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <TextField autoFocus fullWidth sx={{ mb: 4 }} label='Username' placeholder='johndoe' />
            <TextField fullWidth label='Email' sx={{ mb: 4 }} placeholder='user@email.com' />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-v2-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                id='auth-login-v2-password'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onMouseDown={e => e.preventDefault()}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControlLabel
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem', color: 'text.secondary' } }}
              control={<Checkbox />}
              label={
                <>
                  <Typography variant='body2' component='span'>
                    I agree to{' '}
                  </Typography>
                  <LinkStyled href='/' onClick={e => e.preventDefault()}>
                    privacy policy & terms
                  </LinkStyled>
                </>
              }
            />
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
              Sign up
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ mr: 2 }}>
                Already have an account?
              </Typography>
              <Typography variant='body2'>
                <LinkStyled href='/login'>Sign in instead</LinkStyled>
              </Typography>
            </Box>
            <Divider sx={{ my: `${theme.spacing(6)} !important` }}>or</Divider>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
                <Icon icon='bxl:facebook-circle' />
              </IconButton>
              <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                <Icon icon='bxl:twitter' />
              </IconButton>
              {/* <IconButton
                href='/'
                component={Link}
                onClick={e => e.preventDefault()}
                sx={{ color: theme.palette.mode === 'light' ? '#272727' : 'grey.300' }}
              >
                <Icon icon='bxl:github' />
              </IconButton> */}
              <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
                <Icon icon='bxl:google' />
              </IconButton>
            </Box>
          </form>
        </Box>
      </RightWrapper>
    </Box>
  )
}

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Register.guestGuard = true

export default Register
