import type { FC } from 'react';
import React from 'react';

import { RoundGlasses } from './round.js';
import { SquareGlasses } from './square.js';

export enum GlassesStyle {
  Round = 'Round',
  Square = 'Square',
  None = 'None',
}

export const Glasses: FC<{ style: GlassesStyle }> = (props) => {
  const { style } = props;
  switch (style) {
    case GlassesStyle.Round:
      return <RoundGlasses />;
    case GlassesStyle.Square:
      return <SquareGlasses />;
    case GlassesStyle.None:
    default:
      return null;
  }
};
