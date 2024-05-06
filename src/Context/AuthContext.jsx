import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("")
  const [activateErrMsg, setActivateErrMsg] = useState(false);
  const [errParagraph, setErrParagraph] = useState();
  const [successMsg, setSuccessMsg] = useState(false);
  const [successPara, setSuccessPara] = useState("")
  const navigate = useNavigate();





  /* HANDLE SIGNUP */
  const handleSignup = ({ name, email, phone, password }) => {
    axios
      .post("http://localhost:3001/register", { name, email, phone, password })
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
    axios.get("http://localhost:3001/verify").then((result) => {
      if (result.data.status) {
        setIsLoggedIn(true);
        setEmail(result.data.userInfo.email);
        setName(result.data.userInfo.name);
        setPhone(result.data.userInfo.phone)
        setPassword(result.data.userInfo.password);
      } else {
        setIsLoggedIn(false);
        console.log(result)
      }
    }).catch((err) => console.log(err))
  }, []);






  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/verifyNewUser").then((result) => {
      if (result.data.status) {
        setIsLoggedIn(true);
        setEmail(result.data.userInfo.email);
        setName(result.data.userInfo.name);
        setPhone(result.data.userInfo.phone)
        setPassword(result.data.userInfo.password);
      }
    }).catch((err) => console.log(err))
  }, []);









  const handleMessage = ({ email, name, phone, subject, message }) => {
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:3001/contact", { email, name, phone, subject, message }).then(result => {

      if (result.data.status) {
        setSuccessMsg(true)
        setSuccessPara(result.data.message)
      } else {
        console.log(result)
      }
    })
  }












  /* Handle Login */
  const handleLogin = ({ name, email, password }) => {
    const userData = {
      name,
      email,
      password,
    };

    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:3001/login", userData)
      .then((result) => {
        if (!result.data.status) {
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

    axios.post(`http://localhost:3001/${id}`).then(result => {
      if (result.data.status) {
        setIsLoggedIn(false)
      }
    })
  } 









  /* HANDLE UPDATE */
  const handleUpdate = ({ userEmail, newPassword, currentPassword, fullName, userBio }) => {
    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:3001/profile", { userEmail, newPassword, currentPassword, fullName, userBio })
      .then((result) => {
        if (result.data.status) {
          setActivateErrMsg(false)
          setErrParagraph(result.data.message)
        } else {
          setTimeout(() => {
            setActivateErrMsg(true)
            setErrParagraph(result.data.message)

          }, 1000);
        }
      })
      .catch((err) => console.log(err));
  };









  const handleForgotPassword = ({ email }) => {
    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:3001/forgot-password", { email })
      .then((result) => {
        if (!result.data.status) {
          setErrParagraph(result.data.message);
          setActivateErrMsg(true);
        } else {
          setSuccessPara("Please check your email for the link");
          setSuccessMsg(true);
          setActivateErrMsg(false)

          setTimeout(() => {
            navigate("/login")
          }, 4000);
        }
      })
      .catch((err) => console.log(err));
  };








  const handleResetPassword = ({ password, token }) => {
    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:3001/resetPassword/"+token, { password })
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
    handleResetPassword,
    handleForgotPassword,
    handleLogin,
    handleLogout,
    handleLogoutButton,
    handleSignup,
    handleUpdate,
    handleMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
