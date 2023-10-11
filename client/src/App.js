import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProductList />} />
				<Route path="/add-product" element={<AddProduct />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
