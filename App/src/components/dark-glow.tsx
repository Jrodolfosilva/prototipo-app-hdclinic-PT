// Fundo preto com brilho radial no topo, igual ao protótipo:
// radial-gradient(ellipse 110% <glowRy> at 72% 0%, rgba(255,255,255,.16), transparent 72%)
// `curve` desenha a base em meia-lua (border-radius: 0 0 50% 50% / 0 0 <curve>px <curve>px).
import { useId, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Defs, Path, RadialGradient, Stop } from 'react-native-svg';

import { color } from '@/constants/tokens';

type Props = {
  /** Altura vertical da elipse, em fração da área do brilho. */
  glowRy?: number;
  /** Altura da área do brilho em px. Padrão: altura toda. */
  glowHeight?: number;
  /** Altura da meia-lua na base, em px. 0 = retângulo. */
  curve?: number;
};

export function DarkGlow({ glowRy = 1, glowHeight, curve = 0 }: Props) {
  const id = useId().replace(/:/g, '');
  const [box, setBox] = useState({ w: 0, h: 0 });
  const { w, h } = box;
  const gh = glowHeight ?? h;

  const shape =
    curve > 0
      ? `M0 0 H${w} V${h - curve} A${w / 2} ${curve} 0 0 1 0 ${h - curve} Z`
      : `M0 0 H${w} V${h} H0 Z`;

  return (
    <View
      pointerEvents="none"
      style={StyleSheet.absoluteFill}
      onLayout={(e) => setBox({ w: e.nativeEvent.layout.width, h: e.nativeEvent.layout.height })}>
      {w > 0 && h > 0 && (
        <Svg width={w} height={h}>
          <Defs>
            <RadialGradient
              id={id}
              gradientUnits="userSpaceOnUse"
              cx={0}
              cy={0}
              r={1}
              gradientTransform={`translate(${w * 0.72} 0) scale(${w * 1.1} ${gh * glowRy})`}>
              <Stop offset={0} stopColor={color.white} stopOpacity={0.16} />
              <Stop offset={0.72} stopColor={color.white} stopOpacity={0} />
            </RadialGradient>
          </Defs>
          <Path d={shape} fill={color.black} />
          <Path d={shape} fill={`url(#${id})`} />
        </Svg>
      )}
    </View>
  );
}
