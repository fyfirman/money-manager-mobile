export const currencyFormat = (value: number) => {
  // return indonesia currency format in rounded number
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
}