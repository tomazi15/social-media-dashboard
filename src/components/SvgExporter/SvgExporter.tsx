import React, { SVGProps, FC } from "react";

import { ReactComponent as FacebookLogo } from "../../images/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "../../images/icon-twitter.svg";
import { ReactComponent as InstagramLogo } from "../../images/icon-instagram.svg";
import { ReactComponent as YoutubeLogo } from "../../images/icon-youtube.svg";
import { ReactComponent as ArrowUp } from "../../images/icon-up.svg";
import { ReactComponent as ArrowDown } from "../../images/icon-down.svg";

type LogoMapType = { [key: string]: FC<SVGProps<SVGSVGElement>> };
type SvgExporterPropsType = { logoName: string };

const logoTypesMap: LogoMapType = {
  facebookLogo: FacebookLogo,
  twitterLogo: TwitterLogo,
  instagramLogo: InstagramLogo,
  youtubeLogo: YoutubeLogo,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
};

const SvgExporter = ({ logoName }: SvgExporterPropsType) => {
  let Logo = logoTypesMap[logoName];

  return <Logo role={logoName} />;
};

export default SvgExporter;
