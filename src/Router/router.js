import React, { Component, useEffect } from 'react';
import config from '../config/config';
import Dashboard from '../component.js/Dashbord';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyOrder from '../component.js/orders/myOrder';
import MyProducts from '../component.js/myproduct/myproduct';
import Wallet from '../component.js/wallet';
import Reviews from '../component.js/reviews';
import Coupons from '../component.js/coupons';
import CouponsCard from '../component.js/coupon-card';
import Insight from '../component.js/insight';
import SendBank from '../component.js/sendBank';
import AddProducts from '../component.js/AddProducts';
import EditProduct from '../component.js/editProduct';
import StoreProfile from '../component.js/storeProfile';
import Setting from '../component.js/setting';
import Terms from '../component.js/term';
import Support from '../component.js/support';
import Login from '../pages/Login/Login';
import RegisterPage from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import { ROUTES } from '../routes/RouterConfig';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const RouterComponet = () => {
    return (
        <div className="App">

            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path={ROUTES.Home} element={<Home />} />
                        <Route path={ROUTES.Login} element={<Login />} />
                        <Route path={ROUTES.Register} element={<RegisterPage />} />
                        <Route path={`${config.baseUrl}`} element={<MyOrder />} />
                        <Route path={`${config.baseUrl}my-orders`} element={<MyOrder />} />
                        <Route path={`${config.baseUrl}my-products`} element={<MyProducts />} />
                        <Route path={`${config.baseUrl}wallet`} element={<Wallet />} />
                        <Route path={`${config.baseUrl}review`} element={<Reviews />} />
                        <Route path={`${config.baseUrl}coupons`} element={<Coupons />} />
                        <Route path={`${config.baseUrl}coupons-card`} element={<CouponsCard />} />
                        <Route path={`${config.baseUrl}insight`} element={<Insight />} />
                        <Route path={`${config.baseUrl}send-bank`} element={<SendBank />} />
                        <Route path={`${config.baseUrl}add-product`} element={<AddProducts />} />
                        <Route path={`${config.baseUrl}store-profile`} element={<StoreProfile />} />
                        <Route path={`${config.baseUrl}setting`} element={<Setting />} />
                        <Route path={`${config.baseUrl}terms-condition`} element={<Terms />} />
                        <Route path={`${config.baseUrl}support`} element={<Support />} />
                        <Route path={`${config.baseUrl}edit-product`} element={<EditProduct />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}
export default RouterComponet