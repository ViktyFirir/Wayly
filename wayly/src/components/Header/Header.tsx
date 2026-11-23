import { useLayoutEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png'
import search from '../../assets/icons/search.png'
import { menu } from '../../data/menu'
import type { MenuItem } from '../../types'
import './Header.css'

type LinksProps = {
  items: MenuItem[]
  current: string
  selected: string
  registerLink: (label: string, node: HTMLAnchorElement | null) => void
  onHover: (label: string | null) => void
  onSelect: (label: string) => void
}

function Links({
  items,
  current,
  selected,
  registerLink,
  onHover,
  onSelect,
}: LinksProps) {
  return (
    <div className="header__links">
      {items.map((item) => (
        <a
          key={item.label}
          ref={(node) => registerLink(item.label, node)}
          href="#"
          className={`header__link ${
            item.label === current ? 'header__link--current' : ''
          }`}
          aria-current={item.label === selected ? 'page' : undefined}
          onMouseEnter={() => onHover(item.label)}
          onMouseLeave={() => onHover(null)}
          onFocus={() => onHover(item.label)}
          onBlur={() => onHover(null)}
          onClick={(event) => {
            event.preventDefault()
            onSelect(item.label)
          }}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}

function Header() {
  const [selected, setSelected] = useState(
    () => menu.find((item) => item.active)?.label ?? menu[0].label,
  )
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

  useLayoutEffect(() => {
    const place = () => {
      const nav = navRef.current
      const indicator = indicatorRef.current
      const link = linkRefs.current.get(target)
      if (!nav || !indicator || !link) return

      const navBox = nav.getBoundingClientRect()
      const linkBox = link.getBoundingClientRect()

      indicator.style.width = `${linkBox.width}px`
      indicator.style.transform = `translate(${linkBox.left - navBox.left}px, ${
        linkBox.bottom - navBox.top + 4
      }px)`
    }

    place()
    // включаем анимацию только после первой установки, чтобы полоса не «влетала» при загрузке
    const frame = requestAnimationFrame(() =>
      indicatorRef.current?.classList.add('header__indicator--ready'),
    )

    window.addEventListener('resize', place)
    void document.fonts?.ready.then(place)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', place)
    }
  }, [target])

  const linksProps = {
    current: target,
    selected,
    registerLink,
    onHover: setHovered,
    onSelect: setSelected,
  }

  return (
    <header className="header">
      <nav className="header__nav" ref={navRef}>
        <Links items={menu.slice(0, 2)} {...linksProps} />

        <a href="#" className="header__brand">
          <img className="header__logo" src={logo} alt="Wayly" />
        </a>

        <Links items={menu.slice(2)} {...linksProps} />

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