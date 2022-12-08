
import './App.css';
import React , {Suspense} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

function App() {
  return (
  <BrowserRouter>
  <Suspense fallback={loading}>
  <Routes>
           
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
  </Suspense>
  </BrowserRouter>
  );
}

export default App;
