import type { EarSize } from './ear/index.js';
import type { HairStyle } from './hair/index.js';
import type { HatStyle } from './hat/index.js';
import type { Gender } from './eyebrow/index.js';
import type { GlassesStyle } from './glasses/index.js';
import type { EyesStyle } from './eyes/index.js';
import type { NoseStyle } from './nose/index.js';
import type { MouthStyle } from './mouth/index.js';
import type { ShirtStyle } from './shirt/index.js';

export interface AvatarConfig {
  faceColor: string;
  earSize: EarSize;
  hairColor: string;
  hairStyle: HairStyle;
  hatColor: string;
  hatStyle: HatStyle;
  eyesStyle: EyesStyle;
  glassesStyle: GlassesStyle;
  noseStyle: NoseStyle;
  mouthStyle: MouthStyle;
  shirtStyle: ShirtStyle;
  shirtColor: string;
  bgColor: string;
  shape: Shape;
  eyebrowStyle: Gender;
}

export enum Shape {
  circle = 'circle',
  rounded = 'rounded',
  square = 'square',
}

export interface NiceAvatarProps extends Partial<AvatarConfig> {
  className?: string;
}
