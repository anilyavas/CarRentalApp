import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  headerContainer: {
    paddingTop: 130,
  },
  header: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 45,
    color: "#FFF",
  },
  usernameContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 200,
    width: "100%",
  },
  usernameInput: {
    backgroundColor: "rgba(204, 204, 204, 0.61)",
    width: 350,
    height: 50,
    borderRadius: 25,
    color: "#FFF",
    fontSize: 20,
    paddingLeft: 20,
  },
  passwordContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    width: "100%",
  },
  passwordInput: {
    backgroundColor: "rgba(204, 204, 204, 0.61)",
    width: 350,
    height: 50,
    borderRadius: 50,
    color: "#FFF",
    fontSize: 20,
    padding: 20,
  },
  loginContainer: {
    position: "absolute",
    bottom: 180,
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
  loginText: {
    fontSize: 27,
    color: "#FFF",
    textAlign: "center",
    fontWeight: "400",
  },
  subButtons: {
    position: "absolute",
    bottom: 100,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  subButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
