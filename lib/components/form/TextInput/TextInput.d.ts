/// <reference types="react" />
import { StyleProp, TextStyle } from 'react-native';
import TextController from '../../../support/input-controller/TextController';
export interface ITextInputProps {
    controller: TextController;
    style: StyleProp<TextStyle>;
    errorTextStyle: StyleProp<TextStyle>;
}
export declare const TextInput: (props: ITextInputProps) => JSX.Element;
export default TextInput;
