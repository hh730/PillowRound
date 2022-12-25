import React from 'react';
import SVG, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Stop,
  G,
  Text,
  TSpan,
  Line,
  Rect,
  ClipPath,
  Pattern,
  Mask,
  Use
} from 'react-native-svg';
import { View } from 'react-native';
const CheckIcon = () => {
  return (
      <SVG id="SvgjsSvg1042" width="24" height="24" xmlns="http://www.w3.org/2000/svg" version="1.1" >
          <Defs id="SvgjsDefs1043"></Defs>
          <G id="SvgjsG1044">
              <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <G data-name="Layer 2" fill="#2d6cdf" class="color000 svgShape">
                      <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" data-name="checkmark-circle-2" fill="#2d6cdf" class="color000 svgShape">
                      </Path>
                  </G>
              </SVG>
          </G>
      </SVG>
  );
};

export default CheckIcon;
// import React from 'react';
// import {SVGComp, PathComp} from '../../Common/Svgs';

// const CheckIcon = ({
//   width = '13',
//   height = '9',
//   stroke = '#00B28A',
//   storkeOpacity = '1',
//   strokeWidth = '1',
// }) => (
//   <SVGComp width={width} height={height} viewBox="0 0 13 9" fill="none">
//     <PathComp
//       d="M11.8332 1L4.49984 8.33333L1.1665 5"
//       strokeOpacity={storkeOpacity}
//       strokeWidth={strokeWidth}
//       stroke={stroke}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </SVGComp>
// );

// export default CheckIcon;
