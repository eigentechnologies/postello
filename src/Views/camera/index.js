import React, { useState } from "react";
import { Link } from "react-router-dom";

import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Tesseract } from "tesseract.ts";

// import "./styles.css";

function CameraPage() {
  const [results, getResults] = useState("Results will appear here...");

  const onTakePhoto = datauri => {
    Tesseract.create()
      .recognize(datauri)
      .then(res => {
        getResults("thinking...🤔");
        let text = res.text;
        // getResults(`results: ${text}`);
        console.log(text);
        let data = text.split("'");
        getResults(`"clean" results: \n\n ${data}`);
        console.log(data);
      });
  };
  return (
    <div>
      <TestCamera onTakePhoto={onTakePhoto} />
      {results}
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
