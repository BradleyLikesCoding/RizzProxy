function openEruda() {
    const iframe = document.getElementById("uv-frame");
    el = document.createElement("script")
    el.src = "/eruda.js";
    iframe.contentDocument.body.append(el);
}

function proxyFullscreen() {
    let elem = document.getElementById("uv-frame");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

document.getElementById("nav-bar-form").addEventListener("submit", function (event) {
    const address = document.getElementById("nav-bar-address");
    const searchEngine = document.getElementById("uv-search-engine");

    event.preventDefault();

    const url = search(address.value, searchEngine.value);

    let frame = document.getElementById("uv-frame");
    frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    document.getElementById("https-lock").innerText = "pending";
});

var lastURL = "";

document.getElementById("uv-frame").onload = function () {
    lastURL = "";
    updateURLBar();
}

setInterval(updateURLBar, 250);

function updateURLBar() {
    if (document.activeElement.id != "nav-bar-address" || lastURL != decodeUV(document.getElementById("uv-frame").contentWindow.location.href)) {
        lastURL = decodeUV(document.getElementById("uv-frame").contentWindow.location.href);
        if (document.getElementById("uv-frame").contentWindow.location.href == "about:blank") {
            document.getElementById("nav-bar-address").value = "about:blank";
        } else {
            document.getElementById("nav-bar-address").value = decodeUV(document.getElementById("uv-frame").contentWindow.location.href);
            if (document.getElementById("nav-bar-address").value.startsWith("https://")) {
                document.getElementById("https-lock").innerText = "lock";
            } else if (document.getElementById("nav-bar-address").value.startsWith("http://")) {
                document.getElementById("https-lock").innerText = "lock_open_right";
            } else {
                document.getElementById("https-lock").innerText = "error";
            }
        }
    }
}

function decodeUV(str) {
    if (!str) return str;
    str = decodeURIComponent(str.substring(str.lastIndexOf('/') + 1));
    return decodeURIComponent(
        str
            .toString()
            .split('')
            .map((char, ind) =>
                ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
            )
            .join('')
    );
}

function goHome() {
    let iframe = document.getElementById("uv-frame");
    let proxy = document.getElementById("proxy-div");

    iframe.src = "about:blank";

    hideProxy();
}

function windowPopout() {
    var win = window.open();
    var iframe = win.document.createElement('iframe');
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = document.getElementById("uv-frame").contentWindow.location.href;
    win.document.body.appendChild(iframe)
}

function goForward() {
    document.getElementById("uv-frame").contentWindow.history.forward();
}

function goBack() {
    document.getElementById("uv-frame").contentWindow.history.back();
}

function reloadPage() {
    document.getElementById("uv-frame").contentWindow.location.reload();
}

function showProxy() {
    document.getElementById("proxy-div").classList = ["show-proxy-div"];
}

function hideProxy() {
    document.getElementById("proxy-div").classList = ["hide-proxy-div"];
}