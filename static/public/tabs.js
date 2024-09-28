var currentTabId = 0;
var currentTab = 0;
var tabIds = [];

function newTab(url = "/tab?page=" + __uv$config.encodeUrl("https://google.com")) {
  var el = document.getElementById("tabBarTabs");
  var tabId = getTabId();
  el.innerHTML += `<div class="tabBarTab w3-bar-item" id="tab` + tabId + `" style="width: 225px" onclick="openTab(` + tabId + `)">
  <div style="display: inline-block;
      width: 170px;
      overflow-x: hidden;
      white-space: nowrap;
      cursor: default;"></div>
  <span
    style="cursor: pointer; float: right"
    onclick="
    event.stopPropagation();
    this.parentNode.animate([{'width': '150px'},{'width': '0'}],{fill: 'forwards',duration: 125});
    setTimeout(function(el) {
    	el.remove();
    }, 100, this.parentElement);
    closeTab('` + tabId + `')"
    >✖</span>
</div>`;

  var tab = el.lastChild;
  setTimeout(function (tab) {
    tab.style.marginTop = "5px";
  }, 1, tab);
  var frame = document.createElement("iframe");
  frame.src = url;
  frame.classList.add("tab");
  frame.id = "frame" + tabId;
  document.getElementById("frames").append(frame);
  openTab(tabId)

  return document.getElementById("frames").lastElementChild;
}

function getTabId() {
  tabIds.push(currentTabId);
  return currentTabId++;
}

function openTab(tabId) {
  if(document.getElementById("frame" + currentTab)) {
    document.getElementById("frame" + currentTab).style.display = "none";
    document.getElementById("tab" + currentTab).style.backgroundColor = "rgb(49, 50, 64)";
  }
  currentTab = tabId;
  document.getElementById("frame" + currentTab).style.display = "block";
  document.getElementById("tab" + currentTab).style.backgroundColor = "rgb(29, 30, 34)";
}

function closeAllTabs() {
  document.getElementById("frames").innerHTML = "";
  document.getElementById("tabBarTabs").innerHTML = "";
  tabIds = [];
  currentTab = 0;
}

function closeTab(id) {
  document.getElementById("frame" + id).remove();
  for(var i = 0; i < tabIds.length; i++) {
    if(tabIds[i] == id) {
      tabIds.splice(i, 1);
      break;
    }
  }
  if (currentTab == id && tabIds.length != 0) {
    openTab(currentTab = tabIds[tabIds.length - 1]);
  }
}

function updateTabTitles() {
  for(var i = 0; i < tabIds.length; i++) {
    var frame = document.getElementById("frame" + tabIds[i]).contentDocument.getElementById("uv-frame");
    var title = frame.contentDocument.title;
    if(title == "") {
      title = frame.contentDocument.location.pathname.split('/');
      title = title[title.length - 1];
    }
    document.getElementById("tab" + tabIds[i]).children[0].innerHTML = title;
  }
}

setInterval(updateTabTitles, 250);