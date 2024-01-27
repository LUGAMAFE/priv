// ** React Imports
import { ChangeEvent, ReactNode, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import AuthIllustrationWrapper from 'src/views/pages/auth/AuthIllustrationWrapper'

interface State {
  password: string
  showPassword: boolean
}

// ** Styled Components
const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const LoginV1 = () => {
  // ** State
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false
  })

  // ** Hook
  const theme = useTheme()

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

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
            <Typography variant='h6' sx={{ mb: 1.5 }}>
              Welcome to {themeConfig.templateName}! 👋🏻
            </Typography>
            <Typography sx={{ mb: 6, color: 'text.secondary' }}>
              Please sign-in to your account and start the adventure
            </Typography>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <TextField autoFocus fullWidth id='email' label='Email' sx={{ mb: 4 }} />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={values.password}
                  id='auth-login-password'
                  onChange={handleChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <Icon fontSize={20} icon={values.showPassword ? 'bx:show' : 'bx:hide'} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Box
                sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
              >
                <FormControlLabel
                  label='Remember Me'
                  control={<Checkbox />}
                  sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem', color: 'text.secondary' } }}
                />
                <LinkStyled href='/pages/auth/forgot-password-v1'>Forgot Password?</LinkStyled>
              </Box>
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                Sign in
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography variant='body2' sx={{ mr: 2 }}>
                  New on our platform?
                </Typography>
                <Typography>
                  <LinkStyled href='/pages/auth/register-v1'>Create an account</LinkStyled>
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
                <IconButton
                  href='/'
                  component={Link}
                  onClick={e => e.preventDefault()}
                  sx={{ color: theme.palette.mode === 'light' ? '#272727' : 'grey.300' }}
                >
                  <Icon icon='bxl:github' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
                  <Icon icon='bxl:google' />
                </IconButton>
              </Box>
            </form>
          </CardContent>
        </Card>
      </AuthIllustrationWrapper>
    </Box>
  )
}

LoginV1.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginV1
