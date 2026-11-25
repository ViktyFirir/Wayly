import arrow from '../../assets/icons/arrow-right.svg'
import './Banner.css'

function Banner() {
  return (
    <section className="banner">
      <div className="banner__content">
        <p className="banner__label">Путешествуйте с Wayly</p>
        <h2 className="banner__title">Откройте новые горизонты</h2>
        <p className="banner__text">
          Планируйте путешествия, открывайте мир и создавайте незабываемые
          впечатления.
        </p>
        <a href="#" className="banner__btn">
          Начать путешествие
          <img className="banner__arrow" src={arrow} alt="" />
        </a>
      </div>
    </section>
  )
}

export default Banner