import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductInfo from './components/ProductInfo';
import { SearchProvider } from './context';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <SearchProvider>
      <Router>
        <div className="App">
            <Header/>
              <Routes>
                <Route exact path="/" element={<h3 className="initial-message">Realizar una búsqueda</h3>}/>
                <Route path="/items" element={<ProductList/>}/>
                <Route path="/items/:id" element={<ProductInfo/>}/>
              </Routes>
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
