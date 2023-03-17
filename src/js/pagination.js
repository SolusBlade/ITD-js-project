let paginationData = {};


export default function pagination(coctails) {
  let paginationDateKey = 1;
  let partOfDrinks = [];
  coctails.forEach(coctail => {
    partOfDrinks.push(coctail);

    if (window.screen.width < 767) {
      if (partOfDrinks.length === 3) {
        paginationData[paginationDateKey] = [...partOfDrinks];
        paginationDateKey += 1;
        partOfDrinks = [];
      }
    }

    if (window.screen.width >= 768 && window.screen.width < 1280) {
      if (partOfDrinks.length === 6) {
        paginationData[paginationDateKey] = [...partOfDrinks];
        paginationDateKey += 1;
        partOfDrinks = [];
      }
    }

    if (window.screen.width >= 1280) {
      if (partOfDrinks.length === 9) {
        paginationData[paginationDateKey] = [...partOfDrinks];
        paginationDateKey += 1;
        partOfDrinks = [];
      }
    }
  });

  if (partOfDrinks.length > 0) {
    paginationData[paginationDateKey] = [...partOfDrinks];
  }
  return paginationData;
}
