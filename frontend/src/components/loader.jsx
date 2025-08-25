import React, { useState, useEffect } from 'react';

function Shimmer() {
  const styles = `
    .loader-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white; /* बैकग्राउंड को सफेद कर दिया गया है */
      z-index: 9999;
      overflow: hidden;
    }

    .loader {
      position: relative;
      width: 80px;
      height: 80px;
    }

    /* ग्रेडिएंट सर्कल के लिए नया CSS */
    .loader-circle-gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background:radial-gradient(ellipse at top left, #b6f0ea 0%, #7db0c5 100%); /* रिंग का रंग बदलकर बैंगनी कर दिया गया है */
      animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }

    /* अंदर के सर्कल के लिए जो बॉर्डर का प्रभाव देता है */
    .loader-circle-inner {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60px; /* बॉर्डर की मोटाई को नियंत्रित करता है */
      height: 60px;
      border-radius: 50%;
      background-color: white; /* लोडर कंटेनर के बैकग्राउंड से मेल खाता है */
      transform: translate(-50%, -50%);
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="loader-container">
        <div className="loader">
          <div className="loader-circle-gradient"></div>
          <div className="loader-circle-inner"></div>
        </div>
      </div>
    </>
  );
}
export default Shimmer;  