import React from 'react';
import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { HomePage } from './components/HomePage';
import { SignUp } from './components/SignUp';
import { AdminPrivateRoute, PrivateRoute } from './components/PrivateRoute';
import { RedirectIfLoggedIn } from './components/RedirectIfLoggedIn'; // Add this line
import { BulkOrders } from './components/BulkOrders';
import { AdminLogin } from './components/AdminLogin';
import { AdminRedirectIfLoggedIn } from './components/AdminRedirectIfLoggedIn';
import { AdminDashBoard } from './components/AdminDashBoard';
import { UsersList } from './components/UserDetails';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import { MessageList } from './components/BulkOrderList';
import ProductCards from './components/ProductCards';
import { AddToCart } from './components/AddToCart';
import { OrderList } from './components/OrderList';
import { EditOrderDetails } from './components/EditOrderList';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/log-in' element={<RedirectIfLoggedIn><Login /></RedirectIfLoggedIn>} />
        <Route path='/AdminPage' element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/admin-log-in' element={<AdminRedirectIfLoggedIn><AdminLogin /></AdminRedirectIfLoggedIn>} />
        <Route path='/bulk-orders' element={<PrivateRoute><BulkOrders /></PrivateRoute>} />
        <Route path='/admin-dashboard' element={<AdminPrivateRoute><AdminDashBoard /></AdminPrivateRoute>} />
        <Route path='/user-details' element={<AdminPrivateRoute><UsersList /></AdminPrivateRoute>} />
        <Route path='/bulk-order-list' element={<AdminPrivateRoute><MessageList /></AdminPrivateRoute>} />
        <Route path='/about-us' element={<AboutUs></AboutUs>} />
        <Route path='/order-online' element={<ProductCards></ProductCards>} />
        <Route path='/add-to-cart' element={<PrivateRoute><AddToCart /></PrivateRoute>} />
        <Route path='/order-list' element={<OrderList />} />
        <Route path='/edit/:id_no' element={<EditOrderDetails></EditOrderDetails>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
