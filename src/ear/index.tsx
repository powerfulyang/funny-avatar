import type { FC } from 'react';
import React from 'react';
import { SmallEar } from './small.js';
import { BigEar } from './big.js';

export enum EarSize {
  small = 'small',
  big = 'big',
}

export const Ear: FC<{ color: string; size: EarSize }> = (props) => {
  const { color, size } = props;
  return (
    <>
      {size === EarSize.small && <SmallEar color={color} />}
      {size === EarSize.big && <BigEar color={color} />}
    </>
  );
};
