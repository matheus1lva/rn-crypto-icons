import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEth = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#0C0C0D"
    />
    <Path
      d="M12 15.243l4.5-2.662-4.5 6.343-4.5-6.342 4.5 2.662v-.001zm0-10.74l4.5 7.087-4.5 2.662-4.5-2.662L12 4.502z"
      fill="#fff"
    />
  </Svg>
);

export default SvgEth;
