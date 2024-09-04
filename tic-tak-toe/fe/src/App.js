import { ChakraProvider } from '@chakra-ui/react';
import Game from './components/Game';
import theme from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Game />
    </ChakraProvider>
  );
}

export default App;
