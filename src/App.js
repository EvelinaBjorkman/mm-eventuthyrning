// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Cart from './components/cart/index.jsx';
import Footer from './components/footer/index.jsx';
import Header from './components/header/index.jsx';
import CategoryListPage from './pages/CategoryListPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import ProductListPage from './pages/ProductListPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import StartPage from './pages/StartPage.jsx';

function App() {
  return (
    <div>
      <Header/>
      {/* <Cart/> */}
      <Switch>

        <Route path="/produkter/:categoryId">
          <ProductListPage/>
        </Route>

        <Route path="/produkt/:productId">
          <ProductDetailPage/>
        </Route>

        <Route path="/produkter">
          <CategoryListPage/>
        </Route>

        <Route path="/kassa">
          <CheckoutPage/>
        </Route>

        <Route path="/tjanster">
          <ServicesPage/>
        </Route>

        <Route path="/profil">
          <ProfilePage/>
        </Route>

        <Route path="/login">
          <LoginPage/>
        </Route>

        <Route path="/">
          <StartPage/>
        </Route>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
