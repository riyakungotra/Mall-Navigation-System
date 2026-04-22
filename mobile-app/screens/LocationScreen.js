import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";

export default function LocationScreen({ route, navigation }) {

  const { store } = route.params;

  const locations = [
    "Entrance Gate",
    "Main Entrance",
    "Information Desk",
    "Escalator - Level 1",
    "Escalator - Level 2",
    "Lift A",
    "Lift B",
    "Lifestyle","Max","Splash","Croma","Trends","Trends Footwear","Centro",
    "Jockey","Monte Carlo","Numero Uno","Go Colors","Mini Club","Bata","Sketchers",
    "Shoe Tree","Lenskart","Sports Station","House of Candy","Tents",

    "Lifestyle","Malwa Plaza","Crema","Koing","Croma","Charles & Keith","Vero Moda",
    "Forever 21","Centro","Jack & Jones","GAP","Banana Republic","H&M Home","EVS Sports",
    "Puma","GAP Kids","Cafe Coffee Day","Muji","Decathlon","Sephora","Mini So","Levis",
    "Pepe Jeans","Marks & Spencer","Marks & Spencer Food","Louis Philippe","Woodland",
    "Reliance Digital","H&M","Zara","Zara Kids","Future Stinport","Future World (Apple)","M&S",

    "Haldiram's","Taco Bell","Yo China","Brew Waves","Pirates of Grill","Chaat Bazaar",
    "Bonzai Banzail","Taco Biryani","Funcity","Hamleys","Amiran Biryani","Burger King",
    "Wok Noodles","Domino's","McDonald's","PVR Cinemas","Subway","Starbucks","Sonbrage",
    "KFC","Gyro Express","Havmore"
  ];

  const [input, setInput] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  const handleSearch = (text) => {
    setInput(text);

    if (text.length > 0) {
      const filtered = locations.filter((loc) =>
        loc.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations([]);
    }
  };

  const selectLocation = (loc) => {
    setInput(loc);
    setFilteredLocations([]);
  };

  return (
    <View style={styles.container}>

      <View style={styles.content}>

        {/* Searching For */}
        <Text style={styles.heading}>You are searching for</Text>
        <Text style={styles.storeName}>{store}</Text>

        {/* Current Position */}
        <Text style={styles.heading}>You are in front of</Text>

        <TextInput
          style={styles.input}
          placeholder="Type location..."
          placeholderTextColor="#aaa"
          value={input}
          onChangeText={handleSearch}
        />

        {/* Suggestions */}
        {filteredLocations.length > 0 && (
          <FlatList
            data={filteredLocations}
            keyExtractor={(item, index) => index.toString()}
            style={styles.suggestionBox}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.suggestionItem}
                onPress={() => selectLocation(item)}
              >
                <Text style={styles.suggestionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Navigation", {
              store: store,
              currentLocation: input
            })
          }
        >
          <Text style={styles.buttonText}>Get Directions</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  content: {
    width: "100%",
    maxWidth: 420,
    alignItems: "center"
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    textAlign: "center"
  },

  storeName: {
    fontSize: 30,
    color: "#e53935",
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center"
  },

  input: {
    width: "100%",
    backgroundColor: "#222",
    color: "#fff",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
    textAlign: "center"
  },

  suggestionBox: {
    width: "100%",
    backgroundColor: "#111",
    marginTop: 5,
    borderRadius: 8,
    maxHeight: 150
  },

  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333"
  },

  suggestionText: {
    color: "#fff",
    fontSize: 16
  },

  button: {
    backgroundColor: "#e53935",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 30
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }

});