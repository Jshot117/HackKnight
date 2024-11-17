import React from "react";

const HypnosisSwirl = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div
        style={{
          width: "50%",
          height: 0,
          paddingBottom: "100%",
          position: "relative",
        }}
      >
        <iframe
          src="https://giphy.com/embed/3o7TKwPlTv6714cmWs"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          allowFullScreen
          title="Hypnosis Swirl"
        ></iframe>
      </div>
      <p className="text-gray-300 text-sm mt-2">
        <a
          href="https://giphy.com/gifs/sweet-eat-banana-3o7TKwPlTv6714cmWs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline"
        >
          via GIPHY
        </a>
      </p>
    </div>
  );
};

export default HypnosisSwirl;
