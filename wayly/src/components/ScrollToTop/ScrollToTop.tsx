import { useEffect } from 'react'
import { useLocation } from 'react-router'

// При смене адреса возвращает страницу в начало
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop