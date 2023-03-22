#!/usr/bin/env python3
import requests
import json

url = "https://streaming-availability.p.rapidapi.com/search/basic"

for num in range(1, 6):
    querystring = {"country":"us",
        "service":"netflix",
        "type":"movie",
        "page": str(num),
        "output_language":"en",
        "language":"en"}

    headers = {
        "X-RapidAPI-Key": "2688effd4bmsh75075645cde2f87p1fd60cjsn8267dc44dbd2",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)

    # print(response.text)

    results = json.loads(response.text)['results']

    for i in range(len(results)):
        print(results[i]['title'])
