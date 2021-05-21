import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgIcn = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#4C6F8C"
    />
    <Path
      d="M15.625 5.25h2v13.5h-2V5.25zM12.292 12h2v6.75h-2V12zM8.958 8.625h2V18.75h-2V8.625zm-3.333 6.75h2v3.375h-2v-3.375z"
      fill="#fff"
    />
  </Svg>
);

export default SvgIcn;
