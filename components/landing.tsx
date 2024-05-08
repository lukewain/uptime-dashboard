import "./landing.css";
import React from "react";
import Image from "next/image";

// Image imports
import PlaceholderElement from "../Images/phel.png";

export function LandingTypeWriter() {
  // Typewriter title effect
  return (
    <div className="wrapper">
      <div id="typewriter-effect">Welcome to Uptime Dashboard</div>
    </div>
  );
}

export function LandingFirstEl() {
  // Screenshot with explaining text
  return (
    <div id="firstElWrapper" className="inline-block">
      <Image
        src={PlaceholderElement}
        alt="Image of device display screen"
        width={576}
        height={324}
        id="placeholderImage"
      />
      <div id="wrapperInteral">
        <h1>Device Management</h1>
      </div>
    </div>
  );
}
