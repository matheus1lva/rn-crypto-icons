import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgWaves = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#0155FF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4.5l7.5 7.5-7.5 7.5L4.5 12 12 4.5z"
      fill="#fff"
    />
  </Svg>
);

export default SvgWaves;
