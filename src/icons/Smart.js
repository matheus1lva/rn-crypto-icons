import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSmart = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#FAC000"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.65 8.182h5.67v-2.5H12.9V4.5h-1.44v1.182H7.5v2.59l3.96 3.41-3.96 4v2.772h3.96V19.5h1.44v-1.046h3.6v-2.5h-5.94l4.275-4.272-4.185-3.5z"
      fill="#fff"
    />
  </Svg>
);

export default SvgSmart;
