import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBlock = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#101341"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.266 5.25h7.671L19.875 12l-3.938 6.75H8.198l3.87-6.75-3.802-6.75zm4.073 2.375L14.852 12l-2.512 4.375h2.24L17.093 12l-2.513-4.375h-2.24z"
      fill="#fff"
    />
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.085 8.27L6.908 12l2.157 3.697-1.379 2.407L4.125 12l3.592-6.158L9.085 8.27z"
      fill="#fff"
    />
  </Svg>
);

export default SvgBlock;
