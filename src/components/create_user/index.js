import React, { useState } from "react";
import "./styles.css";
import { axiosInstance } from "../../helpers/custom_axios";

function CreateUser() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const createUser = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("/createuser", {
        id,
        password,
      });
      console.log(res);
      setMsg(res.statusText);
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
