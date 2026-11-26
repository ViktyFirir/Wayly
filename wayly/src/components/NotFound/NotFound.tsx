import { Link } from 'react-router'
import './NotFound.css'

type NotFoundProps = {
  title: string
  text: string
  /** куда ведёт ссылка под текстом; по умолчанию в каталог */
  linkTo?: string
  linkText?: string
}

function NotFound({
  title,
  text,
  linkTo = '/tours',
  linkText = 'Вернуться в каталог',
}: NotFoundProps) {
  return (
    <main className="not-found">
      <h1 className="not-found__title">{title}</h1>
      <p className="not-found__text">{text}</p>
      <Link to={linkTo} className="not-found__link">
        {linkText}
      </Link>
    </main>
  )
}

export default NotFound