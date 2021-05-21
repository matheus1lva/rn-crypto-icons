import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgApex = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#1F4C9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 14.438L12 4.874l7.5 9.563v3.187L12 8.062l-7.5 9.563v-3.188zm7.875.937a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75z"
      fill="#fff"
    />
  </Svg>
);

export default SvgApex;
