import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import Text from "../../../components/Text/Text";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Text color="primary" ml="8px">IV Finance</Text>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
