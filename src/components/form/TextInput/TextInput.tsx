import {
  TextInput as ReactTextInput,
  StyleProp,
  TextStyle,
} from "react-native";
import TextController from "../../../support/input-controller/TextController";

export interface ITextInputProps {
  controller: TextController;
  style: StyleProp<TextStyle>;
  errorTextStyle: StyleProp<TextStyle>;
}

export const TextInput = (props: ITextInputProps) => {
  const { style, errorTextStyle, controller, ...rest } = props;

  return (
    <>
      <ReactTextInput
        value={controller.getValue() ?? ""}
        onChangeText={(text: string) => {
          controller.setValue(text);
          controller.update();
        }}
        style={style}
        {...rest}
      />
    </>
  );
};

export default TextInput;
