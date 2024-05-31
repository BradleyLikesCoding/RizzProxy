from bs4 import BeautifulSoup
import requests
import re
import json


def getEmbedLink(url):
  urlList = url.split("/")
  return ("https://games.crazygames.com/en_US/" + urlList[len(urlList) - 1] + "/index.html")


def getImageLink(url):
  text = requests.get(url).text
  r = re.search('"thumbnail":"([^"]*)"', text)
  if r:
    return r.groups()[0]
  else:
    print("ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ")


pages = []
for i in range(48):
  pages.append("https://www.crazygames.com/sitemap/games/" + str(i + 1))

jsonData = []

for url in pages:
  print("Doing page " + url)
  page = requests.get(url)
  soup = BeautifulSoup(page.content, "html.parser")
  parentDiv = soup.find(class_="css-dzhf8b")
  for e in parentDiv.find_all("a"):
    jsonData.append({
        "name": e.string,
        "url": getEmbedLink(e.get("href")),
        "image": getImageLink(getEmbedLink(e.get("href")))
    })

with open("games.json", "w") as f:
  f.write(json.dumps(jsonData))

