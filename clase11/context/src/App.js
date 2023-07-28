import './App.css';

// Components
import Layout from './components/layout';
import Text from './components/text';
import Button from './components/button';

// Contexts
import ThemeProvider from './context/theme/themeProvider';
import CartProvider from './context/cart/cartProvider';

function App() {
  return (
    <CartProvider defaultValue={[]}>
      <ThemeProvider defaultValue={false}>
        <Layout>
          <Text value="Mi primer contexto" />
          <Button>Cambiar modo</Button>
        </Layout>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
