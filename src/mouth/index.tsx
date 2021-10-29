import type { FC } from 'react';
import React from 'react';

import { LaughMouth } from './laugh.js';
import { SmileMouth } from './smile.js';
import { PeaceMouth } from './peace.js';

export enum MouthStyle {
  Laugh = 'Laugh',
  Smile = 'Smile',
  Peace = 'Peace',
}

export const Mouth: FC<{ style: MouthStyle }> = (props) => {
  const { style } = props;
  switch (style) {
    case MouthStyle.Laugh:
      return <LaughMouth />;
    case MouthStyle.Smile:
      return <SmileMouth />;
    case MouthStyle.Peace:
    default:
      return <PeaceMouth />;
  }
};
