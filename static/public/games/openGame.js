"use strict";

function showProxy() {
  let div = document.getElementById("proxy-div");
  div.classList = ["show-proxy-div"];
}

async function openGame(url) {
  try {
    await registerSW();
  } catch (err) {
    alert("Error. Please contact a server administrator.")
  }
  
  showProxy();

  let frame = document.getElementById("uv-frame");
  frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
}
