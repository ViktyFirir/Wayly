import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CatalogPage from './pages/CatalogPage'

function App() {
  return (
    <div className="page">
      {/* Общий фон для каталога и баннера в подвале */}
      <div className="page__bg" aria-hidden="true">
        <img className="page__bg-image" src="/images/banner.jpg" alt="" />
      </div>

      <Header />
      <CatalogPage />
      <Footer />
    </div>
  )
}

export default App
