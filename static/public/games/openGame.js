"use strict";

function showProxy() {
  let div = document.getElementById("proxy-div");
  div.classList = ["show-proxy-div"];
}

async function openGame(url) {
  try {
    await registerSW();
  } catch (err) {
    alert("Error. Please contact a server administrator. Error Message: " + err.message);
  }
  
  showProxy();

  let frame = document.getElementById("uv-frame");
  frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
}
