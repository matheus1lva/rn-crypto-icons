import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgXvc = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#B50126"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.588 8.057H6L7.248 6h3.1v8.038L16.285 6H19.5l-8.357 12H7.588V8.057z"
      fill="#fff"
    />
  </Svg>
);

export default SvgXvc;
