import React, { useState } from "react";
import "./styles.css";
import { axiosInstance } from "../../helpers/custom_axios";

function OtpScreen({ token }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const OtpScreen = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.post(
        "/verifyotp",
        {
          otp,
        },
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(res);
      setMsg(res.statusText);
      setLoading(false);
    } catch (err) {
      setMsg(err.message);
    }
  };
  return (
    <div className="otp">
      {loading && <p>Loading....</p>}
      {msg && <p>{msg}</p>}
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={OtpScreen}>SUBMIT</button>
    </div>
  );
}

export default OtpScreen;
