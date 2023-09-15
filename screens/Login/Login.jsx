import { style } from "./Login.style";
import { TextInput, Text, View, Pressable } from "react-native";

export function Login() {
  return (
    <>
      <View style={style.headerContainer}>
        <Text style={style.header}>Login</Text>
      </View>
      <View style={style.usernameContainer}>
        <TextInput style={style.usernameInput} value="Username" />
      </View>
      <View style={style.passwordContainer}>
        <TextInput style={style.passwordInput} value="Password" />
      </View>
      <View style={style.loginContainer}>
        <Pressable style={style.button}>
          <Text style={style.loginText}>Login</Text>
        </Pressable>
      </View>
      <View style={style.subButtons}>
        <Pressable>
          <Text style={[style.subButtonText, { paddingBottom: 10 }]}>
            Forget Password?
          </Text>
        </Pressable>
        <Pressable>
          <Text style={style.subButtonText}>Register</Text>
        </Pressable>
      </View>
    </>
  );
}
