import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { style } from "./App.style";
import { Walkthrough } from "./screens/Walkthrough/Walkthrough";
import { Login } from "./screens/Login/Login";
import { Register } from "./screens/Register/Register";
import { Home } from "./screens/Home/Home";
export default function App() {
  return (
    <View style={style.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
