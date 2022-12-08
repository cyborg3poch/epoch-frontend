import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartDoughnut ,CChartLine} from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from '../assets/images/avatars/1.jpg'
import avatar2 from '../assets/images/avatars/2.jpg'
import avatar3 from '../assets/images/avatars/3.jpg'
import avatar4 from '../assets/images/avatars/4.jpg'
import avatar5 from '../assets/images/avatars/5.jpg'
import avatar6 from '../assets/images/avatars/6.jpg'




const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>

    <CRow>
      <CCol xs={6}>
      <CCard className="text-center mb-4">
    <CCardBody>
      <CCardTitle>Summary</CCardTitle>
      <CCardText>
        <h4>Portfolio Value</h4>
        <h2>$999,999<span className='text-success'>(+6.23%)</span></h2>
      </CCardText>
      <CButton href="#" className='mb-2'>Download PnL Report</CButton><br/>
      <CButton href="#">Download Wallet Activity Report</CButton>
    </CCardBody>
  </CCard>
      </CCol>
    <CCol xs={6}>
    <CCard className="mb-4">
          <CCardHeader>Historic PnL Report</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Portfolio Value',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [60,75,50,77,80,74,48],
                  },
                  {
                    label: 'PnL',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [50,45,37,22,15,30,29],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
    </CCol>


    </CRow>

    
      
      <CRow>
            <CCol xs={4}>
            <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol xs={12}>
              <h4 id="traffic" className="card-title mb-0">
                Token Wise Breakdown
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>

            </CCol>
           
          </CRow>
          <CRow>
            <CCol xs={12}>
            <CChartDoughnut
              data={{
                labels: ['BTC', 'ETH', 'USDC', 'USDT'],
                datasets: [
                  {
                    backgroundColor: ['#9575CD', '#5C6BC0', '#4A148C', '#FF80AB'],
                    data: [50, 20, 10, 20],
                  },
                ],
              }}
            />

            </CCol>
            </CRow>
         
        </CCardBody>
       
      </CCard>

            </CCol>

            <CCol xs={4}>
            <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol xs={12}>
              <h4 id="traffic" className="card-title mb-0">
                Segment Wise Breakdown
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>

            </CCol>
           
          </CRow>
          <CRow>
            <CCol xs={12}>
            <CChartDoughnut
              data={{
                labels: ['DeFi', 'Metaverse', 'Web3 Primitives'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
                    data: [70, 10, 20],
                  },
                ],
              }}
            />

            </CCol>
            </CRow>
         
        </CCardBody>
       
      </CCard>

            </CCol>

            <CCol xs={4}>
            <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol xs={12}>
              <h4 id="traffic" className="card-title mb-0">
               Chain Wise Breakdown
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>

            </CCol>
           
          </CRow>
          <CRow>
            <CCol xs={12}>
            <CChartDoughnut
              data={{
                labels: ['ETH', 'Polygon', 'Solana'],
                datasets: [
                  {
                    backgroundColor: ['#448AFF', '#A5D6A7', '#FFCCBC'],
                    data: [40, 40, 20],
                  },
                ],
              }}
            />

            </CCol>
            </CRow>
         
        </CCardBody>
       
      </CCard>

            </CCol>
      </CRow>

      

      

    

      
    </>
  )
}

export default Dashboard
