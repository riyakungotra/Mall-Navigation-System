import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function MapScreen({ route }) {
  const { destination, destinationLevel, currentLevel } = route.params;

  const directions = [
    `Start from ${currentLevel}`,
    "Move straight",
    `Go towards ${destinationLevel}`,
    `Reach ${destination}`,
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 20 }}>
      
      <Text style={{ color: "red", fontSize: 22 }}>
        Navigation Map
      </Text>

      <Text style={{ color: "white" }}>
        From: {currentLevel}
      </Text>

      <Text style={{ color: "white" }}>
        To: {destination} ({destinationLevel})
      </Text>

      <View
        style={{
          height: 250,
          backgroundColor: "#222",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>
          Map of {destinationLevel}
        </Text>
      </View>

      <ScrollView style={{ marginTop: 20 }}>
        {directions.map((step, i) => (
          <Text key={i} style={{ color: i % 2 ? "red" : "white" }}>
            {i + 1}. {step}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}