
export function pluralize(count: number, forms: [string, string, string]): string {
  const [one, few, many] = forms
  const last = count % 10
  const tail = count % 100

  if (last === 1 && tail !== 11) return one
  if (last >= 2 && last <= 4 && (tail < 12 || tail > 14)) return few

  return many
}