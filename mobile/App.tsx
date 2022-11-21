import { Box, NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans'

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Box flex={1} alignItems="center" justifyContent="center">Hello World</Box>
    </NativeBaseProvider>
  );
}
