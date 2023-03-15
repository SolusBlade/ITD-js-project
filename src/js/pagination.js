let paginationData = {};
let paginationDateKey = 1;
let partOfDrinks = [];
function createObjectCoctails() {
  paginationData[paginationDateKey] = [...partOfDrinks];
  paginationDateKey += 1;
  partOfDrinks = [];
}

export default function pagination(coctails) {
  coctails.forEach(coctail => {
    partOfDrinks.push(coctail);

    if (window.screen.width < 767) {
      if (partOfDrinks.length === 3) {
        createObjectCoctails();
      }
    }

    if (window.screen.width >= 768) {
      if (partOfDrinks.length === 6) {
        createObjectCoctails();
      }
    }

    if (window.screen.width > 1280) {
      if (partOfDrinks.length === 9) {
        createObjectCoctails();
      }
    }
  });

  if (partOfDrinks.length > 0) {
    paginationData[paginationDateKey] = [...partOfDrinks];
  }
  return paginationData;
}
