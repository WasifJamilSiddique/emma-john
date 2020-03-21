import React, { createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory'
import Error from './components/Not Found/404';
import ProductDetail from './components/Product Detail/ProductDetail';
import Login from './components/Login/Login';
import { AuthContextProvider, PrivateRoute  } from './components/Login/user-auth';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div className="App">
        <AuthContextProvider>
            <Header></Header>
            <Router>
                <Switch>
                    <Route path="/shop">
                        <Shop></Shop>
                    </Route>
                    <Route path="/review">
                        <Review></Review>
                    </Route>
                    <Route path="/manage">
                        <Inventory></Inventory>
                    </Route> 
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                    <Route exact path="/">
                        <Shop></Shop>
                    </Route>
                    <Route path="/product/:productKey">
                        <ProductDetail></ProductDetail>
                    </Route>
                    <PrivateRoute path="/shipment">
                        <Shipment></Shipment>
                    </PrivateRoute>
                    <Route path="*">
                        <Error></Error>
                    </Route>
                </Switch>
            </Router>
          </AuthContextProvider>

    </div>
  );
}

export default App;
