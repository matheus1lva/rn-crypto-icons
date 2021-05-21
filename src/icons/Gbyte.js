import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGbyte = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#302C2C"
    />
    <Path
      d="M12 20.25a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z"
      fill="#fff"
    />
  </Svg>
);

export default SvgGbyte;
