import { getEnumValues, isUndefined, randomItem } from '@powerfulyang/utils';
import { EarSize } from '../ear/index.js';
import { HairStyle } from '../hair/index.js';
import { Gender } from '../eyebrow/index.js';
import { ShirtStyle } from '../shirt/index.js';
import type { AvatarConfig } from '../types.js';
import { HatStyle } from '../hat/index.js';
import { EyesStyle } from '../eyes/index.js';
import { GlassesStyle } from '../glasses/index.js';
import { NoseStyle } from '../nose/index.js';
import { MouthStyle } from '../mouth/index.js';
import { Shape } from '../types.js';

export const defaultOptions: Record<keyof AvatarConfig, any> = {
  shape: getEnumValues(Shape),
  eyebrowStyle: getEnumValues(Gender),
  faceColor: ['#F9C9B6', '#AC6651'],
  earSize: getEnumValues(EarSize),
  hairColor: ['#000', '#fff', '#77311D', '#FC909F', '#D2EFF3', '#506AF4', '#F48150'],
  hairStyle: getEnumValues(HairStyle),
  hatColor: ['#000', '#fff', '#77311D', '#FC909F', '#D2EFF3', '#506AF4', '#F48150'],
  hatStyle: getEnumValues(HatStyle),
  eyesStyle: getEnumValues(EyesStyle),
  glassesStyle: getEnumValues(GlassesStyle),
  noseStyle: getEnumValues(NoseStyle),
  mouthStyle: getEnumValues(MouthStyle),
  shirtStyle: getEnumValues(ShirtStyle),
  shirtColor: ['#9287FF', '#6BD9E9', '#FC909F', '#F4D150', '#77311D'],
  bgColor: [
    '#9287FF',
    '#6BD9E9',
    '#FC909F',
    '#F4D150',
    '#E0DDFF',
    '#D2EFF3',
    '#FFEDEF',
    '#FFEBA4',
    '#506AF4',
    '#F48150',
    '#74D153',
    'linear-gradient(45deg, #178BFF 0%, #FF6868 100%)',
    'linear-gradient(45deg, #176FFF 0%, #68FFEF 100%)',
    'linear-gradient(45deg, #FF1717 0%, #FFD368 100%)',
    'linear-gradient(90deg, #36CD1C 0%, #68DEFF 100%)',
    'linear-gradient(45deg, #3E1CCD 0%, #FF6871 100%)',
    'linear-gradient(45deg, #1729FF 0%, #FF56F7 100%)',
    'linear-gradient(45deg, #56B5F0 0%, #45CCB5 100%)',
  ],
};
export const genConfig = (userConfig: Partial<AvatarConfig>) => {
  const config = {};
  Object.entries(defaultOptions).forEach(([key, value]) => {
    if (Array.isArray(value) && isUndefined(userConfig[key])) {
      Reflect.set(config, key, randomItem(value));
    } else {
      Reflect.set(config, key, userConfig[key] || value);
    }
  });
  return config as AvatarConfig;
};
