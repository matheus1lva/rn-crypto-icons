import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMod = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#09547D"
    />
    <Path
      opacity={0.5}
      d="M17.239 15.755V6.06l-4.734 4.837 4.734 4.858z"
      fill="#fff"
    />
    <Path d="M6.75 5.25l.228.234 6.35 6.506L6.75 18.74V5.25z" fill="#fff" />
  </Svg>
);

export default SvgMod;
