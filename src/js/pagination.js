let paginationData = {};

export default function pagination(coctails) {
  let paginationDateKey = 1;
  let partOfDrinks = [];

  coctails.forEach(coctail => {
    partOfDrinks.push(coctail);

    if (partOfDrinks.length === 9) {
      paginationData[paginationDateKey] = [...partOfDrinks];
      paginationDateKey += 1;
      partOfDrinks = [];
    }
  });

  if (partOfDrinks.length > 0) {
    paginationData[paginationDateKey] = [...partOfDrinks];
  }
  return paginationData;
}
