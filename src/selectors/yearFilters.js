export default albums => {
  let years = [],
    yearFilters = [];
  if (albums.length > 0) {
    for (let ii = 0; ii < albums.length; ii++) {
      const year = new Date(albums[ii]["im:releaseDate"].label).getFullYear();
      years.push(year);
    }
    for (let yy = 0; yy < years.length; yy++) {
      if (years[yy] in yearFilters) {
        yearFilters[years[yy]].push(years[yy]);
      } else {
        yearFilters[years[yy]] = [years[yy]];
      }
    }
  }

  const result = Object.keys(yearFilters)
    .map(c => ({ key: c, value: yearFilters[c] }))
    .sort((a, b) => b.key - a.key);

  return result;
};
