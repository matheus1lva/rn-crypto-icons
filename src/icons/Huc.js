import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHuc = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#FFC018"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.625 10.875h6.75V7.5h2.25v12h-2.25v-6.375h-6.75V16.5h-2.25v-12h2.25v6.375z"
      fill="#fff"
    />
  </Svg>
);

export default SvgHuc;
