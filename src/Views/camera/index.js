import React, { useState } from "react";
import { Link } from "react-router-dom";

import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Tesseract } from "tesseract.ts";

import { testImage } from './test.jpg';

import MatchingResults from '../../Helpers/fuzzy-search';
// import "./styles.css";

function CameraPage() {
  const [results, getResults] = useState('');

  const recognizeText = picture => {
    Tesseract.create()
    .recognize(picture)
    .then(res => {
      getResults("thinking...");
      let text = res.text;
      // getResults(`results: ${text}`);
      console.log(text);
      let data = text.split("'");
      getResults(`${data}`);
      console.log(data);
    });
  }

  const onTakePhoto = datauri => {
    recognizeText(datauri)
  };
  return (
    <div>
      <TestCamera onTakePhoto={onTakePhoto} />
      {/* {results} */}
      <MatchingResults results={results} />

    </div>
  );
}

export default CameraPage;

function TestCamera({ onTakePhoto }) {
  const onCameraStart = stream => {
    console.log("start streaming...");
  };

  const onCameraError = error => {
    console.log("error", error);
  };

  const onCameraStop = () => {
    console.log("stopping streaming...");
  };

  return (
    <>
      <Link to="/">go back home</Link>
      <Camera
        onTakePhoto={dataUri => {
          onTakePhoto(dataUri);
        }}
        onCameraError={error => {
          onCameraError(error);
        }}
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        idealResolution={{ width: 480, height: 360 }}
        imageType={IMAGE_TYPES.JPG}
        imageCompression={0.97}
        isMaxResolution={false}
        isImageMirror={false}
        isSilentMode={false}
        sizeFactor={1}
        isDisplayStartCameraError={true}
        onCameraStart={stream => {
          onCameraStart(stream);
        }}
        onCameraStop={() => {
          onCameraStop();
        }}
      />
    </>
  );
}
