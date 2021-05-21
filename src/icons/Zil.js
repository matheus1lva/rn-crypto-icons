import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgZil = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#49C1BF"
    />
    <Path
      d="M6.75 5.46l8.335 4.038 2.134-.961L8.92 4.5l-2.169.96z"
      fill="#fff"
      fillOpacity={0.304}
    />
    <Path
      d="M15.085 9.488l2.134-.96v2.148l-2.134.961V9.488zm0 9.963v-6.703l2.134-.97v6.713l-2.134.96z"
      fill="#fff"
      fillOpacity={0.646}
    />
    <Path
      d="M6.75 5.463v2.173l5.77 2.802-5.77 2.858v2.142l8.335 4.03v-2.156l-5.66-2.753 5.66-2.91v-2.15L6.75 5.464z"
      fill="#fff"
    />
  </Svg>
);

export default SvgZil;
