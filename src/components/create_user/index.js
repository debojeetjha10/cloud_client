import React, { useState } from "react";
import "./styles.css";
import QRCode from "react-qr-code";
import { axiosInstance } from "../../helpers/custom_axios";

function CreateUser() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [key, setKey] = useState(null);
  const createUser = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("/createuser", {
        id,
        password,
      });
      console.log(res);
      setMsg(res.statusText);
      setKey(res.data.key);
      setLoading(false);
    } catch (err) {
      setMsg(err.message);
    }
  };
  return (
    <div className="create-user">
      <h1>REGISTER</h1>
      {loading && <p>Loading....</p>}
      {msg && <p>{msg}</p>}
      {msg==='Created' && <QRCode value={key} />}
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
      <button onClick={createUser}>SUBMIT</button>
    </div>
  );
}

export default CreateUser;
