import React, { useState } from "react";
import { Link } from "react-router-dom";

import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Tesseract } from "tesseract.ts";

import MatchingResults from '../../Helpers/fuzzy-search';
import "./camera.sass";
import Logo from '../../svg/edvige.svg';

function CameraPage() {
  const [results, setResults] = useState('');
  const [busy, setBusy] = useState(false);

  const recognizeText = picture => {
    setBusy(true);
    Tesseract.create()
    .recognize(picture)
    .then(res => {
      let text = res.text;
      console.log('raw ocr data:', text);
      setResults(text.split("'"));
      setBusy(false);
      console.log('ocr results:', results);
    });
  }

  const onTakePhoto = datauri => {
    recognizeText(datauri)
  };
  return (
    <div style={{height: '100vh'}}>
      <TestCamera onTakePhoto={onTakePhoto} />
      <MatchingResults busy={busy} results={results} />

    </div>
  );
}

export default CameraPage;

function TestCamera({ onTakePhoto }) {
  const onCameraStart = stream => {
    console.log("🎥 start streaming...");
  };

  const onCameraError = error => {
    console.log("error", error);
  };

  const onCameraStop = () => {
    console.log("🛑stopping streaming...");
  };

  return (
    <div className="camera-view">
      <header>
        <div className="logo" style={{backgroundImage: `url(${Logo})`}}/>
        <Link to="/">go back home</Link>
      </header>
      <Camera
        onTakePhoto={dataUri => {
          onTakePhoto(dataUri);
        }}
        onCameraError={error => {
          onCameraError(error);
        }}
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        // idealResolution={{ width: 400, height: 200 }}
        imageType={IMAGE_TYPES.JPG}
        imageCompression={0.97}
        isMaxResolution={false}
        isImageMirror={false}
        isSilentMode={false}
        // sizeFactor={1}
        isDisplayStartCameraError={true}
        onCameraStart={stream => {
          onCameraStart(stream);
        }}
        onCameraStop={() => {
          onCameraStop();
        }}
      />
    </div>
  );
}
