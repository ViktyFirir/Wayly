const formatter = new Intl.NumberFormat('ru-RU')


export function formatPrice(price: number): string {
  return `${formatter.format(price)}\u00A0BYN`
}