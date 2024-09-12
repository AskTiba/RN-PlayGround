import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Checkmark = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-check"
    {...props}
  >
    <Path d="M20 6 9 17l-5-5" />
  </Svg>
);
export default Checkmark;
