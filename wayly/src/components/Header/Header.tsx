import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import logo from '../../assets/logo.png'
import search from '../../assets/icons/search.svg'
import { menu } from '../../data/menu'
import type { MenuItem } from '../../types'
import { preventDefault } from '../../utils/preventDefault'
import './Header.css'

type LinksProps = {
  items: MenuItem[]
  current: string | null
  selected: string | null
  registerLink: (label: string, node: HTMLAnchorElement | null) => void
  onHover: (label: string | null) => void
}

function Links({ items, current, selected, registerLink, onHover }: LinksProps) {
  return (
    <div className="header__links">
      {items.map((item) => {
        // тип указан явно: без него 'page' в объекте расширился бы до string
        const ariaCurrent: 'page' | undefined =
          item.label === selected ? 'page' : undefined
        const common = {
          ref: (node: HTMLAnchorElement | null) => registerLink(item.label, node),
          className: `header__link ${
            item.label === current ? 'header__link--current' : ''
          }`,
          'aria-current': ariaCurrent,
          onMouseEnter: () => onHover(item.label),
          onMouseLeave: () => onHover(null),
          onFocus: () => onHover(item.label),
          onBlur: () => onHover(null),
        }

        // ссылки без адреса пока ничего не делают
        return item.to === undefined ? (
          <a
            key={item.label}
            href="#"
            {...common}
            onClick={preventDefault}
          >
            {item.label}
          </a>
        ) : (
          <Link key={item.label} to={item.to} {...common}>
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}

const leftItems = menu.filter((item) => item.position === 'left')
const rightItems = menu.filter((item) => item.position === 'right')

// «Главная» активна только на «/», «Туры» — на «/tours» и внутри него
function isActive(to: string, pathname: string): boolean {
  return to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`)
}

function Header() {
  const { pathname } = useLocation()
  const selected =
    menu.find((item) => item.to !== undefined && isActive(item.to, pathname))
      ?.label ?? null
  const [hovered, setHovered] = useState<string | null>(null)

  const navRef = useRef<HTMLElement>(null)
  const indicatorRef = useRef<HTMLSpanElement>(null)
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>())

  // Полоса едет к наведённой ссылке, а когда курсор ушёл — возвращается к выбранной
  const target = hovered ?? selected

  const registerLink = (label: string, node: HTMLAnchorElement | null) => {
    if (node) linkRefs.current.set(label, node)
    else linkRefs.current.delete(label)
  }

  // актуальная функция расстановки полосы: её же вызывают resize и загрузка шрифтов
  const placeRef = useRef<() => void>(() => {})

  useLayoutEffect(() => {
    const place = () => {
      const nav = navRef.current
      const indicator = indicatorRef.current
      const link = target === null ? undefined : linkRefs.current.get(target)
      if (!nav || !indicator) return

      // на страницах без пункта меню (например, «не найдено») полоса скрыта
      indicator.style.opacity = link === undefined ? '0' : ''
      if (link === undefined) return

      const navBox = nav.getBoundingClientRect()
      const linkBox = link.getBoundingClientRect()

      indicator.style.width = `${linkBox.width}px`
      indicator.style.transform = `translate(${linkBox.left - navBox.left}px, ${
        linkBox.bottom - navBox.top + 4
      }px)`
    }

    placeRef.current = place
    place()
  }, [target])


  useEffect(() => {
    const place = () => placeRef.current()
    let active = true

    // включаем анимацию только после первой установки, чтобы полоса не «влетала» при загрузке
    const frame = requestAnimationFrame(() =>
      indicatorRef.current?.classList.add('header__indicator--ready'),
    )

    window.addEventListener('resize', place)
    void document.fonts.ready.then(() => {
      if (active) place()
    })

    return () => {
      active = false
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', place)
    }
  }, [])

  const linksProps = {
    current: target,
    selected,
    registerLink,
    onHover: setHovered,
  }

  return (
    <header className="header">
      <nav className="header__nav" ref={navRef}>
        <Links items={leftItems} {...linksProps} />

        <Link to="/" className="header__brand">
          <img className="header__logo" src={logo} alt="Wayly" />
        </Link>

        <Links items={rightItems} {...linksProps} />

        <span className="header__indicator" ref={indicatorRef} aria-hidden="true" />
      </nav>

      <button className="header__round" type="button" aria-label="Поиск">
        <img className="header__round-icon" src={search} alt="" />
      </button>

      <button className="header__login" type="button">
        Войти
      </button>
    </header>
  )
}

export default Header