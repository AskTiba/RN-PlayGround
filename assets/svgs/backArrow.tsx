import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const BackArrow = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-left"
    {...props}
  >
    <Path d="m12 19-7-7 7-7" />
    <Path d="M19 12H5" />
  </Svg>
);
export default BackArrow;
