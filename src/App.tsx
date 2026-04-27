import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/components/templates/LandingPage'
import { DownloadPage } from '@/components/templates/DownloadPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
  )
}
