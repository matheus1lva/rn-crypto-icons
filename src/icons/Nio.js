import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNio = props => (
  <Svg fill="none" {...props}>
    <Path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#70C9C9"
    />
    <Path
      d="M12 10.323H8.383L12 4.125l3.617 6.198H12zm.491 7.302l1.886-3.232 1.809-3.098 3.689 6.33h-7.384zm-2.868-3.232l1.886 3.232H4.125l3.69-6.33 1.807 3.098z"
      fill="#fff"
    />
  </Svg>
);

export default SvgNio;
