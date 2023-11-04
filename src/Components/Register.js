import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

// To register the user with otp
function Register() {
  const { mobile, setMobile } = useContext(UserContext);
  const navigate = useNavigate();

  // to submit the otp and get registered
  const handleSubmit = () => {
    // if mobile input box is empty
    if (mobile.length === 0) {
      alert("Please Enter Your Mobile Number");
      return;
    }

    const dialCode = "+91";
    // to append the data in x-www-form-urlencoded
    const data = new URLSearchParams();
    data.append("phone", mobile);
    data.append("dial_code", dialCode);

    const config = {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    };
    // to POST the mobile
    axios
      .post("https://staging.fastor.in/v1/pwa/user/register", data, {
        config,
      })
      .then((res) => {
        alert("OTP is 123456");
        navigate("/register");
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
            Enter Your Mobile Number
          </h2>
          <p
            style={{
              color: "#8391A1",
              fontFamily: "Urbanist, sans-serif",
              marginBottom: "30px",
            }}
          >
            We will send you the 4 digit verification code
          </p>
          <input
            placeholder="Enter your Mobile no."
            style={{
              width: "335px",
              maxHeight: "56px",
              borderRadius: "8px",
              border: "1px",
              background: "#DADADA",
              padding: "20px",
              fontSize: "16px",
              marginBottom: "20px",
            }}
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            type="tel"
          ></input>
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
            Send Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
