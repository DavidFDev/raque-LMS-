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
  const handleSignup = ({ name, email, phone, password }) => {
    axios
      .post("https://raquebookshelf.onrender.com/register", { name, email, phone, password })
      .then((result) => {
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
      })
      .catch((err) => console.log(err));
  };



  






  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("https://raquebookshelf.onrender.com/verify").then((result) => {
      if (result.data.status) {
        setIsLoggedIn(true);
        setEmail(result.data.userInfo.email);
        setName(result.data.userInfo.name);
        setPhone(result.data.userInfo.phone)
        setPassword(result.data.userInfo.password);
      } else {
        setIsLoggedIn(false);
      }
    }).catch((err) => console.log(err))
  }, []);











  const handleMessage = ({ email, name, phone, subject, message }) => {
    axios.defaults.withCredentials = true;
    axios.post("https://raquebookshelf.onrender.com/contact", { email, name, phone, subject, message }).then(result => {
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
    }).catch(err => {
      setErrParagraph(`${err.response?.data?.message || 'An error occurred'} - (${err.response?.statusText || 'Unknown error'})`);
      setActivateErrMsg(true);
      setTimeout(() => {
        setActivateErrMsg(false);
      }, 4000);
    });
  }


  const handleFeedback = ({ email, name, phone, address, message }) => {
    axios.defaults.withCredentials = true;
    axios.post("https://raquebookshelf.onrender.com", { email, name, phone, address, message })
    .then(result => {
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
    }).catch(err => {
      setErrParagraph(`${err.response?.data?.message || 'An error occurred'} - (${err.response?.statusText || 'Unknown error'})`);
      setActivateErrMsg(true);
      setTimeout(() => {
        setActivateErrMsg(false);
      }, 4000);
    });
  };


  const handleFeedbackPage = ({ email, name, phone, address, message }) => {
    axios.defaults.withCredentials = true;
    axios.post("https://raquebookshelf.onrender.com/feedback", { email, name, phone, address, message })
    .then(result => {
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
    }).catch(err => {
      setErrParagraph(`${err.response?.data?.message || 'An error occurred'} - (${err.response?.statusText || 'Unknown error'})`);
      setActivateErrMsg(true);
      setTimeout(() => {
        setActivateErrMsg(false);
      }, 4000);
    });
  };

  
  












  /* Handle Login */
  const handleLogin = ({ name, email, password }) => {
    const userData = {
      name,
      email,
      password,
    };

    axios.defaults.withCredentials = true;

    axios
      .post("https://raquebookshelf.onrender.com/login", userData)
      .then((result) => {
        if (!result.data.status) {
          setLoading(false)
          setActivateErrMsg(true);
          setErrParagraph(result.data.message);
        } else if (result.data.status) {
          /* SAVE INTO THE LOCALSTORAGE */

          setEmail(email);
          setName(result.data.userInfo.userName);
          setPassword(password);
          setBio(result.data.userInfo.bio)
          setIsLoggedIn(true);
          setSuccessPara(result.data.message);
          setSuccessMsg(true);
          setActivateErrMsg(false)
          setLoading(true)
          setTimeout(() => {
            navigate("/profile")
            setSuccessMsg(false);
          }, 3000);

        } else if (result.data === "Token Expired") {
          navigate("/login");
          setIsLoggedIn(false);
          setErrParagraph(result.data);
        } else {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  };







  const handleLogoutButton = ({id}) => {
    axios.defaults.withCredentials = true;

    axios.post(`https://raquebookshelf.onrender.com/${id}`).then(result => {
      if (result.data.status) {
        setIsLoggedIn(false)
      }
    })
  } 



  const handleCheckout = (cartItem) => {
    axios.defaults.withCredentials = true;
    axios.post("https://raquebookshelf.onrender.com/shop", cartItem).then(result => {

      if (result.data.status) {
        setRecentOrders(result.data.items)
      } else {
        console.log(result.data)
      }

    }).catch(err => console.log(err))
  }


  useEffect(() => {
    axios.defaults.withCredentials = true
    axios.get("https://raquebookshelf.onrender.com/orders").then(result => {
      if (!result.data.status) {
        return false
      } else {
        setRecentOrders(result.data.items)
        setOrders(result.data.items)
      }
    }).catch(err => console.log(err))
  }, [])

 




  /* HANDLE UPDATE */
  const handleUpdate = ({ userEmail, newPassword, currentPassword, fullName }) => {
    axios.defaults.withCredentials = true;

    axios
      .post("https://raquebookshelf.onrender.com/profile", { userEmail, newPassword, currentPassword, fullName })
      .then((result) => {
        if (result.data.status) {
          setActivateErrMsg(false)
          setErrParagraph(result.data.message)
          setSuccessMsg(true)
          setSuccessPara(result.data.message)
        } else {
          setActivateErrMsg(true)
          setErrParagraph(result.data.message)
        }
      })
      .catch((err) => console.log(err));
  };









  const handleForgotPassword = ({ email, phone, phoneNumber }) => {
    axios.defaults.withCredentials = true;

    axios
      .post("https://raquebookshelf.onrender.com/forgot-password", { email, phone, phoneNumber })
      .then((result) => {
        if (!result.data.status) {
          setErrParagraph(result.data.message);
          setActivateErrMsg(true);
        } else if (result.status === 500) {
          setErrParagraph(result.data);
          setActivateErrMsg(true);
        } else {
          setSuccessPara(email.length !== 0 ? result.data.emailMessage : phone.length !== 0 && result.data.message);
          setSuccessMsg(true);
          setActivateErrMsg(false)
          console.log(result.data)
          setTimeout(() => {
            navigate("/login")
          }, 4000);
        }
      })
      .catch((err) => {
        console.log(err)
        setErrParagraph(`${err.response.data.message} - (${err.response.statusText})`);
        setActivateErrMsg(true);
      });
  };








  const handleResetPassword = ({ password, token }) => {
    axios.defaults.withCredentials = true;

    axios
      .post("https://raquebookshelf.onrender.com/resetPassword/"+token, { password })
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
