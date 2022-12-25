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
const NoInternet = () => {
    return (
        // <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<SVG fill="#f5f5f5" version="1.1" id="SVGRepoEditor" xmlns="http://www.w3.org/2000/svg" width="192px" height="192px" viewBox="-35.32 -35.32 512.09 512.09" stroke="#f5f5f5" stroke-width="0" transform="matrix(1, 0, 0, 1, 0, 0)">
<G id="SVGRepo_bgCarrier" stroke-width="0">
<Rect x="-35.32" y="-35.32" width="512.09" height="512.09" rx="76.8135" fill="#424242" strokewidth="0"/>
                </G>
            <Path d="M65.685,174.325h-22.31c-19.766,0-35.859,16.093-35.859,35.859v192.369c0,5.279,4.284,9.562,9.562,9.562h74.913 c5.279,0,9.562-4.283,9.562-9.562V210.184C101.544,190.418,85.46,174.325,65.685,174.325z M77.638,397.771H31.422 c-5.278,0-9.562-4.283-9.562-9.562V210.184c0-11.858,9.658-21.516,21.516-21.516h22.319c11.858,0,21.516,9.658,21.516,21.516 v178.025C87.201,393.488,82.926,397.771,77.638,397.771z" />
            <Path d="M120.813,170.949v231.604c0,5.279,4.284,9.562,9.562,9.562h74.913c5.278,0,9.562-4.283,9.562-9.562V170.949 c0-19.766-16.094-35.859-35.859-35.859h-22.319C136.906,135.089,120.813,151.183,120.813,170.949z M200.507,388.209 c0,5.279-4.284,9.562-9.562,9.562h-46.225c-5.279,0-9.562-4.283-9.562-9.562v-217.26c0-11.857,9.658-21.516,21.516-21.516h22.319 c11.857,0,21.516,9.658,21.516,21.516V388.209z" />
            <Path d="M269.979,89.667c-19.766,0-35.859,16.094-35.859,35.859v277.026c0,5.279,4.283,9.562,9.562,9.562h74.912 c5.278,0,9.562-4.283,9.562-9.562V125.527c0-19.766-16.094-35.859-35.859-35.859H269.979z M304.25,397.771h-46.225 c-5.279,0-9.562-4.283-9.562-9.562V125.527c0-11.857,9.658-21.516,21.516-21.516h22.318c11.857,0,21.516,9.658,21.516,21.516 v262.682C313.812,393.488,309.528,397.771,304.25,397.771z" />
            <Path d="M383.274,56.208c-19.766,0-35.859,16.094-35.859,35.859v310.485c0,5.279,4.284,9.562,9.562,9.562h74.913 c5.278,0,9.562-4.283,9.562-9.562V92.058c0-19.766-16.094-35.859-35.859-35.859h-22.319V56.208z M417.547,397.771h-46.226 c-5.278,0-9.562-4.283-9.562-9.562V92.058c0-11.857,9.658-21.516,21.516-21.516h22.319c11.857,0,21.516,9.658,21.516,21.516 v296.151C427.109,393.488,422.835,397.771,417.547,397.771z" />
            <Path d="M9.907,143.858c4.839,3.968,10.939,6.158,17.203,6.158c8.157,0,15.797-3.605,20.971-9.897c0,0,1.444-1.76,3.222-3.94 c1.779-2.171,4.676-2.18,6.464,0l3.242,3.93c4.954,6.043,12.871,9.648,21.162,9.648c6.33,0,12.364-2.104,16.992-5.9 c11.561-9.496,13.225-26.622,3.739-38.164l-7.191-8.759c-3.356-4.083-3.356-10.7,0-14.774l7.191-8.75 c4.59-5.594,6.741-12.642,6.034-19.861c-0.688-7.21-4.169-13.703-9.773-18.312c-4.628-3.806-10.662-5.891-16.992-5.891 c-8.291,0-16.208,3.605-21.181,9.63c0,0-1.444,1.759-3.232,3.939c-1.789,2.171-4.676,2.171-6.455,0l-3.222-3.939 c-4.963-6.034-12.871-9.639-21.162-9.639c-6.35,0-12.383,2.104-17.012,5.91C3.615,40.411,0.01,48.052,0.01,56.199 c0,6.245,2.18,12.364,6.158,17.213l7.191,8.75c3.356,4.083,3.356,10.7,0,14.774l-7.21,8.769C2.19,110.542,0,116.653,0,122.897 C0,131.025,3.605,138.666,9.907,143.858z M31.92,96.926c3.356-4.083,3.347-10.691,0-14.774L17.241,64.308 c-1.884-2.324-2.897-5.135-2.897-8.119c0-3.834,1.702-7.44,4.647-9.869c2.314-1.903,5.116-2.917,8.109-2.917 c3.844,0,7.449,1.702,9.878,4.657l11.475,13.971c3.347,4.083,8.788,4.083,12.135,0l11.484-13.971 c4.074-4.972,12.976-5.862,17.987-1.759c2.63,2.17,4.255,5.221,4.59,8.616c0.334,3.395-0.688,6.723-2.859,9.352L77.131,82.123 c-3.356,4.083-3.347,10.701,0,14.774L91.81,114.75c2.161,2.63,3.156,5.958,2.84,9.362c-0.335,3.404-1.979,6.464-4.609,8.616 c-5.001,4.15-13.856,3.232-17.968-1.769l-11.484-13.952c-3.356-4.083-8.798-4.074-12.145,0l-11.465,13.961 c-4.313,5.24-12.756,6.043-17.968,1.778c-2.974-2.458-4.667-6.062-4.667-9.897c0-2.983,0.985-5.776,2.897-8.1L31.92,96.926z" />
        </SVG>
    )
}

export default NoInternet;