import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNeos = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#E5F300"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.875 7.019l6.107 3.694v2.323L9.697 10.46V19.5H7.875V7.018zm8.25 9.963l-6.107-3.695v-2.322l4.285 2.575V4.5h1.822v12.482z"
      fill="#fff"
    />
  </Svg>
);

export default SvgNeos;
