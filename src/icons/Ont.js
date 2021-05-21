import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgOnt = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#32A4BE"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.75 18.163L7.483 7.14A6.653 6.653 0 0112.15 5.25c3.645 0 6.6 2.89 6.6 6.457v6.456zM5.25 5.837L16.517 16.86a6.653 6.653 0 01-4.667 1.891c-3.645 0-6.6-2.89-6.6-6.457V5.837z"
      fill="#fff"
    />
  </Svg>
);

export default SvgOnt;
