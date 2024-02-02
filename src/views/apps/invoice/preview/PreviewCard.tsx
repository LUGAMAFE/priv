// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { TableCellBaseProps } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Types
import LogoIcon from 'src/@core/components/logo-icon'
import { SingleInvoiceType } from 'src/types/apps/invoiceTypes'

interface Props {
  data: SingleInvoiceType
}

const MUITableCell = styled(TableCell)<TableCellBaseProps>(({ theme }) => ({
  borderBottom: 0,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  paddingTop: `${theme.spacing(1)} !important`,
  paddingBottom: `${theme.spacing(2)} !important`
}))

const CalcWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2)
  }
}))

const PreviewCard = ({ data }: Props) => {
  // // ** Hook
  // const theme = useTheme()

  if (data) {
    return (
      <Card>
        <CardContent>
          <Grid container sx={{ p: { sm: 4, xs: 0 } }}>
            <Grid item sm={6} xs={12}>
              <Box sx={{ display: 'flex', flexDirection: 'column', mb: { sm: 0, xs: 6 } }}>
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
            <Grid item sm={6} xs={12}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' } }}>
                <Table sx={{ maxWidth: '200px' }}>
                  <TableBody>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='h5'>Invoice</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='h5'>{`#${data.invoice.id}`}</Typography>
                      </MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>
                        <Typography sx={{ color: 'text.secondary' }}>Date Issued:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>
                          {data.invoice.issuedDate}
                        </Typography>
                      </MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>
                        <Typography sx={{ color: 'text.secondary' }}>Date Due:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>
                          {data.invoice.dueDate}
                        </Typography>
                      </MUITableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Grid>
          </Grid>
        </CardContent>

        <Divider sx={{ my: '0 !important' }} />

        <CardContent>
          <Grid container sx={{ p: { sm: 4, xs: 0 }, pb: theme => `${theme.spacing(1)} !important` }}>
            <Grid item xs={12} sm={6} sx={{ mb: { lg: 0, xs: 5 } }}>
              <Typography sx={{ mb: 4, fontWeight: 500 }}>Invoice To:</Typography>
              <Typography sx={{ mb: 1, color: 'text.secondary' }}>{data.invoice.name}</Typography>
              <Typography sx={{ mb: 1, color: 'text.secondary' }}>{data.invoice.company}</Typography>
              <Typography sx={{ mb: 1, color: 'text.secondary' }}>{data.invoice.address}</Typography>
              <Typography sx={{ mb: 1, color: 'text.secondary' }}>{data.invoice.contact}</Typography>
              <Typography sx={{ mb: 1, color: 'text.secondary' }}>{data.invoice.companyEmail}</Typography>
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
              sx={{
                display: 'flex',
                px: { sm: 4, xs: 0 },
                justifyContent: ['flex-start', 'flex-end']
              }}
            >
              <div>
                <Typography sx={{ mb: 4, color: 'text.secondary', fontWeight: 500 }}>Bill To:</Typography>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <MUITableCell sx={{ pb: '0 !important' }}>Total Due:</MUITableCell>
                        <MUITableCell sx={{ pb: '0 !important' }}>{data.paymentDetails.totalDue}</MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell sx={{ pb: '0 !important' }}>Bank name:</MUITableCell>
                        <MUITableCell sx={{ pb: '0 !important' }}>{data.paymentDetails.bankName}</MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell sx={{ pb: '0 !important' }}>Country:</MUITableCell>
                        <MUITableCell sx={{ pb: '0 !important' }}>{data.paymentDetails.country}</MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell sx={{ pb: '0 !important' }}>IBAN:</MUITableCell>
                        <MUITableCell sx={{ pb: '0 !important' }}>{data.paymentDetails.iban}</MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell>SWIFT code:</MUITableCell>
                        <MUITableCell>{data.paymentDetails.swiftCode}</MUITableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Grid>
          </Grid>
        </CardContent>

        <Divider sx={{ mb: '0 !important' }} />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ py: 2 }}>Item</TableCell>
                <TableCell sx={{ py: 2 }}>Description</TableCell>
                <TableCell sx={{ py: 2 }}>hours</TableCell>
                <TableCell sx={{ py: 2 }}>qty</TableCell>
                <TableCell sx={{ py: 2 }}>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>
                  Premium Branding Package
                </TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>Branding & Promotion</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>48</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>1</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>$32</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>Social Media</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>Social media templates</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>42</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>1</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>$28</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>Web Design</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>Web designing package</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>46</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>1</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>$24</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>SEO</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>
                  Search engine optimization
                </TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>40</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>1</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(2.75)} !important` }}>$22</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <CardContent>
          <Grid container sx={{ pt: 6, pb: 4 }}>
            <Grid item xs={12} sm={7} lg={9} sx={{ order: { sm: 1, xs: 2 } }}>
              <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ mr: 2, fontWeight: 600, color: 'text.secondary' }}>Salesperson:</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Tommy Shelby</Typography>
              </Box>

              <Typography sx={{ color: 'text.secondary' }}>Thanks for your business</Typography>
            </Grid>
            <Grid item xs={12} sm={5} lg={3} sx={{ mb: { sm: 0, xs: 6 }, order: { sm: 2, xs: 1 } }}>
              <CalcWrapper>
                <Typography sx={{ color: 'text.secondary' }}>Subtotal:</Typography>
                <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$154.25</Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography sx={{ color: 'text.secondary' }}>Discount:</Typography>
                <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$00.00</Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography sx={{ color: 'text.secondary' }}>Tax:</Typography>
                <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$50.00</Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography sx={{ color: 'text.secondary' }}>Total:</Typography>
                <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$204.25</Typography>
              </CalcWrapper>
            </Grid>
          </Grid>
        </CardContent>

        <Divider
          sx={{ mt: theme => `${theme.spacing(2)} !important`, mb: theme => `${theme.spacing(0.5)} !important` }}
        />

        <CardContent>
          <Typography sx={{ color: 'text.secondary' }}>
            <strong>Note:</strong> It was a pleasure working with you and your team. We hope you will keep us in mind
            for future freelance projects. Thank You!
          </Typography>
        </CardContent>
      </Card>
    )
  } else {
    return null
  }
}

export default PreviewCard
