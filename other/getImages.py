import requests
import json
import threading

with open("static/public/games/games.json") as f:
  games = json.loads(f.read())

def getandwriteimage(url, path):
  r = requests.get(url)
  if r.status_code == 200:
    with open(path, 'xb') as f:
      f.write(r.content)
    print("image added: " + path)

for game in games:
  urls = game["url"].split("/")
  threading.Thread(target=getandwriteimage, args=("https://images.crazygames.com/" + game["image"], "static/public/games/images/" + urls[len(urls) - 2] + ".png")).start()