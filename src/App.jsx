import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Loading from "./Components/Loading";
import AuthProvider from "./Context/AuthContext";
import TimeMgtProvider from "./Context/TimeMgtContext";
import PageNotFound from "./Pages/404Page";
import Checkout from "./Pages/Checkout";
import ReadingPage from "./Pages/ReadingPage";
import "./Responsive.css";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import ProductDetails from "./Pages/ProductDetails";
import Shop from "./Pages/Shop";
import Login from "./Pages/User/User-Entry/Login";
import SignUp from "./Pages/User/User-Entry/SignUp";
import UserAccount from "./Pages/User/User-Entry/UserAccount";
import ForgotPassword from "./Pages/User/User-Entry/ForgotPassword";
import ResetPassword from "./Pages/User/User-Entry/ResetPassword";
import UserBio from "./Pages/User/User-Entry/UserBio";

const App = () => {
  return (

      <Router>
        <Suspense fallback={<Loading />}>
            <TimeMgtProvider>
              <AuthProvider>
                <Routes>
                  {/* ENTRY PAGES */}

                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<SignUp />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
                  <Route path="resetPassword/:token" element={<ResetPassword />} />

                  <Route path="reading/:id" element={<ReadingPage />} />
                  {/* END OF ENTRY PAGES */}

                  <Route path="/" element={<Layout />}>
                    <Route path="product/:id" element={<ProductDetails />} />
                    {/* <Route path="profile" element={<Profile />} /> */}
                    <Route index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="mybio" element={<UserBio />} />
                    <Route path="profile" element={<UserAccount />} />
                    <Route path="*" element={<PageNotFound />} />
                  </Route>
                </Routes>
              </AuthProvider>
            </TimeMgtProvider>
        </Suspense>
      </Router>

  );
};

export default App;
