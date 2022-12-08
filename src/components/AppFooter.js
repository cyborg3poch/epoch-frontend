import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://3poch.xyz" target="_blank" rel="noopener noreferrer">
          Epoch Trading
        </a>
        <span className="ms-1">&copy; 2022 All Rights Reserved.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://3poch.xyz" target="_blank" rel="noopener noreferrer">
          Tech @ Epoch
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
