"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    alert("Error. Please contact a server administrator.")
  }

  const url = search(address.value, searchEngine.value);

  let frame = document.getElementById("uv-frame");
  let div = document.getElementById("proxy-div")
  
  showProxy();

  frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
  document.getElementById("nav-bar-address").value = "";
  address.value = "";
  document.getElementById("https-lock").innerText = "pending";
});
