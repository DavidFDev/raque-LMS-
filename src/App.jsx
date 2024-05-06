import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Loading from "./Components/Loading";
import AuthProvider from "./Context/AuthContext";
import PageNotFound from "./Pages/404Page";
import Profile from "./Pages/UserProfile/Profile";
import "./Responsive.css";
import Checkout from "./Pages/Checkout";
const Cart = React.lazy(() => import("./Pages/Cart/Cart"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Home = React.lazy(() => import("./Pages/Home"));
const Pricing = React.lazy(() => import("./Pages/Pricing"));
const ProductDetails = React.lazy(() => import("./Pages/ProductDetails"));
const Shop = React.lazy(() => import("./Pages/Shop"));
const Login = React.lazy(() => import("./Pages/User/User-Entry/Login"));
const SignUp = React.lazy(() => import("./Pages/User/User-Entry/SignUp"));
const UserAccount = React.lazy(() =>
  import("./Pages/User/User-Entry/UserAccount")
);
const ForgotPassword = React.lazy(() =>
  import("./Pages/User/User-Entry/ForgotPassword")
);

const ResetPassword = React.lazy(() =>
  import("./Pages/User/User-Entry/ResetPassword")
);

const UserBio = React.lazy(() =>
  import("./Pages/User/User-Entry/UserBio")
);

const App = () => {
  return (

      <Router>
        <Suspense fallback={<Loading />}>
          <AuthProvider>
            <Routes>
              {/* ENTRY PAGES */}

              <Route path="login" element={<Login />} />
              <Route path="register" element={<SignUp />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="resetPassword/:token" element={<ResetPassword />} />

              {/* END OF ENTRY PAGES */}

              <Route path="/" element={<Layout />}>
                {/* <Route path="profile" element={<Profile />} /> */}
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="product/:id" element={<ProductDetails />} />
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
        </Suspense>
      </Router>

  );
};

export default App;
