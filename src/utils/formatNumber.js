const formatNumber = ({value, intl, options}) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
  const _options = {};
  if (!intl) {
    throw new Error('please provide intl');
  }
  if (String(value).indexOf('.') > 0) {
    _options.minimumFractionDigits = 2;
    _options.maximumFractionDigits = 2;
  }
  return intl.formatNumber(value, {..._options, ...options});
};

export default formatNumber;
