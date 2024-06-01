var gamesJson = [];
var gamesDiv = document.getElementById("games-container")


function getGameHTML(game) {
  return(`
  <div class="game" onclick="openGame('${game["url"]}')">
    <div class="game-image-container">
      <img class="game-image" src="${"/proxiedassets/?url=https://images.crazygames.com/game" + ["image"]}">
    </div>
    <p class="game-title">
      ${game["name"]}
    </p>
  </div>
  `);
}

function setGames(page) {
  var html = '<div class="game-row">';
  for (var i = page * 200; i < gamesJson.length - (page * 200); i++) {
    html += getGameHTML(gamesJson[i]);
    if (((1 + i) - (page * 200)) % 5 == 0) html += '</div><div class="game-row">';
    if (i - (page * 200) == 199) break;
  }
  gamesDiv.innerHTML = html + '</div>';
}

function loadGames() {
    fetch("games.json").then((res) => res.json()).then((res) => {
    gamesJson = res;
    setGames(0)
  });
}

loadGames();