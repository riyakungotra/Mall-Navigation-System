import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import LocationScreen from "../screens/LocationScreen";
import NavigationScreen from "../screens/NavigationScreen";

const Stack = createStackNavigator();

export default function Index() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Indoor Mall Navigation App" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Navigation" component={NavigationScreen} />
      </Stack.Navigator>
  );
}