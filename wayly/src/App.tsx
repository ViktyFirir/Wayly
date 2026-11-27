import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import BookingPage from './pages/BookingPage'
import CatalogPage from './pages/CatalogPage'
import NotFoundPage from './pages/NotFoundPage'
import TourPage from './pages/TourPage'

function App() {
  return (
    <div className="page">
      {/* Общий фон для каталога и баннера в подвале */}
      <div className="page__bg" aria-hidden="true">
        <img className="page__bg-image" src="/images/banner.jpg" alt="" />
      </div>

      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/tours" element={<CatalogPage />} />
        <Route path="/tours/:id" element={<TourPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App