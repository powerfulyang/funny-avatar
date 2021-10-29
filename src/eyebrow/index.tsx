import type { FC } from 'react';
import React from 'react';
import { MaleEyebrow } from './male.js';
import { FemaleEyebrow } from './female.js';

export enum Gender {
  male = 'male',
  female = 'female',
}

export const Eyebrow: FC<{ style: Gender }> = (props) => {
  const { style } = props;
  switch (style) {
    case Gender.male:
      return <MaleEyebrow />;
    case Gender.female:
    default:
      return <FemaleEyebrow />;
  }
};
