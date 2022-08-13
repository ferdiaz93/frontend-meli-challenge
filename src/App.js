import Header from './components/Header';
import ProductList from './components/ProductList';
import { SearchProvider } from './context';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Header/>
        <ProductList/>
      </SearchProvider>
    </div>
  );
}

export default App;
