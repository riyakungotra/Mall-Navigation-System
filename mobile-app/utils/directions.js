import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

<Button
  title="Get Direction"
  onPress={() => navigation.navigate('NavigationScreen')}
/>