import type { FC } from 'react';
import React from 'react';

import { LongNose } from './long.js';
import { ShortNose } from './short.js';
import { RoundNose } from './round.js';

export enum NoseStyle {
  Long = 'Long',
  Short = 'Short',
  Round = 'Round',
}

export const Nose: FC<{ style: NoseStyle }> = (props) => {
  const { style } = props;
  switch (style) {
    case NoseStyle.Long:
      return <LongNose />;
    case NoseStyle.Round:
      return <RoundNose />;
    case NoseStyle.Short:
    default:
      return <ShortNose />;
  }
};
