import type { FC } from 'react';
import React from 'react';
import chroma from 'chroma-js';

import { HoodieShirt } from './hoodie.js';
import { ShortShirt } from './short.js';
import { PoloShirt } from './polo.js';

export enum ShirtStyle {
  Hoodie = 'Hoodie',
  Polo = 'Polo',
  Short = 'Short',
}

export const Shirt: FC<{ color: string; style: ShirtStyle }> = (props) => {
  const { style, color } = props;
  const secondColor = chroma(color).brighten(1).hex();
  switch (style) {
    case ShirtStyle.Hoodie:
      return <HoodieShirt color={color} lightColor={secondColor} />;
    case ShirtStyle.Polo:
      return <PoloShirt color={color} lightColor={secondColor} />;
    case ShirtStyle.Short:
    default:
      return <ShortShirt color={color} />;
  }
};
