from flask import Flask, render_template, request, redirect, url_for
import json

app = Flask(__name__)

@app.route('/actors')
def index():
    fp = open('actors.json')
    return json.load(fp)

@app.route('/tvshows')
def shows():
    return {"shows": ['The Office', 'The Flash', 'South Park']}



if __name__ == "__main__":
    app.run(debug=True)