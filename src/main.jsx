import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import './index.css'

function RouteMetaManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const isWashwalaRoute = pathname.startsWith('/washwala')
    const title = isWashwalaRoute
      ? 'Mr.WashWala - Premium Laundry Services'
      : 'Connect2future - Empowering Your Workforce'
    const iconHref = isWashwalaRoute ? '/favicon.svg' : '/images/C2FLogo.avif'
    const iconType = isWashwalaRoute ? 'image/svg+xml' : 'image/avif'

    document.title = title

    let favicon = document.querySelector("link[rel='icon']")
    if (!favicon) {
      favicon = document.createElement('link')
      favicon.setAttribute('rel', 'icon')
      document.head.appendChild(favicon)
    }

    favicon.setAttribute('type', iconType)
    favicon.setAttribute('href', iconHref)
  }, [pathname])

  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteMetaManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/washwala/*" element={<App />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
