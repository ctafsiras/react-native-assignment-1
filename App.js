import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState(true);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,

            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/GettingStartedCongratulations.png",
            }}
            style={{ width: 100, height: 100 }}
          />
          <View>
            <Text style={{ fontSize: 17 }}>The Octocat</Text>
            <Text style={{ fontSize: 17 }}>@octocat</Text>
            <Text style={{ fontSize: 17 }}>Joined 25 Jan 2011</Text>
          </View>
        </View>
        <Text style={{ fontSize: 16, paddingTop: 15 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          temporibus voluptatem accusamus, provident sapiente iusto vel suscipit
          excepturi voluptas velit!
        </Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#B2BEB5",
            width: "300",
            padding: 20,
            marginTop: 10,
            gap: 10,
            justifyContent: "space-around",
            borderRadius: 10,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20 }}>Repos</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>8</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20 }}>Followers</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>3938</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20 }}>Following</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>9</Text>
          </View>
        </View>
        <View style={{ marginTop: 10, gap: 10 }}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image
              source={{
                uri: "https://reactnative.dev/docs/assets/GettingStartedCongratulations.png",
              }}
              style={{ height: 40, width: 40 }}
            ></Image>
            <Text style={{ fontSize: 18 }}>Sab Fransisco</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image
              source={{
                uri: "https://reactnative.dev/docs/assets/GettingStartedCongratulations.png",
              }}
              style={{ height: 40, width: 40 }}
            ></Image>
            <Text style={{ fontSize: 18 }}>https://github.blo</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image
              source={{
                uri: "https://reactnative.dev/docs/assets/GettingStartedCongratulations.png",
              }}
              style={{ height: 40, width: 40 }}
            ></Image>
            <Text style={{ fontSize: 18, color: "#B2BEB5" }}>
              Not Available
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image
              source={{
                uri: "https://reactnative.dev/docs/assets/GettingStartedCongratulations.png",
              }}
              style={{ height: 40, width: 40 }}
            ></Image>
            <Text style={{ fontSize: 18 }}>@github</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 30,
  },
});
