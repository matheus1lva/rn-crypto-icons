import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgVib = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#FF1F43"
    />
    <Path
      d="M5.25 5.25H8.4l5.4 9.581V5.25h2.7v13.5h-3.6L5.25 5.25z"
      fill="#fff"
    />
  </Svg>
);

export default SvgVib;
