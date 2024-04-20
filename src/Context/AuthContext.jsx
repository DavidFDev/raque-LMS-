import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [activateErrMsg, setActivateErrMsg] = useState(false);
    const [errParagraph, setErrParagraph] = useState();
    const navigate = useNavigate();

    /* HANDLE SIGNUP */
    const handleSignup = ({name, email, password}) => {
        
        axios.post("http://localhost:3001/register", {name, email, password})
        .then(result => {
            console.log(result)
            
            if (result.data === `a user already exist with ${email}`) {

                setActivateErrMsg(true)
                setErrParagraph(result.data)
                throw new Error("Use a different email")

            } else if (result.data.errorResponse) {

                setErrParagraph(result.data.errorResponse)

            } else if (!result.data.errorResponse) {
                
                navigate("/account")
                setEmail(email)
                setName(name)
                setPassword(password)
                // setPhone(phone)
                setActivateErrMsg(false)
            }

        })
        .catch(err=> console.log(err));

    }


    
    /* Handle Login */
    const handleLogin = ({ name, email, password }) => {
        const userData = {
            name,
            email,
            password
        }

        axios.post('http://localhost:3001/login', userData)
        .then(result =>  {console.log(result)
            if (result.data.message === "Success") {
                /* SAVE INTO THE LOCALSTORAGE */
                localStorage.setItem("token-info", JSON.stringify(result.data.userInfo))

                navigate('/account')
                setEmail(email)
                setName(result.data.userInfo.userName)
                setPassword(password)
                setIsLoggedIn(true);
                setActivateErrMsg(false)

            } else if (result.data.message === "An account doesn't exist with this email") {

                setActivateErrMsg(true)
                setErrParagraph(result.data.message);

            } else if (result.data.message === "the password is incorrect") {

                setActivateErrMsg(true);
                setErrParagraph(result.data.message);
            } 
        })
        .catch(err => console.log(err))

    }

    const handleLogout = () => {
        localStorage.removeItem("token-info");
        setIsLoggedIn(false);
        navigate("/login")
    }
    
    /* HANDLE UPDATE */
    const handleUpdate = ({name, email, password}) => {
        axios.post("http://localhost:3001/account", {name, email, password})
        .then(result => {
            console.log(result)
        }).catch(err => console.log(err))
    }

    /* CONTEXT VALUE */ 
    const value = {isLoggedIn, name, setName, email, setEmail, password, setPassword, activateErrMsg, setActivateErrMsg, errParagraph, setErrParagraph, handleLogin, handleSignup, isLoggedIn: email.length > 0, handleUpdate, handleLogout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
