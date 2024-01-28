// ** React Imports
import { ForwardedRef, SyntheticEvent, forwardRef, useState } from 'react'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent, { CardContentProps } from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import Grid, { GridProps } from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { TableCellBaseProps } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { alpha, styled, useTheme } from '@mui/material/styles'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Types
import { InvoiceClientType } from 'src/types/apps/invoiceTypes'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Custom Component Imports
import LogoIcon from 'src/@core/components/logo-icon'
import Repeater from 'src/@core/components/repeater'

interface PickerProps {
  label?: string
}

interface Props {
  toggleAddCustomerDrawer: () => void
  invoiceNumber: number
  clients: InvoiceClientType[] | undefined
  selectedClient: InvoiceClientType | null
  setSelectedClient: (val: InvoiceClientType | null) => void
}

const CustomInput = forwardRef(({ ...props }: PickerProps, ref: ForwardedRef<HTMLElement>) => {
  return <TextField size='small' inputRef={ref} sx={{ width: '150px' }} {...props} />
})

const MUITableCell = styled(TableCell)<TableCellBaseProps>(({ theme }) => ({
  borderBottom: 0,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  paddingTop: `${theme.spacing(1)} !important`,
  paddingBottom: `${theme.spacing(1)} !important`
}))

const CalcWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2)
  }
}))

const RepeatingContent = styled(Grid)<GridProps>(({ theme }) => ({
  paddingRight: 0,
  display: 'flex',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  '& .col-title': {
    top: '-1.85rem',
    position: 'absolute',
    color: theme.palette.text.secondary
  },
  [theme.breakpoints.down('lg')]: {
    '& .col-title': {
      top: '0',
      position: 'relative'
    }
  }
}))

const RepeaterWrapper = styled(CardContent)<CardContentProps>(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(10),
  '& .repeater-wrapper + .repeater-wrapper': {
    marginTop: theme.spacing(12)
  }
}))

const InvoiceAction = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: theme.spacing(2, 1),
  borderLeft: `1px solid ${theme.palette.divider}`
}))

const CustomSelectItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  color: theme.palette.success.main,
  backgroundColor: 'transparent !important',
  '&:hover': { backgroundColor: `${alpha(theme.palette.success.main, 0.1)} !important` }
}))

const now = new Date()
const tomorrowDate = now.setDate(now.getDate() + 7)

const AddCard = (props: Props) => {
  // ** Props
  const { clients, invoiceNumber, selectedClient, setSelectedClient, toggleAddCustomerDrawer } = props

  // ** States
  const [count, setCount] = useState<number>(1)
  const [selected, setSelected] = useState<string>('')
  const [issueDate, setIssueDate] = useState<DateType>(new Date())
  const [dueDate, setDueDate] = useState<DateType>(new Date(tomorrowDate))

  // ** Hook
  const theme = useTheme()

  // ** Deletes form
  const deleteForm = (e: SyntheticEvent) => {
    e.preventDefault()

    // @ts-ignore
    e.target.closest('.repeater-wrapper').remove()
  }

  // ** Handle Invoice To Change
  const handleInvoiceChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value)
    if (clients !== undefined) {
      setSelectedClient(clients.filter(i => i.name === event.target.value)[0])
    }
  }

  const handleAddNewCustomer = () => {
    toggleAddCustomerDrawer()
  }

  return (
    <Card>
      <CardContent>
        <Grid container sx={{ p: { sm: 4, xs: 0 }, pb: '0 !important' }}>
          <Grid item xl={6} xs={12} sx={{ mb: { xl: 0, xs: 6 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
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
              <div>
                <Typography sx={{ mb: 1, color: 'text.secondary' }}>Office 149, 450 South Brand Brooklyn</Typography>
                <Typography sx={{ mb: 1, color: 'text.secondary' }}>San Diego County, CA 91905, USA</Typography>
                <Typography sx={{ color: 'text.secondary' }}>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xl={6} xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xl: 'flex-end', xs: 'flex-start' } }}>
              <Box
                sx={{
                  mb: 2,
                  display: 'flex',
                  flexDirection: { sm: 'row', xs: 'column' },
                  alignItems: { sm: 'center', xs: 'flex-start' }
                }}
              >
                <Typography variant='h5' sx={{ mr: 2, mb: { sm: 0, xs: 3 }, width: '105px' }}>
                  Invoice
                </Typography>
                <TextField
                  size='small'
                  value={invoiceNumber}
                  sx={{ width: '150px' }}
                  InputProps={{
                    disabled: true,
                    startAdornment: <InputAdornment position='start'>#</InputAdornment>
                  }}
                />
              </Box>
              <Box
                sx={{
                  mb: 2,
                  display: 'flex',
                  mt: { sm: 0, xs: 2 },
                  flexDirection: { sm: 'row', xs: 'column' },
                  alignItems: { sm: 'center', xs: 'flex-start' }
                }}
              >
                <Typography sx={{ mr: 3, mb: { sm: 0, xs: 3 }, color: 'text.secondary', width: '100px' }}>
                  Date Issued:
                </Typography>
                <DatePicker
                  id='issue-date'
                  selected={issueDate}
                  customInput={<CustomInput />}
                  onChange={(date: Date) => setIssueDate(date)}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  mt: { sm: 0, xs: 2 },
                  flexDirection: { sm: 'row', xs: 'column' },
                  alignItems: { sm: 'center', xs: 'flex-start' }
                }}
              >
                <Typography sx={{ mr: 3, mb: { sm: 0, xs: 3 }, color: 'text.secondary', width: '100px' }}>
                  Date Due:
                </Typography>
                <DatePicker
                  id='due-date'
                  selected={dueDate}
                  customInput={<CustomInput />}
                  onChange={(date: Date) => setDueDate(date)}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>

      <Divider
        sx={{ mt: theme => `${theme.spacing(1.25)} !important`, mb: theme => `${theme.spacing(4)} !important` }}
      />

      <CardContent>
        <Grid container sx={{ px: { sm: 4, xs: 0 } }}>
          <Grid item xs={12} sm={6} sx={{ mb: { lg: 0, xs: 6 } }}>
            <Typography sx={{ mb: 4, fontWeight: 500 }}>Invoice To:</Typography>
            <Select size='small' value={selected} onChange={handleInvoiceChange} sx={{ mb: 4, width: '200px' }}>
              <CustomSelectItem value='' onClick={handleAddNewCustomer}>
                <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main', '& svg': { mr: 2 } }}>
                  <Icon icon='bx:plus' fontSize={20} />
                  Add New Customer
                </Box>
              </CustomSelectItem>
              {clients !== undefined &&
                clients.map(client => (
                  <MenuItem key={client.name} value={client.name}>
                    {client.name}
                  </MenuItem>
                ))}
            </Select>
            {selectedClient !== null && selectedClient !== undefined ? (
              <div>
                <Typography sx={{ mb: 1, color: 'text.secondary' }}>{selectedClient.company}</Typography>
                <Typography sx={{ mb: 1, color: 'text.secondary' }}>{selectedClient.address}</Typography>
                <Typography sx={{ mb: 1, color: 'text.secondary' }}>{selectedClient.contact}</Typography>
                <Typography sx={{ mb: 1, color: 'text.secondary' }}>{selectedClient.companyEmail}</Typography>
              </div>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: ['flex-start', 'flex-end'] }}>
            <div>
              <Typography sx={{ mb: 4, color: 'text.secondary', fontWeight: 500 }}>Bill To:</Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <MUITableCell sx={{ pb: '0 !important' }}>Total Due:</MUITableCell>
                      <MUITableCell sx={{ pb: '0 !important' }}>$12,110.55</MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell sx={{ pb: '0 !important' }}>Bank name:</MUITableCell>
                      <MUITableCell sx={{ pb: '0 !important' }}>American Bank</MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell sx={{ pb: '0 !important' }}>Country:</MUITableCell>
                      <MUITableCell sx={{ pb: '0 !important' }}>United States</MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell sx={{ pb: '0 !important' }}>IBAN:</MUITableCell>
                      <MUITableCell sx={{ pb: '0 !important' }}>ETD95476213874685</MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>SWIFT code:</MUITableCell>
                      <MUITableCell>BR91905</MUITableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>
        </Grid>
      </CardContent>

      <Divider
        sx={{ mt: theme => `${theme.spacing(3.5)} !important`, mb: theme => `${theme.spacing(2.5)} !important` }}
      />

      <RepeaterWrapper>
        <Repeater count={count}>
          {(i: number) => {
            const Tag = i === 0 ? Box : Collapse

            return (
              <Tag key={i} className='repeater-wrapper' {...(i !== 0 ? { in: true } : {})}>
                <Grid container>
                  <RepeatingContent item xs={12}>
                    <Grid container sx={{ py: 4, width: '100%', pr: { lg: 0, xs: 4 } }}>
                      <Grid item lg={6} md={5} xs={12} sx={{ px: 4, my: { lg: 0, xs: 2 } }}>
                        <Typography className='col-title' sx={{ mb: { md: 2, xs: 0 } }}>
                          Item
                        </Typography>
                        <Select fullWidth size='small' defaultValue='App Design'>
                          <MenuItem value='App Design'>App Design</MenuItem>
                          <MenuItem value='App Customization'>App Customization</MenuItem>
                          <MenuItem value='ABC Template'>ABC Template</MenuItem>
                          <MenuItem value='App Development'>App Development</MenuItem>
                        </Select>
                        <TextField
                          rows={2}
                          fullWidth
                          multiline
                          size='small'
                          sx={{ mt: 2 }}
                          defaultValue='Customization & Bug Fixes'
                        />
                      </Grid>
                      <Grid item lg={2} md={3} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                        <Typography className='col-title' sx={{ mb: { md: 2, xs: 0 } }}>
                          Cost
                        </Typography>
                        <TextField
                          size='small'
                          type='number'
                          placeholder='24'
                          defaultValue='24'
                          InputProps={{ inputProps: { min: 0 } }}
                        />
                        <Box sx={{ mt: 2 }}>
                          <Typography component='span' sx={{ color: 'text.secondary' }}>
                            Discount:
                          </Typography>{' '}
                          <Typography component='span' sx={{ color: 'text.secondary' }}>
                            0%
                          </Typography>
                          <Tooltip title='Tax 1' placement='top'>
                            <Typography component='span' sx={{ mx: 2, color: 'text.secondary' }}>
                              0%
                            </Typography>
                          </Tooltip>
                          <Tooltip title='Tax 2' placement='top'>
                            <Typography component='span' sx={{ color: 'text.secondary' }}>
                              0%
                            </Typography>
                          </Tooltip>
                        </Box>
                      </Grid>
                      <Grid item lg={2} md={2} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                        <Typography className='col-title' sx={{ mb: { md: 2, xs: 0 } }}>
                          Hours
                        </Typography>
                        <TextField
                          size='small'
                          type='number'
                          placeholder='1'
                          defaultValue='1'
                          InputProps={{ inputProps: { min: 0 } }}
                        />
                      </Grid>
                      <Grid item lg={2} md={1} xs={12} sx={{ px: 4, my: { lg: 0 }, mt: 2 }}>
                        <Typography className='col-title' sx={{ mb: { md: 2, xs: 0 } }}>
                          Price
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>$24.00</Typography>
                      </Grid>
                    </Grid>
                    <InvoiceAction>
                      <IconButton size='small' onClick={deleteForm}>
                        <Icon icon='bx:x' fontSize={20} />
                      </IconButton>
                    </InvoiceAction>
                  </RepeatingContent>
                </Grid>
              </Tag>
            )
          }}
        </Repeater>

        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={12} sx={{ px: 0 }}>
            <Button size='small' variant='contained' onClick={() => setCount(count + 1)}>
              Add Item
            </Button>
          </Grid>
        </Grid>
      </RepeaterWrapper>

      <Divider sx={{ mt: '0 !important', mb: theme => `${theme.spacing(2.5)} !important` }} />
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={9} sx={{ order: { sm: 1, xs: 2 } }}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
              <InputLabel
                htmlFor='salesperson-input'
                sx={{
                  mr: 12,
                  fontWeight: 600,
                  fontSize: '.75rem',
                  color: 'text.primary',
                  textTransform: 'uppercase'
                }}
              >
                Salesperson:
              </InputLabel>
              <TextField id='salesperson-input' size='small' placeholder='Tommy Shelby' />
            </Box>
            <TextField size='small' placeholder='Thanks for your business' />
          </Grid>
          <Grid item xs={12} sm={3} sx={{ mb: { sm: 0, xs: 4 }, order: { sm: 2, xs: 1 } }}>
            <CalcWrapper>
              <Typography sx={{ color: 'text.secondary' }}>Subtotal:</Typography>
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$00.00</Typography>
            </CalcWrapper>
            <CalcWrapper>
              <Typography sx={{ color: 'text.secondary' }}>Discount:</Typography>
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$00.00</Typography>
            </CalcWrapper>
            <CalcWrapper>
              <Typography sx={{ color: 'text.secondary' }}>Tax:</Typography>
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$00.00</Typography>
            </CalcWrapper>
            <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
            <CalcWrapper>
              <Typography sx={{ color: 'text.secondary' }}>Total:</Typography>
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$00.00</Typography>
            </CalcWrapper>
          </Grid>
        </Grid>
        <Divider
          sx={{ mt: theme => `${theme.spacing(10)} !important`, mb: theme => `${theme.spacing(1)} !important` }}
        />
      </CardContent>

      <CardContent>
        <InputLabel
          htmlFor='invoice-note'
          sx={{ mb: 2, fontSize: '.75rem', fontWeight: 600, color: 'text.primary', textTransform: 'uppercase' }}
        >
          Note:
        </InputLabel>
        <TextField rows={2} fullWidth multiline id='invoice-note' placeholder='Thank You!' />
      </CardContent>
    </Card>
  )
}

export default AddCard
