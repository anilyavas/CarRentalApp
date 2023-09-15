import { style } from "./Register.style";
import { TextInput, Text, View, Pressable } from "react-native";

export function Register() {
  return (
    <>
      <View style={style.headerContainer}>
        <Text style={style.header}>Register</Text>
      </View>
      <View style={style.nameContainer}>
        <View>
          <TextInput style={style.input} value="Full Name" />
        </View>
        <View style={style.mailContainer}>
          <TextInput style={style.input} value="Email Address" />
        </View>
        <View style={style.birthdateContainer}>
          <TextInput style={style.input} value="Birth Date" />
        </View>
        <View style={style.numberContainer}>
          <TextInput style={style.input} value="Mobile Number" />
        </View>
        <View style={style.registerContainer}>
          <Pressable style={style.registerButton}>
            <Text style={style.buttonText}>Register</Text>
          </Pressable>
          <Pressable style={style.subbuttonLogin}>
            <Text style={style.subbuttonText}>Registered Already?Login</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
