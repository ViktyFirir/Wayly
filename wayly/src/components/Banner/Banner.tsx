import arrow from '../../assets/icons/arrow-right.png'
import './Banner.css'

function Banner() {
  return (
    <section className="banner">
      <img className="banner__image" src="/images/banner.jpg" alt="" />

      <div className="banner__content">
        <p className="banner__label">Путешествуйте с Wayly</p>
        <h2 className="banner__title">Откройте новые горизонты</h2>
        <p className="banner__text">
          Планируйте путешествия, открывайте мир и создавайте незабываемые
          впечатления.
        </p>
        <a href="#" className="banner__btn">
          Начать путешествие
          <img src={arrow} alt="" width={16} />
        </a>
      </div>
    </section>
  )
}

export default Banner