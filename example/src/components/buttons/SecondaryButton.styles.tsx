import { StyleSheet } from "react-native";
import Theme from "../../themes/Theme";

export default StyleSheet.create({
  root: {
    marginTop: 24,
    borderRadius: 18,
    backgroundColor: Theme.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    color: Theme.black,
    textAlign: "center",
  },
});
