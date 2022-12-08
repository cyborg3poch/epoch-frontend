import React from 'react'

const Dashboard = React.lazy(() => import('./views/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/', name: 'Dashboard', element: Dashboard },
]

export default routes
