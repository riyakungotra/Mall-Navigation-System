import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/image/mallbg.png")}
      style={styles.background}
      resizeMode="cover"
      blurRadius={6}
    >
      <View style={styles.overlay}>
        
        {/* Mall Logo */}
        <Image
          source={require("../assets/image/logo.png")}
          style={styles.logo}
        />

        {/* Mall Name */}
        <Text style={styles.mallName}>VR Punjab Mall</Text>

        {/* Address */}
        <Text style={styles.address}>Kharar, Mohali</Text>

        {/* Search Store Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.buttonText}>SEARCH STORE</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.55)", // dark transparent overlay
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    marginBottom: 20,
  },

  mallName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 6,
  },

  address: {
    fontSize: 16,
    color: "#dddddd",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#e53935",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 3,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },

});