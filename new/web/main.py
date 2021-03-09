from __future__ import absolute_import, division, print_function, unicode_literals
from flask import Flask, render_template, request, Response, jsonify, make_response,session,redirect,url_for
import numpy as np
import os
from werkzeug.utils import secure_filename
from shutil import copyfile
from tensorflow.keras.models import model_from_json
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from keras.models import load_model
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)
app.secret_key = "super secret key"
MODEL_ARCHITECTURE = './models/model.json'
MODEL_WEIGHTS = './models/model.h5'

json_file = open(MODEL_ARCHITECTURE)
loaded_model_json = json_file.read()
json_file.close()
model = model_from_json(loaded_model_json)

model.load_weights(MODEL_WEIGHTS)

@app.route("/")
def home():

    return render_template("index.html")

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    f = request.files['image']

    file_name = secure_filename(f.filename)
    basepath = os.path.dirname(__file__)
    file_path = os.path.join(basepath, 'upload', file_name)
    f.save(file_path)

    predict_file_path = os.path.join(basepath, 'upload', 'tek', 'yeni',  file_name)

    copyfile(file_path, predict_file_path)
    json_file = open('models/model.json')
    loaded_model_json = json_file.read()
    json_file.close()
    model = model_from_json(loaded_model_json)
    model.load_weights('models/model.h5')

    model.compile(optimizer='adam',
                  loss='sparse_categorical_crossentropy',
                  metrics=['accuracy'])

    testdir = os.path.join(basepath, 'upload', 'tek')
    testdatagenerat = ImageDataGenerator(rescale=1. / 255)
    testgenerat = testdatagenerat.flow_from_directory(
        testdir,
        target_size=(256, 256),
        shuffle=False,
        class_mode='sparse',
        batch_size=1)

    testfilename = testgenerat.filenames
    teststeps = len(testfilename)

    predict = model.predict_generator(testgenerat, steps=teststeps)

    print(predict)

    os.remove(predict_file_path)

    prediction = predict[0]
    veri = {"normal": round(prediction[1] * 100), "bakteri": round(prediction[0] * 100),
            "vrs": round(prediction[2] * 100), "onay": "ONAYLANDI"}
    print(veri)
    session['ad']=veri

    veriler = jsonify(veri)

    return veriler


@app.route('/Result')
def bs():
    veri = session['ad']
    print(veri)
    return jsonify(veri)


@app.route("/zatürenedir")
def spage():
    return render_template("zatüre.html")

@app.route("/sonuc")
def tpage():
    return render_template("sonuc.html")

if __name__ == "__main__":
    app.run(debug=True)
