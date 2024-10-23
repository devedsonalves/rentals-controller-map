function formatCurrency(number: number, currency: string) {
  return number
    .toLocaleString("currency",
      {
        style: "currency",
        currency: "BRL"
      }
    )
}

export default formatCurrency;