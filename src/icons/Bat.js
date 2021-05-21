import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBat = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#FF5000"
    />
    <Path
      d="M4.5 17.625l7.538-12.75L19.5 17.608l-15 .017zm7.52-7.59l-3.08 5.09h6.176l-3.096-5.09z"
      fill="#fff"
    />
  </Svg>
);

export default SvgBat;
