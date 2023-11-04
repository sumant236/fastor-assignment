import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import { UserContext } from "../Context/UserContext";

// Homepage when user logged in
const Homepage = () => {
  const { data, setData } = useContext(UserContext);
  const navigate = useNavigate();

  // to get the data of restaurants
  useEffect(() => {
    // getting the token from session storage
    const userToken = sessionStorage.getItem("token");
    if (!userToken) {
      navigate("/");
    }
    // passing headers as part of authentication
    const config = {
      headers: { Authorization: `Bearer ${userToken}` },
    };
    axios
      .get("https://staging.fastor.in/v1/m/restaurant?city_id=118&&", config)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div style={{ background: "#e6601a", width: "100%", height: "100%" }}>
        <div
          style={{
            background: "#fff",
            width: "415px",
            height: "100%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              boxShadow: "0px 10px 5px #DADADA",
              height: "60px",
              width: "89%",
              padding: "20px",
            }}
          >
            <p style={{ color: "#9DABB5", margin: "0px" }}>
              Pre Order From <PersonPinIcon />
            </p>
            <p style={{ fontSize: "18px", margin: 0 }}>Connaught Place</p>
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "20px",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "#FAFAFA",
                borderRadius: "15px",
                padding: "10px",
              }}
            >
              <h2 style={{ color: "#9DABB5", margin: "20px 0px 8px" }}>
                Karan
              </h2>
              <h5 style={{ margin: "0px 0px 10px" }}>Let's explore this</h5>
            </div>
            <div>
              <img
                width="70px"
                height="70px"
                src="https://cdn-icons-png.flaticon.com/512/5195/5195369.png"
                alt="discount"
                style={{
                  background: "orange",
                  borderRadius: "15px",
                  boxShadow: "0px 10px 10px #ffca6a",
                }}
              ></img>

              <p
                style={{
                  color: "#9DABB5",
                  textAlign: "center",
                  margin: "5px 0px 0px",
                }}
              >
                Offers
              </p>
            </div>
            <div>
              <img
                width="70px"
                height="70px"
                src="https://images.rawpixel.com/image_400/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L3Y5MzQtbnVubnktMTVfMV8xLmpwZw.jpg"
                alt="wallet"
                style={{
                  borderRadius: "15px",
                  boxShadow: "0px 10px 10px #ccc4c4",
                }}
              ></img>
              <p
                style={{
                  color: "#9DABB5",
                  textAlign: "center",
                  margin: "5px 0px 0px",
                }}
              >
                Wallet
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
            }}
          >
            <h4>Popular Ones</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* List of restaurants */}
              {data && data.map((item) => <Product item={item} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
