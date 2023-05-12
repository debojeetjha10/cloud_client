import React, { useState } from "react";
import "./styles.css";
import { axiosInstance } from "../../helpers/custom_axios";
import OtpScreen from "../otp_screen";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');
  const [msg, setMsg] = useState(null);
  const [isOtpStep, setIsOtpStep] = useState(false);

  const loginUser = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("/login", {
          id,
          password,
      });
      console.log(res);
      setMsg(res.statusText);
      setToken(res.data.token);
      setLoading(false);
      setIsOtpStep(true);
  } catch (err) {
      setMsg(err.message);
  }
  };

  if (isOtpStep) {
    return <OtpScreen token={token} />
  }
  return (
    <div className="login">
      <h1>LOGIN</h1>
      {loading && <p>Loading....</p>}
      {msg && <p>{ msg}</p>}

      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginUser}>SUBMIT</button>
    </div>
  );
}

export default Login;
