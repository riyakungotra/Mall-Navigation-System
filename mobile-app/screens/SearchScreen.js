import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";

export default function SearchScreen({ navigation }) {

  const stores = {
    "Lifestyle": "Level 1",
    "Max": "Level 1",
    "Splash": "Level 1",
    "Croma": "Level 1",
    "Trends": "Level 1",
    "Trends Footwear": "Level 1",
    "Centro": "Level 1",
    "Jockey": "Level 1",
    "Monte Carlo": "Level 1",
    "Numero Uno": "Level 1",
    "Go Colors": "Level 1",
    "Mini Club": "Level 1",
    "Bata": "Level 1",
    "Sketchers": "Level 1",
    "Shoe Tree": "Level 1",
    "Lenskart": "Level 1",
    "Sports Station": "Level 1",
    "House of Candy": "Level 1",
    "Tents": "Level 1",

    "Malwa Plaza": "Level 2",
    "Crema": "Level 2",
    "Koing": "Level 2",
    "Charles & Keith": "Level 2",
    "Vero Moda": "Level 2",
    "Forever 21": "Level 2",
    "Jack & Jones": "Level 2",
    "GAP": "Level 2",
    "Banana Republic": "Level 2",
    "H&M Home": "Level 2",
    "EVS Sports": "Level 2",
    "Puma": "Level 2",
    "GAP Kids": "Level 2",
    "Cafe Coffee Day": "Level 2",
    "Muji": "Level 2",
    "Decathlon": "Level 2",
    "Sephora": "Level 2",
    "Mini So": "Level 2",
    "Levis": "Level 2",
    "Pepe Jeans": "Level 2",
    "Marks & Spencer": "Level 2",
    "Marks & Spencer Food": "Level 2",
    "Louis Philippe": "Level 2",
    "Woodland": "Level 2",
    "Reliance Digital": "Level 2",
    "H&M": "Level 2",
    "Zara": "Level 2",
    "Zara Kids": "Level 2",
    "Future Stinport": "Level 2",
    "Future World (Apple)": "Level 2",
    "M&S": "Level 2",

    "Haldiram's": "Level 3",
    "Taco Bell": "Level 3",
    "Yo China": "Level 3",
    "Brew Waves": "Level 3",
    "Pirates of Grill": "Level 3",
    "Chaat Bazaar": "Level 3",
    "Bonzai Banzail": "Level 3",
    "Taco Biryani": "Level 3",
    "Funcity": "Level 3",
    "Hamleys": "Level 3",
    "Amiran Biryani": "Level 3",
    "Burger King": "Level 3",
    "Wok Noodles": "Level 3",
    "Domino's": "Level 3",
    "McDonald's": "Level 3",
    "PVR Cinemas": "Level 3",
    "Subway": "Level 3",
    "Starbucks": "Level 3",
    "Sonbrage": "Level 3",
    "KFC": "Level 3",
    "Gyro Express": "Level 3",
    "Havmore": "Level 3"
  };

  const [search, setSearch] = useState("");

  // ✅ Convert object → array of keys
  const filteredStores = Object.keys(stores).filter((store) =>
    store.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Select a Store</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="🔍 Search store..."
        placeholderTextColor="#aaa"
        value={search}
        onChangeText={setSearch}
      />

      {/* Store List */}
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
      >
        {filteredStores.map((store, index) => (
          <TouchableOpacity
            key={index}
            style={styles.storeButton}
            onPress={() =>
              navigation.navigate("Location", {
                store,
                level: stores[store] // ✅ pass level correctly
              })
            }
          >
            <Text style={styles.storeText}>{store}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15
  },
  searchBar: {
    backgroundColor: "#222",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15
  },
  scrollArea: {
    flex: 1
  },
  scrollContent: {
    paddingBottom: 120
  },
  storeButton: {
    backgroundColor: "#e53935",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center"
  },
  storeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});