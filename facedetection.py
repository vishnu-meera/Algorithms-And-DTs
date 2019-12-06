import requests
import json
import matplotlib.image as mpimg
import numpy as np
import matplotlib.pyplot as plt  
import cv2


from flask import Flask,jsonify,request

app = Flask(__name__)

@app.route('/upload', methods = ['POST'])
def uploader():
    ret = ""
    print("here")
    for upload in request.files.getlist("files"):
        print("xxxx")
        img = mpimg.imread(upload)
        img = preprocess(img)
        scoring_uri = 'http://7a38107b-75de-4cc2-9611-3a74ec05c9e0.eastus.azurecontainer.io/score'
        input_data = json.dumps({'data': img.tolist()})
        headers = {'Content-Type': 'application/json'}
        ret = requests.post(scoring_uri, input_data, headers=headers)
        print(ret)
    return ret
        
app.run(port=5000,debug=True)

def rgb2gray(rgb):
    return np.dot(rgb[...,:3], [0.299, 0.587, 0.114])

def resize_img(img):
    img = cv2.resize(img, dsize=(64, 64), interpolation=cv2.INTER_AREA)
    img.resize((1, 1, 64, 64))
    return img

def preprocess(img):
    if img.shape == (64, 64):
        img.resize((1, 1, 64, 64))
        return img


    grayscale = rgb2gray(img)
    processed_img = resize_img(grayscale)
    return processed_img



def getEmotion_detection(img):
    img = mpimg.imread(img)
    img = preprocess(img)
    scoring_uri = 'http://7a38107b-75de-4cc2-9611-3a74ec05c9e0.eastus.azurecontainer.io/score'
    input_data = json.dumps({'data': img.tolist()})
    headers = {'Content-Type': 'application/json'}
    resp = requests.post(scoring_uri, input_data, headers=headers)
    return resp



