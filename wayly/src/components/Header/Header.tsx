import logo from '../../assets/logo.png'
import search from '../../assets/icons/search.png'
import { menu } from '../../data/menu'
import type { MenuItem } from '../../types'
import './Header.css'

type LinksProps = {
  items: MenuItem[]
}

function Links({ items }: LinksProps) {
  return (
    <div className="header__links">
      {items.map((item) => (
        <a
          key={item.label}
          href="#"
          className={`header__link ${item.active ? 'header__link--active' : ''}`}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Links items={menu.slice(0, 2)} />

        <a href="#" className="header__brand">
          <img className="header__logo" src={logo} alt="Wayly" />
        </a>

        <Links items={menu.slice(2)} />
      </nav>

      <button className="header__round" type="button" aria-label="Поиск">
        <img src={search} alt="" width={16} height={16} />
      </button>

      <button className="header__login" type="button">
        Войти
      </button>
    </header>
  )
}

export default Header