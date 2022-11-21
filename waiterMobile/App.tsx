import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';


import { Main } from './src/Main';

export default function App() {
  const [fontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Main />
      <StatusBar style="dark" />
    </>
  );
}
