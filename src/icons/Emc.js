import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEmc = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#B49FFC"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 6v2.4h4.8v2.4H6v2.4h7.2V8.4h2.4v7.2H6V18h12V6H6z"
      fill="#fff"
    />
  </Svg>
);

export default SvgEmc;
