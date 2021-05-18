let formSearch = document.querySelector(".search-form");
let searchArea = document.querySelector(".search");

formSearch.onsubmit = () => {
  alert(
    `Извините, но мы не можем найти "${searchArea.value}", потому что поиск временно не работает`
  );
  searchArea.value = "";
};
