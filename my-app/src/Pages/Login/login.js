import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import api from "../../services/api"
import "./login.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { parametro } = useParams();
  const navigate = useNavigate();
  const [loginResponse, setLoginResponse] = useState([]);


  const teste = () => {
    api
    .post("/login",[{
      "email" : "jose@gmail.com",
      "senha" : "12345"
  }])
    .then((response) => console.log(JSON.stringify(response.data)))
    .catch(error => toast.error("ops! ocorreu um erro" + error));
  
    setLoginResponse("ok")
    // console.log(loginResponse)
    // if (loginResponse = "ok"){
    //   <Link to="/home" />
    // } else {
    //   <Link to="/home" />
    //   toast.error("Nenhum usuário encontrado!")
    // }
  };
  

  
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Bem-Vindo </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={teste()}>Login</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;