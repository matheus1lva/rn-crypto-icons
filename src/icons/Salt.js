import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSalt = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#1BEEF4"
    />
    <Path
      d="M12.375 7.834l4.353 9.16H8.022l4.353-9.16zm0-4.084l-7.125 15H19.5l-7.125-15z"
      fill="#fff"
    />
  </Svg>
);

export default SvgSalt;
