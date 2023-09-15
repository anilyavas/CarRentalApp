import { View, Text, Pressable } from "react-native";
import { style } from "./Home.style";
export function Home() {
  return (
    <>
      <View style={style.headerContainer}>
        <Text style={style.header}>Kiray</Text>
      </View>
      <View style={style.buttons}>
        <View style={style.loginContainer}>
          <Pressable style={style.button}>
            <Text style={style.buttonText}>Login</Text>
          </Pressable>
        </View>
        <View style={style.registerContainer}>
          <Pressable style={style.button}>
            <Text style={style.buttonText}>Register</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
