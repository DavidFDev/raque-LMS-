import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Loading from "./Components/Loading";
import AuthProvider from "./Context/AuthContext";
import TimeMgtProvider from "./Context/TimeMgtContext";
import PageNotFound from "./Pages/404Page";
import "./Responsive.css";
import { PopupNotificationProvider } from "./Context/PopupNotificationContext";
const Checkout = React.lazy(() => import("./Pages/Checkout"));
const ReadingPage = React.lazy(() => import("./Pages/ReadingPage"));
const Cart = React.lazy(() => import("./Pages/Cart/Cart"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Home = React.lazy(() => import("./Pages/Home"));
const Pricing = React.lazy(() => import("./Pages/Pricing"));
const ProductDetails = React.lazy(() => import("./Pages/ProductDetails"));
const Shop = React.lazy(() => import("./Pages/Shop"));
const Login = React.lazy(() => import("./Pages/User/User-Entry/Login"));
const SignUp = React.lazy(() => import("./Pages/User/User-Entry/SignUp"));
const About = React.lazy(() => import("./Pages/Aboutus"))
const UserAccount = React.lazy(() =>
  import("./Pages/User/User-Entry/UserAccount")
);
const ForgotPassword = React.lazy(() =>
  import("./Pages/User/User-Entry/ForgotPassword")
);
const ResetPassword = React.lazy(() =>
  import("./Pages/User/User-Entry/ResetPassword")
);
const UserBio = React.lazy(() => import("./Pages/User/User-Entry/UserBio"));
import NotificationPopup from "./Components/NotificationPopup";
import Feedback from "./Pages/Feedback";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AuthProvider>
          <TimeMgtProvider>
            <PopupNotificationProvider>
              <NotificationPopup />
              <Routes>
                {/* ENTRY PAGES */}

                <Route path="login" element={<Login />} />
                <Route path="register" element={<SignUp />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route
                  path="resetPassword/:token"
                  element={<ResetPassword />}
                />

                <Route path="reading/:id" element={<ReadingPage />} />
                {/* END OF ENTRY PAGES */}

                <Route path="/" element={<Layout />}>
                  <Route path="product/:id" element={<ProductDetails />} />
                  {/* <Route path="profile" element={<Profile />} /> */}
                  <Route index element={<Home />} />
                  <Route path="books" element={<Shop />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="about" element={<About />} />
                  <Route path="feedback" element={<Feedback />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="pricing" element={<Pricing />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="mybio" element={<UserBio />} />
                  <Route path="profile" element={<UserAccount />} />
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </PopupNotificationProvider>
          </TimeMgtProvider>
        </AuthProvider>
      </Suspense>
    </Router>
  );
};

export default App;
