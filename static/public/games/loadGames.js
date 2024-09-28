var gamesJson = [];
var searchedGamesJson = [];
var currentPage = 0;

var gamesDiv = document.getElementById("games-container")

const pageSize = 200;

function getGameHTML(game) {
  return (`
  <div class="game" onclick="openGame('${game["url"]}')">
    <div class="game-image-container">
      <img class="game-image" src="/image/${game["image"]}">
    </div>
    <p class="game-title">
      ${game["name"]}
    </p>
  </div>
  `);
}

function setGames(page) {
  var html = '<div class="game-row">';
  for (var i = page * pageSize; i < searchedGamesJson.length; i++) {
    html += getGameHTML(searchedGamesJson[i]);
    if (((1 + i) - (page * pageSize)) % 5 == 0) html += '</div><div class="game-row">';
    if (i - (page * pageSize) == pageSize - 1) break;
  }
  gamesDiv.innerHTML = html + '</div>';
}

function loadGames() {
  fetch("games.json").then((res) => res.json()).then((res) => {
    gamesJson = res;
    searchedGamesJson = gamesJson;
    currentPage = 0;
    setPageArrows();
    setGames(0);
  });
}

function searchGames(e) {
  currentPage = 0;
  setPageArrows();
  games = []
  for (var i = 0; i < gamesJson.length; i++) {
    if (gamesJson[i]["name"].toLowerCase().search(e.value.toLowerCase()) != -1) games.push(gamesJson[i]);
  }
  searchedGamesJson = games;
  setPageArrows();
  setGames(currentPage);
}

function setPageArrows() {
  var maxPage = getPageCount() - 1;
  if (currentPage < 0) currentPage = 0;
  if (currentPage > maxPage) currentPage = maxPage;
  document.getElementById("page-number").innerText = currentPage + 1;
  var btns = document.getElementsByClassName("switch-page");
  if (currentPage == 0) { btns[0].style.cursor = "default" } else { btns[0].style.cursor = "pointer" };
  if (currentPage == maxPage) { btns[1].style.cursor = "default" } else { btns[1].style.cursor = "pointer" };
}

function getPageCount() {
  return Math.ceil(searchedGamesJson.length / pageSize);
}

loadGames();