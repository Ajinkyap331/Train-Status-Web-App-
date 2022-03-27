from flask import Flask, jsonify, request 
from flask_cors import CORS, cross_origin
from Database.Data import Database, TrainDetails


app = Flask(__name__)  
CORS(app, support_credentials=True)


@app.route('/allstationcoordinates') 
@cross_origin(supports_credentials=True)

def stationcooedinates():  
    return Database.Coordintes


@app.route('/allStationsData') 
def allSationData():     
    return jsonify(Database.Stations)  


@app.route('/codetostation') 
def codetostation():     
    return Database.CodeToName


@app.route('/alltrains') 
def alltrains():     
    return jsonify( TrainDetails.Train)

@app.route('/numbertoname') 
def numbertoname():     
    return TrainDetails.NumberToName

if __name__ =='__main__':  
    app.run(debug = True) 