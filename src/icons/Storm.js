import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgStorm = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#080D98"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.25 4.5l-9.022 6.188 4.557 2.906L6.75 19.5l9.977-6.906-4.496-2.906L17.25 4.5z"
      fill="#fff"
    />
  </Svg>
);

export default SvgStorm;
