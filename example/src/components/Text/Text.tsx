import { Text as ReactText, StyleProp, TextStyle } from "react-native";

interface ITextProps {
  children: any;
  style?: StyleProp<TextStyle>;
}

export const Text = (props: ITextProps) => {
  const { children, style } = props;
  return (
    <ReactText style={[{ fontFamily: "Montserrat" }, style]}>
      {children}
    </ReactText>
  );
};

export default Text;
