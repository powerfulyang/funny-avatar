import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import type { AvatarConfig, NiceAvatarProps } from './types.js';
import { Face } from './face/index.js';
import { Hair } from './hair/index.js';
import { Hat, HatStyle } from './hat/index.js';
import { Ear } from './ear/index.js';
import { Eyebrow } from './eyebrow/index.js';
import { Eyes } from './eyes/index.js';
import { Glasses } from './glasses/index.js';
import { Nose } from './nose/index.js';
import { Mouth } from './mouth/index.js';
import { Shirt } from './shirt/index.js';
import { genConfig } from './utils/index.js';

export const FunnyAvatar: FC<NiceAvatarProps> = (props) => {
  const { className } = props;
  const [config, setConfig] = useState<AvatarConfig>();

  const [borderRadius, setBorderRadius] = useState<string>();
  useEffect(() => {
    const c = genConfig(props);
    setConfig(c);
    // Background shape
    switch (c.shape) {
      case 'circle': {
        setBorderRadius('100%');
        break;
      }
      case 'rounded': {
        setBorderRadius('6px');
        break;
      }
      case 'square': {
        setBorderRadius('0px');
        break;
      }
      default:
    }
  }, [props]);

  return (
    (config && (
      <div
        className={className}
        style={{
          background: config.bgColor,
          borderRadius,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '90%',
            }}
          >
            <Face color={config.faceColor} />
            <Hat color={config.hatColor} style={config.hatStyle} />
            {config.hatStyle === HatStyle.none && (
              <Hair color={config.hairColor} style={config.hairStyle} />
            )}

            {/* Face detail */}
            <div
              style={{
                position: 'absolute',
                right: '-3%',
                top: '30%',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Eyebrow style={config.eyebrowStyle} />
              <Eyes style={config.eyesStyle} />
              <Glasses style={config.glassesStyle} />
              <Ear color={config.faceColor} size={config.earSize} />
              <Nose style={config.noseStyle} />
              <Mouth style={config.mouthStyle} />
            </div>

            <Shirt color={config.shirtColor} style={config.shirtStyle} />
          </div>
        </div>
      </div>
    )) || <span>loading...</span>
  );
};

export { Face, Mouth, Hair, Hat, Ear, Eyebrow, Eyes, Glasses, Nose, Shirt, genConfig };
