import { style } from "./Walkthrough.style";
import { Pressable, View, Text } from "react-native";
export function Walkthrough() {
  return (
    <>
      <View style={style.headerContainer}>
        <Text style={style.header}>Kiray</Text>
      </View>
      <View style={style.subtitleContainer}>
        <Text style={style.subtitle}>
          Rent & Hire a Car with ease. We have wide range of cars at affordable
          prices.
        </Text>
      </View>
      <View style={style.buttonContainer}>
        <Pressable style={style.button}>
          <Text style={style.buttonText}>Continue</Text>
        </Pressable>
      </View>
    </>
  );
}
