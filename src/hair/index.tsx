import type { FC } from 'react';
import React from 'react';

import { NormalHair } from './normal.js';
import { ThickHair } from './thick.js';
import { MohawkHair } from './mohawk.js';
import { WomanLongHair } from './womanLong.js';
import { WomanShortHair } from './womanShort.js';

export enum HairStyle {
  Normal = 'Normal',
  Thick = 'Thick',
  Mohawk = 'Mohawk',
  WomanLong = 'WomanLong',
  WomanShort = 'WomanShort',
}

export const Hair: FC<{ style: HairStyle; color: string }> = (props) => {
  const { style, color } = props;
  switch (style) {
    case HairStyle.Thick:
      return <ThickHair color={color} />;
    case HairStyle.Mohawk:
      return <MohawkHair color={color} />;
    case HairStyle.WomanLong:
      return <WomanLongHair color={color} />;
    case HairStyle.WomanShort:
      return <WomanShortHair color={color} />;
    case HairStyle.Normal:
    default:
      return <NormalHair color={color} />;
  }
};
