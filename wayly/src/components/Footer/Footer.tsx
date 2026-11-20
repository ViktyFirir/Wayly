import logo from '../../assets/logo-footer.png'
import instagram from '../../assets/icons/instagram.png'
import telegram from '../../assets/icons/telegram.svg'
import whatsapp from '../../assets/icons/whatsapp.png'
import { menu } from '../../data/menu'
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
          <a href="#" className="footer__brand">
            <img className="footer__logo" src={logo} alt="Wayly" />
          </a>

          <nav className="footer__nav">
            {menu.map((item) => (
              <a key={item.label} href="#" className="footer__link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                className="footer__social"
                aria-label={social.label}
              >
                <img src={social.icon} alt="" width={16} height={16} />
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