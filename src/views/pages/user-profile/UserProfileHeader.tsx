// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Third Party Imports
import axios from 'axios'

// ** Icon Imports

// ** Types
import { ProfileHeaderType } from 'src/@fake-db/types'

const ProfilePicture = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: theme.shape.borderRadius,
  border: `5px solid ${theme.palette.common.white}`,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  }
}))

// const ImgStyled = styled('img')(({ theme }) => ({
//   width: 100,
//   height: 100,
//   marginRight: theme.spacing(6.25),
//   borderRadius: theme.shape.borderRadius
// }))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const UserProfileHeader = () => {
  // ** State
  const [data, setData] = useState<ProfileHeaderType | null>(null)

  useEffect(() => {
    axios.get('/pages/profile-header').then(response => {
      setData(response.data)
    })
  }, [])

  const [inputValue, setInputValue] = useState<string>('')
  const [imgSrc, setImgSrc] = useState<string>('/images/valeria.webp')
  const handleInputImageChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)
      reader.readAsDataURL(files[0])

      if (reader.result !== null) {
        setInputValue(reader.result as string)
      }
    }
  }
  const handleInputImageReset = () => {
    setInputValue('')
    setImgSrc('/images/valeria.webp')
  }

  // const designationIcon = data?.designationIcon || 'bx:briefcase'

  return data !== null ? (
    <Card>
      <CardMedia
        component='img'
        alt='profile-header'
        image={'/images/valeria-fondo.webp'}
        sx={{
          height: { xs: 150, md: 250 },
          objectFit: 'cover'
        }}
      />
      <CardContent
        sx={{
          pt: 0,
          mt: -10,
          display: 'flex',
          alignItems: 'flex-end',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}
      >
        <ProfilePicture src={imgSrc} alt='profile-picture' />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            ml: { xs: 0, md: 6 },
            alignItems: 'flex-end',
            flexWrap: ['wrap', 'nowrap'],
            justifyContent: ['center', 'space-between']
          }}
        >
          <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'] }}>
            <Box sx={{ mt: 10, display: 'flex', alignItems: 'center' }}>
              <div>
                <ButtonStyled
                  sx={{ mb: [6, 0] }}
                  component='label'
                  variant='contained'
                  htmlFor='account-settings-upload-image'
                >
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    value={inputValue}
                    accept='image/png, image/jpeg'
                    onChange={handleInputImageChange}
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='secondary' variant='outlined' onClick={handleInputImageReset}>
                  Reset
                </ResetButtonStyled>
                <Typography sx={{ mt: 6, color: 'text.disabled' }}>Allowed PNG or JPEG. Max size of 800K.</Typography>
              </div>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  ) : null
}

export default UserProfileHeader
