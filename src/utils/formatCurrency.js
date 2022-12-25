import formatNumber from './formatNumber';

const formatCurrency = (currencySymbol, value, intl, formatNumberOptions) => {
  return `${currencySymbol}${formatNumber({
    value,
    intl,
    options: formatNumberOptions,
  })}`;
};

export default formatCurrency;
