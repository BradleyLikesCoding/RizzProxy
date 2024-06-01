function addGame(game) {
  document.getElementById("games-container").innerHTML += `
  <div class="game" onclick="openGame('${game.url}')">
    <div class="game-image-container">
      <img class="game-image" src="https://images.crazygames.com/${game.image}">
    </div>
    <p class="game-title">
      ${game.name}
    </p>
  </div>
  `;
}
async function loadGames() {
  res = await fetch("games.json");
  json = await res.json();
  document.getElementById("games-container").innerHTML = "";
  for (var i = 0; i < await json.length; i++) {
    addGame(json[i]);
  }
}

loadGames();