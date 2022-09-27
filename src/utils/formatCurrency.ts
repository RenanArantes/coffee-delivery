export default function formatCurrency(n: number) {
  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(n)
}
