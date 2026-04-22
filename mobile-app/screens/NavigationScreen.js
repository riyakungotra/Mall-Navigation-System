import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Svg, { Line, Circle } from "react-native-svg";

export default function NavigationScreen({ route }) {

  const { store, currentLocation } = route.params;

  // Example coordinates for map points
  const locations = {
    "Apple Store": { x: 80, y: 200 },
    "Nike": { x: 220, y: 150 },
    "Zara": { x: 300, y: 300 },
    "Starbucks": { x: 150, y: 350 },
    "Escalator - Level 1": { x: 120, y: 100 },
    "Escalator - Level 2": { x: 120, y: 100 },
    "Entrance Gate": { x: 40, y: 400 }
  };

  const start = locations[currentLocation] || { x: 40, y: 400 };
  const end = locations[store] || { x: 300, y: 300 };

  return (
    <View style={styles.container}>

      {/* Navigation Info */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>From: {currentLocation}</Text>
        <Text style={styles.infoText}>To: {store}</Text>
      </View>

      {/* Map */}
      <View style={styles.mapContainer}>

        <Image
          source={require("../assets/maps/level1.png")}
          style={styles.map}
        />

        {/* SVG Overlay for Path */}
        <Svg style={StyleSheet.absoluteFill}>

          {/* Start Point */}
          <Circle
            cx={start.x}
            cy={start.y}
            r="8"
            fill="green"
          />

          {/* Destination */}
          <Circle
            cx={end.x}
            cy={end.y}
            r="10"
            fill="red"
          />

          {/* Path Line */}
          <Line
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            stroke="blue"
            strokeWidth="4"
          />

        </Svg>

      </View>

      {/* Directions */}
      <View style={styles.directionsBox}>

        <Text style={styles.directionTitle}>Directions</Text>

        <Text style={styles.direction}>• Go straight</Text>
        <Text style={styles.direction}>• Turn right near escalator</Text>
        <Text style={styles.direction}>• Walk 20 meters</Text>
        <Text style={styles.direction}>• {store} is on your left</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20
  },

  infoBox: {
    marginBottom: 10
  },

  infoText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },

  mapContainer: {
    alignItems: "center",
    justifyContent: "center"
  },

  map: {
    width: 350,
    height: 500,
    resizeMode: "contain"
  },

  directionsBox: {
    marginTop: 20
  },

  directionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },

  direction: {
    color: "#ddd",
    fontSize: 16,
    marginBottom: 5
  }

});
