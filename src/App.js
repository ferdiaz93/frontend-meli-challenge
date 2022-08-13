import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { SearchProvider } from './context';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <SearchProvider>
      <Router>
        <div className="App">
            <Header/>
              <Routes>
                <Route exact path="/" element={<h1>SIN RESULTADOS</h1>}/>
                <Route path="/items" element={<ProductList/>}/>
                <Route path="/items/:id" element={<ProductDetails/>}/>
              </Routes>
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
