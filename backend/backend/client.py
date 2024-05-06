import requests
import json

url = "http://localhost:8000/api/post/"
body={"title": "james", "post_name": "bond", "category_name": "suman", "state_ut": "Chhattisgarh"}
res = requests.post(url, body)
message = res.json()
print(message)