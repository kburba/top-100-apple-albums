export default (albums, filters) => {
  return albums.filter(album => {
    const yearFilter =
      filters.year.length > 0
        ? filters.year.indexOf(
            new Date(album["im:releaseDate"].label).getFullYear().toString()
          ) > -1
        : true;

    let priceFilter = false;
    let priceFilterResults = [];
    if (filters.price.length > 0) {
      for (let ii = 0; ii < filters.price.length; ii++) {
        priceFilterResults.push(
          parseFloat(filters.price[ii].split("-")[0]) <
            parseFloat(album["im:price"].attributes.amount) &&
            parseFloat(album["im:price"].attributes.amount) <
              parseFloat(filters.price[ii].split("-")[1])
        );
      }
      priceFilter = priceFilterResults.indexOf(true) > -1 ? true : false;
    } else {
      priceFilter = true;
    }
    return yearFilter && priceFilter;
  });
};
