const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRA',
  })
    .format(value)
    .replace('BRA', '');
};

export default formatCurrency;
