import { Link } from 'react-router'
import logo from '../../assets/logo-footer.png'
import instagram from '../../assets/icons/instagram.svg'
import telegram from '../../assets/icons/telegram.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import { menu } from '../../data/menu'
import { preventDefault } from '../../utils/preventDefault'
import Banner from '../Banner/Banner'
import './Footer.css'

type Social = {
  label: string
  icon: string
}

const socials: Social[] = [
  { label: 'Telegram', icon: telegram },
  { label: 'Instagram', icon: instagram },
  { label: 'WhatsApp', icon: whatsapp },
]

function Footer() {
  return (
    <footer className="footer">
      <Banner />

      <div className="footer__bar">
        <div className="footer__top">
          <Link to="/" className="footer__brand">
            <img className="footer__logo" src={logo} alt="Wayly" />
          </Link>

          <nav className="footer__nav">
            {menu.map((item) =>
              item.to === undefined ? (
                <a
                  key={item.label}
                  href="#"
                  className="footer__link"
                  onClick={preventDefault}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.to} className="footer__link">
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="footer__socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                className="footer__social"
                aria-label={social.label}
                onClick={preventDefault}
              >
                <img className="footer__social-icon" src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>

        <p className="footer__copy">© 2026 Wayly. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer