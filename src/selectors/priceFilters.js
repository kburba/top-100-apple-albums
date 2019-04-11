export default albums => {
  let prices = [],
    ranges = [],
    priceFilters = [];
  const step = 5;
  if (albums.length > 0) {
    for (let ii = 0; ii < albums.length; ii++) {
      const price = parseFloat(albums[ii]["im:price"].attributes.amount);
      prices.push(price);
    }
    const priceMax = Math.max(...prices);

    for (let zz = 0; zz < priceMax; zz += step) {
      ranges.push(zz + "-" + (zz + step));
    }

    for (let pp = 0; pp < prices.length; pp++) {
      for (let rr = 0; rr < ranges.length; rr++) {
        const [rangeMin, rangeMax] = ranges[rr].split("-");
        if (prices[pp] > rangeMin && prices[pp] < rangeMax) {
          if (ranges[rr] in priceFilters) {
            priceFilters[ranges[rr]].push(prices[pp]);
          } else {
            priceFilters[ranges[rr]] = [prices[pp]];
          }
        }
      }
    }
  }
  return priceFilters;
};
