import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAuto = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#FAB431"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.375 14.45l-3.139-1.883.36-1.492 1.34.792V9.142l-4.304-2.566v5.925l-1.024.566 5.653 3.353L12 19.5l-6.375-3.733V8.3L12 4.5l6.375 3.8v6.15zM7.064 9.143V14l4.138-2.4V6.675L7.064 9.142zm3.072 4.757l-2.353 1.44L12 17.809l2.381-1.395-4.245-2.514z"
      fill="#fff"
    />
  </Svg>
);

export default SvgAuto;
