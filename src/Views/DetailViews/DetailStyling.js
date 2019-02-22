import { StyleSheet } from "react-native";

export const textColorTitle = "#232323";
export const textColorBody = "#515151";

export const defaultPadding = 16;
export const defaultBackground = "white";

export const styles = StyleSheet.create({
  title: {
    marginTop: defaultPadding,
    marginLeft: defaultPadding,
    marginRight: defaultPadding,
    fontSize: 20,
    fontWeight: "bold",
    color: textColorTitle,
    textAlign: "left"
  },
  subtitle: {
    marginLeft: defaultPadding,
    marginRight: defaultPadding,
    marginTop: 2,
    marginBottom: defaultPadding,
    fontSize: 14,
    color: textColorBody,
    textAlign: "left"
  }
});
