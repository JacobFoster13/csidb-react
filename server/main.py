from flask import Flask, render_template, request, redirect, url_for
import json

app = Flask(__name__)

@app.route('/actors')
def actors():
    fp = open('actors.json')
    return json.load(fp)

@app.route('/tvshows')
def shows():
    fp = open('tvshows.json')
    return json.load(fp)

@app.route('/movies')
def movies():
    fp = open('movies.json')
    return json.load(fp)



if __name__ == "__main__":
    app.run(debug=True)