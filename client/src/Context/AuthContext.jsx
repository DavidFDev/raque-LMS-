import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("")
  const [recentOrders, setRecentOrders] = useState([])
  const [orders, setOrders] = useState([])
  const [activateErrMsg, setActivateErrMsg] = useState(false);
  const [errParagraph, setErrParagraph] = useState();
  const [successMsg, setSuccessMsg] = useState(false);
  const [successPara, setSuccessPara] = useState("")
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    // Simulate a data fetching process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);






  /* HANDLE SIGNUP */
  const handleSignup = async ({ name, email, phone, password }) => {
    setLoading(true);
    try {
      const result = await axios.post("https://yctlibserver.onrender.com/register", { name, email, phone, password });
      console.log(result);
  
      if (!result.data.status) {
        setActivateErrMsg(true);
        setErrParagraph(result.data.message);
      } else {
        navigate("/profile");
        setEmail(email);
        setName(name);
        setPassword(password);
        setPhone(phone);
        setIsLoggedIn(true);
        setActivateErrMsg(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  
  



  






  useEffect(() => {
    axios.defaults.withCredentials = true;
    async function verifyUser() {
      try {
        const result = await axios.get("https://yctlibserver.onrender.com/verify");
        if (result.data.status) {
          setIsLoggedIn(true);
          setEmail(result.data.userInfo.email);
          setName(result.data.userInfo.name);
          setPhone(result.data.userInfo.phone);
          setPassword(result.data.userInfo.password);
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        console.log(err);
      }
    }

    verifyUser();
  }, []);











  const handleMessage = async ({ email, name, phone, subject, message }) => {
    setLoading(true)
    axios.defaults.withCredentials = true;
    try {
      const result = await axios.post("https://yctlibserver.onrender.com/contact", { email, name, phone, subject, message });
      if (result.data.status) {
        setSuccessMsg(true);
        setSuccessPara(result.data.message);
        setTimeout(() => {
          setSuccessMsg(false);
        }, 4000);
      } else {
        setActivateErrMsg(true);
        setErrParagraph(result.data.message);
        setTimeout(() => {
          setActivateErrMsg(false);
        }, 4000);
      }
    } catch (err) {
      setErrParagraph(`${err.response?.data?.message || 'An error occurred'} - (${err.response?.statusText || 'Unknown error'})`);
      setActivateErrMsg(true);
      setTimeout(() => {
        setActivateErrMsg(false);
      }, 4000);
    } finally {
      setLoading(false)
    }
  };



  const handleFeedback = async ({ email, name, phone, address, message }) => {
    try {
      setLoading(true);
      axios.defaults.withCredentials = true;
      const result = await axios.post("https://yctlibserver.onrender.com", { email, name, phone, address, message });
  
      if (result.data.status) {
        setSuccessMsg(true);
        setSuccessPara(result.data.message);
        setTimeout(() => {
          setSuccessMsg(false);
        }, 4000);
      } else {
        setActivateErrMsg(true);
        setErrParagraph(result.data.message);
        setTimeout(() => {
          setActivateErrMsg(false);
        }, 4000);
      }
    } catch (err) {
      setErrParagraph(`${err.response?.data?.message || 'An error occurred'} - (${err.response?.statusText || 'Unknown error'})`);
      setActivateErrMsg(true);
      setTimeout(() => {
        setActivateErrMsg(false);
      }, 4000);
    } finally {
      setLoading(false);
    }
  };
  


  const handleFeedbackPage = async ({ email, name, phone, address, message }) => {
    try {
      setLoading(true);
      axios.defaults.withCredentials = true;
      const result = await axios.post("https://yctlibserver.onrender.com/feedback", { email, name, phone, address, message });
  
      if (result.data.status) {
        setSuccessMsg(true);
        setSuccessPara(result.data.message);
        setTimeout(() => {
          setSuccessMsg(false);
        }, 4000);
      } else {
        setActivateErrMsg(true);
        setErrParagraph(result.data.message);
        setTimeout(() => {
          setActivateErrMsg(false);
        }, 4000);
      }
    } catch (err) {
      setErrParagraph(`${err.response?.data?.message || 'An error occurred'} - (${err.response?.statusText || 'Unknown error'})`);
      setActivateErrMsg(true);
      setTimeout(() => {
        setActivateErrMsg(false);
      }, 4000);
    } finally {
      setLoading(false);
    }
  };
  

  
  












  /* Handle Login */
  const handleLogin = async ({ name, email, password }) => {
    setLoading(true); 
  
    const userData = {
      name,
      email,
      password,
    };
  
    axios.defaults.withCredentials = true;
  
    try {
      const result = await axios.post("https://yctlibserver.onrender.com/login", userData);
  
      if (!result.data.status) {
        setLoading(false);
        setActivateErrMsg(true);
        setErrParagraph(result.data.message);
      } else {
  
        setEmail(email);
        setName(result.data.userInfo.userName);
        setPassword(password);
        setBio(result.data.userInfo.bio)
        setIsLoggedIn(true);
        setSuccessPara(result.data.message);
        setSuccessMsg(true);
        setActivateErrMsg(false);
        setRecentOrders(result.data.cartItems)
        setOrders(result.data.cartItems)

        setTimeout(() => {
          navigate("/profile")
          setSuccessMsg(false);
        }, 2000);

  
      } 
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); 
    }
  };
  







  const handleLogoutButton = async ({ id }) => {
    try {
      setLoading(true); 
      axios.defaults.withCredentials = true;
  
      const result = await axios.post(`https://yctlibserver.onrender.com/${id}`);
      
      if (result.data.status) {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading state to false after request completes (success or failure)
    }
  }
  



  const handleCheckout = async (cartItem) => {
    setLoading(true);
    try {
      axios.defaults.withCredentials = true;
      const result = await axios.post("https://yctlibserver.onrender.com/books", cartItem);
      
      if (result.data.status) {
        setRecentOrders(result.data.items);
      } else {
        console.log(result.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  


  useEffect(() => {
    axios.defaults.withCredentials = true
    axios.get("https://yctlibserver.onrender.com/orders").then(result => {
      if (!result.data.status) {
        return false
      } else {
        setRecentOrders(result.data.items)
        setOrders(result.data.items)
      }
    }).catch(err => console.log(err))
  }, [])

 




  /* HANDLE UPDATE */
  const handleUpdate = async ({ userEmail, newPassword, currentPassword, fullName }) => {
    axios.defaults.withCredentials = true;
    setLoading(true);

    try {
      const result = await axios.post("https://yctlibserver.onrender.com/profile", { userEmail, newPassword, currentPassword, fullName });

      if (result.data.status) {
        setActivateErrMsg(false);
        setErrParagraph(result.data.message);
        setSuccessMsg(true);
        setSuccessPara(result.data.message);
      } else {
        setActivateErrMsg(true);
        setErrParagraph(result.data.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };










  
  const handleForgotPassword = async ({ email, phone, phoneNumber }) => {
    axios.defaults.withCredentials = true;

    setLoading(true);
    try {
      const result = await axios.post("https://yctlibserver.onrender.com/forgot-password", { email, phone, phoneNumber });

      if (!result.data.status) {
        setErrParagraph(result.data.message);
        setActivateErrMsg(true);
      } else if (result.status === 500) {
        setErrParagraph(result.data);
        setActivateErrMsg(true);
      } else {
        setSuccessPara(email.length !== 0 ? result.data.emailMessage : phone.length !== 0 && result.data.message);
        setSuccessMsg(true);
        setActivateErrMsg(false);

        setTimeout(() => {
          navigate("/login");
        }, 4000);
      }
    } catch (err) {
      console.log(err);
      setErrParagraph(`${err.response.data.message} - (${err.response.statusText})`);
      setActivateErrMsg(true);
    } finally {
      setLoading(false);
    }
  };









  const handleResetPassword = ({ password, token }) => {
    axios.defaults.withCredentials = true;

    axios
      .post("https://yctlibserver.onrender.com/resetPassword/"+token, { password })
      .then((response) => {
        if (response.data.status) {
            setSuccessPara(response.data.message);
            setSuccessMsg(true);
            setActivateErrMsg(false)
  
            setTimeout(() => {
              navigate("/login")
            }, 4000);
        } else if (response.data === "Token expired") {
          setErrParagraph(response.data);
          setActivateErrMsg(true);
        }
      });
  };






  const handleLogout = () => {
    navigate("/login")
  }

  /* CONTEXT VALUE */
  const value = {
    isLoggedIn,
    successMsg,
    successPara,
    name,
    email,
    bio,
    phone,
    password,
    activateErrMsg,
    errParagraph,
    recentOrders,
    loading,
    orders,
    handleFeedback,
    handleFeedbackPage,
    handleResetPassword,
    handleForgotPassword,
    handleLogin,
    handleLogout,
    handleLogoutButton,
    handleSignup,
    handleCheckout,
    handleUpdate,
    handleMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
