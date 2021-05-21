import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMth = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#104FCA"
    />
    <Path
      d="M5.25 7.176l3.175 5.327V18c-1.753 0-3.175-1.377-3.175-3.076V7.176z"
      fill="#fff"
      fillOpacity={0.5}
    />
    <Path
      d="M15.574 12.497l3.174-5.324h.001v7.752C18.75 16.623 17.328 18 15.574 18v-5.503z"
      fill="#fff"
      fillOpacity={0.6}
    />
    <Path
      d="M11.998 12.344l-1.588 2.664c-.33-.083-.683-.402-1.062-.958L5.25 7.176c1.519-.85 3.461-.345 4.338 1.125l2.41 4.043z"
      fill="#fff"
      fillOpacity={0.8}
    />
    <Path
      d="M14.412 8.295c.877-1.471 2.82-1.975 4.338-1.126l-4.098 6.874A3.2 3.2 0 0112 15.426a3.247 3.247 0 01-1.425-.326l-.165-.092 4.002-6.713z"
      fill="#fff"
    />
  </Svg>
);

export default SvgMth;
