import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 30 32" {...props}>
      <path d="M3.7735 28.2613H22.7855L21.8775 25.3213L24.0495 27.1853L26.0402 28.9693L29.6668 32V3.3C29.5762 1.516 28.0402 0 26.1362 0L3.78016 0.004C1.8775 0.004 0.333496 1.52267 0.333496 3.30667V24.96C0.333496 26.8413 1.87483 28.2613 3.7735 28.2613ZM17.8375 7.57734L17.7935 7.59334L17.8095 7.57734H17.8375ZM7.66283 9.26934C10.1068 7.49067 12.3722 7.576 12.3722 7.576L12.5548 7.756C9.56416 8.46934 8.20816 9.80534 8.20816 9.80534C8.20816 9.80534 8.57083 9.628 9.20416 9.35734C13.2322 7.77334 17.6308 7.888 21.7028 9.89334C21.7028 9.89334 20.3442 8.644 17.5375 7.844L17.7855 7.6C18.1735 7.60134 20.2268 7.67334 22.4242 9.28C22.4242 9.28 24.8828 13.48 24.8828 18.64C24.8015 18.5413 23.3575 20.8613 19.6415 20.9413C19.6415 20.9413 19.0122 20.2293 18.5642 19.608C20.7375 18.984 21.5508 17.736 21.5508 17.736C20.8375 18.1853 20.1868 18.452 19.6588 18.7187C18.8468 19.076 18.0335 19.252 17.2215 19.432C13.3762 20.056 11.2175 19.012 9.1775 18.184L8.48016 17.8293C8.48016 17.8293 9.29216 19.0773 11.3788 19.7013C10.8308 20.3267 10.2882 21.0373 10.2882 21.0373C6.5735 20.9493 5.21883 18.6293 5.21883 18.6293C5.21883 13.4613 7.66283 9.26934 7.66283 9.26934Z" fill="#FD6262"/>
    </Svg>
  );
};

export default Icon;
