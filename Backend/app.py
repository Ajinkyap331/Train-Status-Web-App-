from Database.StationCoordinate import *


from flask import Flask, jsonify, request 
from flask_cors import CORS, cross_origin
app = Flask(__name__)  
CORS(app, support_credentials=True)

@app.route('/coordinates') 
@cross_origin(supports_credentials=True)

def home():  
    return Coordinates


if __name__ =='__main__':  
    app.run(debug = True)  
