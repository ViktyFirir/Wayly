import { Link } from 'react-router'
import './NotFound.css'

type NotFoundProps = {
  title: string
  text: string
}

function NotFound({ title, text }: NotFoundProps) {
  return (
    <main className="not-found">
      <h1 className="not-found__title">{title}</h1>
      <p className="not-found__text">{text}</p>
      <Link to="/tours" className="not-found__link">
        Вернуться в каталог
      </Link>
    </main>
  )
}

export default NotFound