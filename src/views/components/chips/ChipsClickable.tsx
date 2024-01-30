// ** MUI Imports
import Chip from '@mui/material/Chip'

const ChipsClickable = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.')
  }

  return (
    <div className='demo-space-x'>
      <Chip label='Clickable' onClick={handleClick} />
      <Chip
        label='Clickable Link'
        component='a'
        href='https://www.linkedin.com/in/luis-javier-martinez-fernandez-15b413b3/'
        target='_blank'
        clickable
      />
    </div>
  )
}

export default ChipsClickable
