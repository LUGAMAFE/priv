// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import LogoIcon from 'src/@core/components/logo-icon'

const FallbackSpinner = ({ sx }: { sx?: BoxProps['sx'] }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <LogoIcon width={128} height={56} />
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default FallbackSpinner
