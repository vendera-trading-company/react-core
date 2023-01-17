import { TouchableOpacity } from "react-native";
import styles from "./SecondaryButton.styles";
import Text from "../Text";

interface ISecondaryButtonProps {
  onPress?: any;
  children?: any;
}

export const SecondaryButton = (props: ISecondaryButtonProps) => {
  const { onPress, children } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
