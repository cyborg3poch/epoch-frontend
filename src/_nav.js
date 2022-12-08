import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  
  cilSpeedometer,
  cilChartPie,
  cilWallet
  
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Dashboard',
    to: '/',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items :[
      {
        component: CNavItem,
        name: 'CeFi',
        to: '/',
        icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
      },{
        component: CNavItem,
        name: 'DeFi',
        to: '/',
        icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
      }

    ]
  },
  {
    component: CNavGroup,
    name: 'Wallets',
    to: '/',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    items :[
      {
        component: CNavItem,
        name: 'CeFi',
        to: '/',
        icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
      },{
        component: CNavItem,
        name: 'DeFi',
        to: '/',
        icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
      }

    ]
  }
  
]

export default _nav
