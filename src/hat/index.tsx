import type { FC } from 'react';
import React from 'react';

import { TurbanHat } from './turban.js';
import { BeanieHat } from './beanie.js';

export enum HatStyle {
  Turban = 'Turban',
  Beanie = 'Beanie',
  none = 'none',
}

export const Hat: FC<{ color: string; style: HatStyle }> = (props) => {
  const { style, color } = props;
  switch (style) {
    case HatStyle.Beanie:
      return <BeanieHat color={color} />;
    case HatStyle.Turban:
      return <TurbanHat color={color} />;
    default:
      return null;
  }
};
