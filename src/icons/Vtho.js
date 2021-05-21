import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgVtho = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#vtho_svg__grad1)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path
        fillOpacity={0.704}
        d="M288.992 121.638h33.253l-62.502 83.424h56.089l-133.98 157.3 43.34-111.144h-48.95l49.357-129.58z"
      />
      <Path d="M288.992 121.638h2.002l-56.177 95.843h51.37l-104.335 144.87 43.34-111.133h-48.95l49.357-129.58z" />
    </G>
  </Svg>
);

export default SvgVtho;
