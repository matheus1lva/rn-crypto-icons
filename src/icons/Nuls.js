import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNuls = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#82BD39"
    />
    <Path
      d="M10.802 14.52L12 16.098V19.5l-4.5-1.997V8.714c0-.13.058-.253.159-.34l.512-.438a.477.477 0 01.693.072l4.098 5.374 2.264 1.384v-7.41l-2-.998-.098 4.647L12.069 9.6l-.048-5.1L16.5 6.584v8.748l-1.018.839-3.205-1.79-3.558-4.668-.049 7.09 2.119 1.086.013-3.369z"
      fill="#fff"
    />
  </Svg>
);

export default SvgNuls;
