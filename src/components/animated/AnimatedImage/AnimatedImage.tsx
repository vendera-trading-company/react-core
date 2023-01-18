/* eslint-disable eqeqeq */
/* eslint-disable prefer-template */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable dot-notation */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ImageProps } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import React, { useEffect, useState } from 'react';

interface IAnimatedImageProps extends ImageProps {
  fromColor?: any;
  toColor?: any;
}

export const AnimatedImage = (props: IAnimatedImageProps) => {
  const {
    style = {} as any,
    source,
    resizeMode = 'cover',
    resizeMethod,
    fromColor,
    toColor,
  } = props;

  const [loaded, setLoaded] = useState(false);

  const placeholderHeight = useSharedValue(style['height'] ?? 'auto');
  const placeholderWidth = useSharedValue(style['width'] ?? 'auto');
  const borderRadius = useSharedValue(parseFloat(style['borderRadius'] ?? 0));
  const aspectRatio = useSharedValue(parseFloat(style['aspectRatio'] ?? 1));
  const imageBackgroundColor = useSharedValue(0);
  const animatedOpacity = useSharedValue(0);

  const fixedWidth = useSharedValue(style['width'] ?? 'auto');
  const fixedHeight = useSharedValue(style['height'] ?? 'auto');

  const placeholderStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      imageBackgroundColor.value,
      [0, 1],
      [fromColor, toColor ?? fromColor]
    );

    return {
      position: 'absolute',
      aspectRatio: aspectRatio.value,
      height: placeholderHeight.value,
      width: placeholderWidth.value,
      borderRadius: borderRadius.value,
      backgroundColor,
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      aspectRatio: aspectRatio.value,
      width: fixedWidth.value,
      opacity: animatedOpacity.value,
      height: fixedHeight.value,
      borderRadius: borderRadius.value,
    };
  });

  useEffect(() => {
    if (loaded) {
      placeholderHeight.value = 0;
      placeholderWidth.value = 0;
    }
    imageBackgroundColor.value = !loaded
      ? withRepeat(withTiming(1, { duration: 600 }), -1, true)
      : withTiming(0, { duration: 600 });
  }, [loaded]);

  useEffect(() => {
    animatedOpacity.value = loaded ? withTiming(1, { duration: 400 }) : 0;
  }, [loaded]);

  return (
    <>
      {animatedOpacity.value == 0 && <Animated.View style={placeholderStyle} />}
      <Animated.Image
        resizeMethod={resizeMethod}
        resizeMode={resizeMode}
        style={imageStyle}
        source={{ uri: '' + source }}
        onLoad={(e) => {
          if (loaded) {
            return;
          }

          setLoaded(true);
        }}
      />
    </>
  );
};

export default AnimatedImage;
