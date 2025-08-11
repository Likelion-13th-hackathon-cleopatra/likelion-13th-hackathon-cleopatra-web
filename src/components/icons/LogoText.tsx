import LogoTextSvg from "../../assets/logo-text.svg?react";
import * as React from "react";

export default function LogoText(props: React.SVGProps<SVGSVGElement>) {
  return <LogoTextSvg {...props} />;
}
