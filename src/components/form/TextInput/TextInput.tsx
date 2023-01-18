/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-interface */

import {
  TextInput as ReactTextInput,
  StyleProp,
  TextStyle,
} from 'react-native';
import TextController from '../../../support/input-controller/TextController';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';

export interface ITextInputProps {
  controller: TextController;
  style: StyleProp<TextStyle>;
  errorTextStyle: StyleProp<TextStyle>;
}

export const TextInput = (props: ITextInputProps) => {
  const { style, errorTextStyle, controller, ...rest } = props;

  const errorText = controller.validate();

  const errorTextOpacity = useSharedValue(0);

  const errorTextAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: errorTextOpacity.value,
      errorTextStyle,
    };
  }, [errorTextStyle]);

  useEffect(() => {
    errorTextOpacity.value = errorText
      ? withTiming(1, {
          duration: 300,
        })
      : withTiming(0, {
          duration: 300,
        });
  }, [errorTextOpacity]);

  return (
    <>
      <Animated.View>
        <ReactTextInput
          onChangeText={(text: string) => {
            controller.setValue(text);
            controller.update();
          }}
          style={style}
          {...rest}
        />
      </Animated.View>
      <Animated.Text style={errorTextAnimatedStyle}>{errorText}</Animated.Text>
    </>
  );
};

export default TextInput;
