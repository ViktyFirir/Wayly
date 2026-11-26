import NotFound from '../components/NotFound/NotFound'

function NotFoundPage() {
  return (
    <NotFound
      title="Страница не найдена"
      text="Такого адреса нет. Возможно, ссылка устарела или в ней опечатка."
    />
  )
}

export default NotFoundPage