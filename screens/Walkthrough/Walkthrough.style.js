import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  headerContainer: {
    paddingTop: 130,
  },
  header: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 45,
    fontWeight: "400",
  },
  subtitleContainer: {
    paddingTop: 250,
    paddingHorizontal: 20,
  },
  subtitle: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 27,
    fontWeight: "400",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 60,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#5C6BC0",
    width: 350,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 25,
  },
});
