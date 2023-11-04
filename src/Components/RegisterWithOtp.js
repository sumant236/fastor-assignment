import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const RegisterWithOtp = () => {
  // 6 different input boxes for otp
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [input3, setInput3] = useState();
  const [input4, setInput4] = useState();
  const [input5, setInput5] = useState();
  const [input6, setInput6] = useState();
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const { mobile } = useContext(UserContext);
  const navigate = useNavigate();

  const inputStyle = {
    width: "40px",
    height: "60px",
    border: "2px solid #DADADA",
    background: "#E8ECF4",
    borderRadius: "8px",
    textAlign: "center",
  };

  // to focus on next input when user enters digit
  const handleOtp = (e, currentIndex) => {
    if (e.code.slice(0, 5) === "Digit") {
      if (e.code)
        if (currentIndex < inputRefs.length - 1) {
          inputRefs[currentIndex + 1].current.focus();
        }
    } else if (e.code.slice(0, 3) === "Key") {
      alert("Please enter number only");
      return;
    }
  };

  // to submit otp, mobile & dial_code
  const handleSubmit = () => {
    const otp = `${input1}${input2}${input3}${input4}${input5}${input6}`;

    // if any input box is empty
    if (
      inputRefs[0].current.value.length === 0 ||
      inputRefs[1].current.value.length === 0 ||
      inputRefs[2].current.value.length === 0 ||
      inputRefs[3].current.value.length === 0 ||
      inputRefs[4].current.value.length === 0 ||
      inputRefs[5].current.value.length === 0
    ) {
      alert("Please enter otp");
      return;
    }

    // if otp is incorrect
    if (
      inputRefs[0].current.value != 1 ||
      inputRefs[1].current.value != 2 ||
      inputRefs[2].current.value != 3 ||
      inputRefs[3].current.value != 4 ||
      inputRefs[4].current.value != 5 ||
      inputRefs[5].current.value != 6
    ) {
      alert("Incorrect otp");
      return;
    }

    const dialCode = "+91";
    const data = new URLSearchParams();
    data.append("phone", Number(mobile));
    data.append("otp", Number(otp));
    data.append("dial_code", dialCode);
    const config = {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    };
    axios
      .post("https://staging.fastor.in/v1/pwa/user/login", data, {
        config,
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data.data.token);
        navigate("/homepage");
      })
      .catch((err) => alert("Incorrect Mobile Number"));
  };

  return (
    <div>
      <div style={{ background: "#e6601a", width: "100%", height: "100vh" }}>
        <div
          style={{
            background: "#fff",
            width: "375px",
            height: "100vh",
            margin: "auto",
            padding: "0px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontSize: "26px", marginBottom: "0" }}>
            OTP Verification
          </h2>
          <p
            style={{
              color: "#8391A1",
              fontFamily: "Urbanist, sans-serif",
              marginBottom: "30px",
            }}
          >
            Enter the verification code we just sent on your Mobile Number.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <input
              ref={inputRefs[0]}
              onKeyUp={(e) => handleOtp(e, 0)}
              style={inputStyle}
              autoFocus
              onChange={(e) => setInput1(e.target.value)}
            ></input>
            <input
              ref={inputRefs[1]}
              onKeyUp={(e) => handleOtp(e, 1)}
              style={inputStyle}
              onChange={(e) => setInput2(e.target.value)}
            ></input>
            <input
              ref={inputRefs[2]}
              onKeyUp={(e) => handleOtp(e, 2)}
              style={inputStyle}
              onChange={(e) => setInput3(e.target.value)}
            ></input>
            <input
              ref={inputRefs[3]}
              onKeyUp={(e) => handleOtp(e, 3)}
              style={inputStyle}
              onChange={(e) => setInput4(e.target.value)}
            ></input>
            <input
              ref={inputRefs[4]}
              onKeyUp={(e) => handleOtp(e, 4)}
              style={inputStyle}
              onChange={(e) => setInput5(e.target.value)}
            ></input>
            <input
              ref={inputRefs[5]}
              onKeyUp={(e) => handleOtp(e, 5)}
              style={inputStyle}
              onChange={(e) => setInput6(e.target.value)}
            ></input>
          </div>
          <button
            style={{
              border: "none",
              background: "#FF6D6A",
              width: "100%",
              padding: "auto",
              height: "56px",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Verify
          </button>
          <p>
            Didn't received code? <a href="https://sumant-fastor-assignment.netlify.app/">Resend</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterWithOtp;
