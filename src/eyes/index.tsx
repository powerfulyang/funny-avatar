import type { FC } from 'react';
import React from 'react';

import { CircleEyes } from './circle.js';
import { OvalEyes } from './oval.js';
import { SmileEyes } from './smile.js';

export enum EyesStyle {
  Circle = 'Circle',
  Oval = 'Oval',
  Smile = 'Smile',
}

export const Eyes: FC<{ style: EyesStyle }> = (props) => {
  const { style } = props;
  switch (style) {
    case EyesStyle.Circle:
      return <CircleEyes />;
    case EyesStyle.Smile:
      return <SmileEyes />;
    case EyesStyle.Oval:
    default:
      return <OvalEyes />;
  }
};
