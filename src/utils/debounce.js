const debounce = function (fn, d) {
  let timer;
  return function (args) {
    // eslint-disable-next-line consistent-this
    let context = this;
    let args1 = args;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(args1);
      //   fn.apply(context, args1);
    }, d);
  };
};

export default debounce;
