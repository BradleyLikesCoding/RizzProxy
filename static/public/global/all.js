/*var lettersForSOS = "sos123";
var sosIndex = 0;

window.addEventListener("keypress", sosKeyPressListener);

document.getElementById("uv-frame").onload(function() {
  this.contentWindow.document.addEventListener("keypress", sosKeyPressListener);
});

function sosKeyPressListener(event) {
  if (event.key == lettersForSOS[sosIndex]) {
    sosIndex++;
    if(sosIndex == lettersForSOS.length) {
      startSos();
    }
  } else {
    sosIndex = 0;
  }
}

function startSos() {
  // retrieve all cookies
  var Cookies = document.cookie.split(';');
  // set past expiry to all cookies
  for (var i = 0; i < Cookies.length; i++) {
    document.cookie = Cookies[i] + "=; expires=" + new Date(0).toUTCString();
  }
  location.href="https://launchpad.classlink.com/aacps";
}*/