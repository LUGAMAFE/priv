// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Utils Import
import { getDateRange } from 'src/@core/utils/get-daterange'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: 'short' })

const data: { invoices: InvoiceType[] } = {
  invoices: [
    {
      id: 4987,
      issuedDate: `13 ${currentMonth} ${now.getFullYear()}`,
      address: '7777 Mendez Plains',
      company: 'Hall-Robbins PLC',
      companyEmail: 'don85@johnson.com',
      country: 'USA',
      contact: '(616) 865-4180',
      name: 'Jordan Stevenson',
      service: 'Software Development',
      total: 3428,
      avatar: '',
      avatarColor: 'primary',
      invoiceStatus: 'Paid',
      balance: '$724',
      dueDate: `23 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 4988,
      issuedDate: `17 ${currentMonth} ${now.getFullYear()}`,
      address: '04033 Wesley Wall Apt. 961',
      company: 'Mccann LLC and Sons',
      companyEmail: 'brenda49@taylor.info',
      country: 'Haiti',
      contact: '(226) 204-8287',
      name: 'Stephanie Burns',
      service: 'UI/UX Design & Development',
      total: 5219,
      avatar: '/images/avatars/1.png',
      invoiceStatus: 'Pending',
      balance: 0,
      dueDate: `15 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Stripe'
    },
    {
      id: 4989,
      issuedDate: `19 ${currentMonth} ${now.getFullYear()}`,
      address: '5345 Robert Squares',
      company: 'Leonard-Garcia and Sons',
      companyEmail: 'smithtiffany@powers.com',
      country: 'Denmark',
      contact: '(955) 676-1076',
      name: 'Tony Herrera',
      service: 'Unlimited Extended License',
      total: 3719,
      avatar: '/images/avatars/2.png',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: `03 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 4990,
      issuedDate: `06 ${currentMonth} ${now.getFullYear()}`,
      address: '19022 Clark Parks Suite 149',
      company: 'Smith, Miller and Henry LLC',
      companyEmail: 'mejiageorge@lee-perez.com',
      country: 'Cambodia',
      contact: '(832) 323-6914',
      name: 'Kevin Patton',
      service: 'Software Development',
      total: 4749,
      avatar: '/images/avatars/3.png',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: `11 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Stripe'
    },
    {
      id: 4991,
      issuedDate: `08 ${currentMonth} ${now.getFullYear()}`,
      address: '8534 Saunders Hill Apt. 583',
      company: 'Garcia-Cameron and Sons',
      companyEmail: 'brandon07@pierce.com',
      country: 'Martinique',
      contact: '(970) 982-3353',
      name: 'Mrs. Julie Donovan MD',
      service: 'UI/UX Design & Development',
      total: 4056,
      avatar: '/images/avatars/4.png',
      invoiceStatus: 'Draft',
      balance: '$815',
      dueDate: `30 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 4992,
      issuedDate: `26 ${currentMonth} ${now.getFullYear()}`,
      address: '661 Perez Run Apt. 778',
      company: 'Burnett-Young PLC',
      companyEmail: 'guerrerobrandy@beasley-harper.com',
      country: 'Botswana',
      contact: '(511) 938-9617',
      name: 'Amanda Phillips',
      service: 'UI/UX Design & Development',
      total: 2771,
      avatar: '',
      avatarColor: 'secondary',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: `24 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Transferencia Bancaria'
    },
    {
      id: 4993,
      issuedDate: `17 ${currentMonth} ${now.getFullYear()}`,
      address: '074 Long Union',
      company: 'Wilson-Lee LLC',
      companyEmail: 'williamshenry@moon-smith.com',
      country: 'Montserrat',
      contact: '(504) 859-2893',
      name: 'Christina Collier',
      service: 'UI/UX Design & Development',
      total: 2713,
      avatar: '',
      avatarColor: 'success',
      invoiceStatus: 'Draft',
      balance: '$407',
      dueDate: `22 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 4994,
      issuedDate: `11 ${currentMonth} ${now.getFullYear()}`,
      address: '5225 Ford Cape Apt. 840',
      company: 'Schwartz, Henry and Rhodes Group',
      companyEmail: 'margaretharvey@russell-murray.com',
      country: 'Oman',
      contact: '(758) 403-7718',
      name: 'David Flores',
      service: 'Template Customization',
      total: 4309,
      avatar: '/images/avatars/5.png',
      invoiceStatus: 'Paid',
      balance: '-$205',
      dueDate: `10 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 4995,
      issuedDate: `26 ${currentMonth} ${now.getFullYear()}`,
      address: '23717 James Club Suite 277',
      company: 'Henderson-Holder PLC',
      companyEmail: 'dianarodriguez@villegas.com',
      country: 'Cambodia',
      contact: '(292) 873-8254',
      name: 'Valerie Perez',
      service: 'Software Development',
      total: 3367,
      avatar: '/images/avatars/6.png',
      invoiceStatus: 'Pending',
      balance: 0,
      dueDate: `24 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Transferencia Bancaria'
    },
    {
      id: 4996,
      issuedDate: `15 ${currentMonth} ${now.getFullYear()}`,
      address: '4528 Myers Gateway',
      company: 'Page-Wise PLC',
      companyEmail: 'bwilson@norris-brock.com',
      country: 'Guam',
      contact: '(956) 803-2008',
      name: 'Susan Dickerson',
      service: 'Software Development',
      total: 4776,
      avatar: '/images/avatars/7.png',
      invoiceStatus: 'Pending',
      balance: '$305',
      dueDate: `02 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 4997,
      issuedDate: `27 ${currentMonth} ${now.getFullYear()}`,
      address: '4234 Mills Club Suite 107',
      company: 'Turner PLC Inc',
      companyEmail: 'markcampbell@bell.info',
      country: 'United States Virgin Islands',
      contact: '(716) 962-8635',
      name: 'Kelly Smith',
      service: 'Unlimited Extended License',
      total: 3789,
      avatar: '/images/avatars/8.png',
      invoiceStatus: 'Partial Payment',
      balance: '$666',
      dueDate: `18 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 4998,
      issuedDate: `31 ${currentMonth} ${now.getFullYear()}`,
      address: '476 Keith Meadow',
      company: 'Levine-Dorsey PLC',
      companyEmail: 'mary61@rosario.com',
      country: 'Syrian Arab Republic',
      contact: '(523) 449-0782',
      name: 'Jamie Jones',
      service: 'Unlimited Extended License',
      total: 5200,
      avatar: '/images/avatars/1.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: `17 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 4999,
      issuedDate: `14 ${currentMonth} ${now.getFullYear()}`,
      address: '56381 Ashley Village Apt. 332',
      company: 'Hall, Thompson and Ramirez LLC',
      companyEmail: 'sean22@cook.com',
      country: 'Ukraine',
      contact: '(583) 470-8356',
      name: 'Ruben Garcia',
      service: 'Software Development',
      total: 4558,
      avatar: '/images/avatars/2.png',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: `01 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5000,
      issuedDate: `21 ${currentMonth} ${now.getFullYear()}`,
      address: '6946 Gregory Plaza Apt. 310',
      company: 'Lambert-Thomas Group',
      companyEmail: 'mccoymatthew@lopez-jenkins.net',
      country: 'Vanuatu',
      contact: '(366) 906-6467',
      name: 'Ryan Meyer',
      service: 'Template Customization',
      total: 3503,
      avatar: '/images/avatars/3.png',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: `22 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5001,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      address: '64351 Andrew Lights',
      company: 'Gregory-Haynes PLC',
      companyEmail: 'novakshannon@mccarty-murillo.com',
      country: 'Romania',
      contact: '(320) 616-3915',
      name: 'Valerie Valdez',
      service: 'Unlimited Extended License',
      total: 5285,
      avatar: '/images/avatars/4.png',
      invoiceStatus: 'Partial Payment',
      balance: '-$202',
      dueDate: `02 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5002,
      issuedDate: `21 ${currentMonth} ${now.getFullYear()}`,
      address: '5702 Sarah Heights',
      company: 'Wright-Schmidt LLC',
      companyEmail: 'smithrachel@davis-rose.net',
      country: 'Costa Rica',
      contact: '(435) 899-1963',
      name: 'Melissa Wheeler',
      service: 'UI/UX Design & Development',
      total: 3668,
      avatar: '/images/avatars/5.png',
      invoiceStatus: 'Pending',
      balance: '$731',
      dueDate: `15 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5003,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      address: '668 Robert Flats',
      company: 'Russell-Abbott Ltd',
      companyEmail: 'scott96@mejia.net',
      country: 'Congo',
      contact: '(254) 399-4728',
      name: 'Alan Jimenez',
      service: 'Unlimited Extended License',
      total: 4372,
      avatar: '',
      avatarColor: 'warning',
      invoiceStatus: 'Sent',
      balance: '-$344',
      dueDate: `17 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5004,
      issuedDate: `27 ${currentMonth} ${now.getFullYear()}`,
      address: '55642 Chang Extensions Suite 373',
      company: 'Williams LLC Inc',
      companyEmail: 'cramirez@ross-bass.biz',
      country: 'Saint Pierre and Miquelon',
      contact: '(648) 500-4338',
      name: 'Jennifer Morris',
      service: 'Template Customization',
      total: 3198,
      avatar: '/images/avatars/6.png',
      invoiceStatus: 'Partial Payment',
      balance: '-$253',
      dueDate: `16 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5005,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      address: '56694 Eric Orchard',
      company: 'Hudson, Bell and Phillips PLC',
      companyEmail: 'arielberg@wolfe-smith.com',
      country: 'Uruguay',
      contact: '(896) 544-3796',
      name: 'Timothy Stevenson',
      service: 'Unlimited Extended License',
      total: 5293,
      avatar: '',
      avatarColor: 'error',
      invoiceStatus: 'Past Due',
      balance: 0,
      dueDate: `01 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5006,
      issuedDate: `10 ${currentMonth} ${now.getFullYear()}`,
      address: '3727 Emma Island Suite 879',
      company: 'Berry, Gonzalez and Heath Inc',
      companyEmail: 'yrobinson@nichols.com',
      country: 'Israel',
      contact: '(236) 784-5142',
      name: 'Erik Hayden',
      service: 'Template Customization',
      total: 5612,
      avatar: '/images/avatars/7.png',
      invoiceStatus: 'Pending',
      balance: '$883',
      dueDate: `12 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5007,
      issuedDate: `01 ${currentMonth} ${now.getFullYear()}`,
      address: '953 Miller Common Suite 580',
      company: 'Martinez, Fuller and Chavez and Sons',
      companyEmail: 'tatejennifer@allen.net',
      country: 'Cook Islands',
      contact: '(436) 717-2419',
      name: 'Katherine Kennedy',
      service: 'Software Development',
      total: 2230,
      avatar: '/images/avatars/8.png',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: `19 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5008,
      issuedDate: `22 ${currentMonth} ${now.getFullYear()}`,
      address: '808 Sullivan Street Apt. 135',
      company: 'Wilson and Sons LLC',
      companyEmail: 'gdurham@lee.com',
      country: 'Nepal',
      contact: '(489) 946-3041',
      name: 'Monica Fuller',
      service: 'Unlimited Extended License',
      total: 2032,
      avatar: '/images/avatars/1.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: `30 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5009,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      address: '25135 Christopher Creek',
      company: 'Hawkins, Johnston and Mcguire PLC',
      companyEmail: 'jenny96@lawrence-thompson.com',
      country: 'Kiribati',
      contact: '(274) 246-3725',
      name: 'Stacey Carter',
      service: 'UI/UX Design & Development',
      total: 3128,
      avatar: '/images/avatars/2.png',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: `10 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5010,
      issuedDate: `06 ${currentMonth} ${now.getFullYear()}`,
      address: '81285 Rebecca Estates Suite 046',
      company: 'Huynh-Mills and Sons',
      companyEmail: 'jgutierrez@jackson.com',
      country: 'Swaziland',
      contact: '(258) 211-5970',
      name: 'Chad Davis',
      service: 'Software Development',
      total: 2060,
      avatar: '/images/avatars/3.png',
      invoiceStatus: 'Pending',
      balance: 0,
      dueDate: `08 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5011,
      issuedDate: `01 ${currentMonth} ${now.getFullYear()}`,
      address: '3102 Briggs Dale Suite 118',
      company: 'Jones-Cooley and Sons',
      companyEmail: 'hunter14@jones.com',
      country: 'Congo',
      contact: '(593) 965-4100',
      name: 'Chris Reyes',
      service: 'UI/UX Design & Development',
      total: 4077,
      avatar: '',
      avatarColor: 'info',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: `01 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5012,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      address: '811 Jill Skyway',
      company: 'Jones PLC Ltd',
      companyEmail: 'pricetodd@johnson-jenkins.com',
      country: 'Brazil',
      contact: '(585) 829-2603',
      name: 'Laurie Summers',
      service: 'Template Customization',
      total: 2872,
      avatar: '/images/avatars/4.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: `18 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5013,
      issuedDate: `05 ${currentMonth} ${now.getFullYear()}`,
      address: '2223 Brandon Inlet Suite 597',
      company: 'Jordan, Gomez and Ross Group',
      companyEmail: 'perrydavid@chapman-rogers.com',
      country: 'Congo',
      contact: '(527) 351-5517',
      name: 'Lindsay Wilson',
      service: 'Software Development',
      total: 3740,
      avatar: '/images/avatars/5.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: `01 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5014,
      issuedDate: `01 ${currentMonth} ${now.getFullYear()}`,
      address: '08724 Barry Causeway',
      company: 'Gonzalez, Moody and Glover LLC',
      companyEmail: 'leahgriffin@carpenter.com',
      country: 'Equatorial Guinea',
      contact: '(628) 903-0132',
      name: 'Jenna Castro',
      service: 'Unlimited Extended License',
      total: 3623,
      avatar: '',
      avatarColor: 'primary',
      invoiceStatus: 'Pending',
      balance: 0,
      dueDate: `23 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5015,
      issuedDate: `16 ${currentMonth} ${now.getFullYear()}`,
      address: '073 Holt Ramp Apt. 755',
      company: 'Ashley-Pacheco Ltd',
      companyEmail: 'esparzadaniel@allen.com',
      country: 'Seychelles',
      contact: '(847) 396-9904',
      name: 'Wendy Weber',
      service: 'Software Development',
      total: 2477,
      avatar: '/images/avatars/6.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: `01 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5016,
      issuedDate: `24 ${currentMonth} ${now.getFullYear()}`,
      address: '984 Sherry Trail Apt. 953',
      company: 'Berry PLC Group',
      companyEmail: 'todd34@owens-morgan.com',
      country: 'Ireland',
      contact: '(852) 249-4539',
      name: 'April Yates',
      service: 'Unlimited Extended License',
      total: 3904,
      avatar: '',
      avatarColor: 'secondary',
      invoiceStatus: 'Paid',
      balance: '$951',
      dueDate: `30 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5017,
      issuedDate: `24 ${currentMonth} ${now.getFullYear()}`,
      address: '093 Jonathan Camp Suite 953',
      company: 'Allen Group Ltd',
      companyEmail: 'roydavid@bailey.com',
      country: 'Netherlands',
      contact: '(917) 984-2232',
      name: 'Daniel Marshall PhD',
      service: 'UI/UX Design & Development',
      total: 3102,
      avatar: '/images/avatars/7.png',
      invoiceStatus: 'Partial Payment',
      balance: '-$153',
      dueDate: `25 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5018,
      issuedDate: `29 ${currentMonth} ${now.getFullYear()}`,
      address: '4735 Kristie Islands Apt. 259',
      company: 'Chapman-Schneider LLC',
      companyEmail: 'baldwinjoel@washington.com',
      country: 'Cocos (Keeling) Islands',
      contact: '(670) 409-3703',
      name: 'Randy Rich',
      service: 'UI/UX Design & Development',
      total: 2483,
      avatar: '/images/avatars/8.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: `10 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5019,
      issuedDate: `07 ${currentMonth} ${now.getFullYear()}`,
      address: '92218 Andrew Radial',
      company: 'Mcclure, Hernandez and Simon Ltd',
      companyEmail: 'psmith@morris.info',
      country: 'Macao',
      contact: '(646) 263-0257',
      name: 'Mrs. Jodi Chapman',
      service: 'Unlimited Extended License',
      total: 2825,
      avatar: '/images/avatars/1.png',
      invoiceStatus: 'Partial Payment',
      balance: '-$459',
      dueDate: `14 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5020,
      issuedDate: `10 ${currentMonth} ${now.getFullYear()}`,
      address: '2342 Michelle Valley',
      company: 'Hamilton PLC and Sons',
      companyEmail: 'lori06@morse.com',
      country: 'Somalia',
      contact: '(751) 213-4288',
      name: 'Steven Myers',
      service: 'Unlimited Extended License',
      total: 2029,
      avatar: '/images/avatars/2.png',
      invoiceStatus: 'Past Due',
      balance: 0,
      dueDate: `28 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5021,
      issuedDate: `02 ${currentMonth} ${now.getFullYear()}`,
      address: '16039 Brittany Terrace Apt. 128',
      company: 'Silva-Reeves LLC',
      companyEmail: 'zpearson@miller.com',
      country: 'Slovakia (Slovak Republic)',
      contact: '(655) 649-7872',
      name: 'Charles Alexander',
      service: 'Software Development',
      total: 3208,
      avatar: '',
      avatarColor: 'success',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: `06 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    },
    {
      id: 5022,
      issuedDate: `02 ${currentMonth} ${now.getFullYear()}`,
      address: '37856 Olsen Lakes Apt. 852',
      company: 'Solis LLC Ltd',
      companyEmail: 'strongpenny@young.net',
      country: 'Brazil',
      contact: '(402) 935-0735',
      name: 'Elizabeth Jones',
      service: 'Software Development',
      total: 3077,
      avatar: '',
      avatarColor: 'error',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: `09 ${currentMonth} ${now.getFullYear()}`,
      gateWay: 'Paypal'
    }
  ]
}

// ------------------------------------------------
// GET: Return Invoice List
// ------------------------------------------------
mock.onGet('/apps/invoice/invoices').reply(config => {
  const { q = '', status = '', dates = [] } = config.params ?? ''
  const queryLowered = q.toLowerCase()
  const filteredData = data.invoices.filter(invoice => {
    if (dates.length) {
      const [start, end] = dates
      const filtered: number[] = []
      const range = getDateRange(start, end)
      const invoiceDate = new Date(invoice.issuedDate)

      range.filter(date => {
        const rangeDate = new Date(date)
        if (
          invoiceDate.getFullYear() === rangeDate.getFullYear() &&
          invoiceDate.getDate() === rangeDate.getDate() &&
          invoiceDate.getMonth() === rangeDate.getMonth()
        ) {
          filtered.push(invoice.id)
        }
      })

      if (filtered.length && filtered.includes(invoice.id)) {
        return (
          (invoice.companyEmail.toLowerCase().includes(queryLowered) ||
            invoice.name.toLowerCase().includes(queryLowered) ||
            String(invoice.id).toLowerCase().includes(queryLowered) ||
            String(invoice.total).toLowerCase().includes(queryLowered) ||
            String(invoice.balance).toLowerCase().includes(queryLowered) ||
            invoice.dueDate.toLowerCase().includes(queryLowered)) &&
          invoice.invoiceStatus.toLowerCase() === (status.toLowerCase() || invoice.invoiceStatus.toLowerCase())
        )
      }
    } else {
      return (
        (invoice.companyEmail.toLowerCase().includes(queryLowered) ||
          invoice.name.toLowerCase().includes(queryLowered) ||
          String(invoice.id).toLowerCase().includes(queryLowered) ||
          String(invoice.total).toLowerCase().includes(queryLowered) ||
          String(invoice.balance).toLowerCase().includes(queryLowered) ||
          invoice.dueDate.toLowerCase().includes(queryLowered)) &&
        invoice.invoiceStatus.toLowerCase() === (status.toLowerCase() || invoice.invoiceStatus.toLowerCase())
      )
    }
  })

  return [
    200,
    {
      params: config.params,
      allData: data.invoices,
      invoices: filteredData,
      total: filteredData.length
    }
  ]
})

// ------------------------------------------------
// GET: Return Single Invoice
// ------------------------------------------------
mock.onGet('apps/invoice/single-invoice').reply(config => {
  const { id } = config.params

  const invoiceData = data.invoices.filter(invoice => invoice.id === parseInt(id, 10))
  if (invoiceData.length) {
    const responseData = {
      invoice: invoiceData[0],
      paymentDetails: {
        totalDue: '$12,110.55',
        bankName: 'American Bank',
        country: 'United States',
        iban: 'ETD95476213874685',
        swiftCode: 'BR91905'
      }
    }

    return [200, responseData]
  } else {
    return [404, { message: 'Unable to find the requested invoice!' }]
  }
})

// ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------
mock.onGet('/apps/invoice/clients').reply(() => {
  const clients = data.invoices.map(invoice => {
    const { address, company, companyEmail, country, contact, name } = invoice

    return {
      name,
      address,
      company,
      country,
      contact,
      companyEmail
    }
  })

  return [200, clients.slice(0, 5)]
})

// ------------------------------------------------
// DELETE: Deletes Invoice
// ------------------------------------------------
mock.onDelete('/apps/invoice/delete').reply(config => {
  // Get invoice id from URL
  const invoiceId = Number(config.data)
  const invoiceIndex = data.invoices.findIndex(t => t.id === invoiceId)
  data.invoices.splice(invoiceIndex, 1)

  return [200]
})
