import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useParams } from "react-router-dom";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

// Selected product details page
const ProductDetailPage = () => {
  const [item, setItem] = useState({});
  const { data } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    // to get the single product from the selected product id
    const product = data.filter((prod) => prod.restaurant_id === id);
    setItem(product);
  }, []);

  return (
    item && (
      <div style={{ background: "#e6601a", width: "100%", height: "100vh" }}>
        <div
          style={{
            background: "#fff",
            width: "415px",
            height: "100vh",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              boxShadow: "0px 10px 5px #DADADA",
              height: "70%",
              width: "100%",
              position: "relative",
            }}
          >
            <img
              src={item[0]?.images[0]?.url}
              width={"100%"}
              height={"100%"}
            ></img>
            <p
              style={{
                position: "absolute",
                background: "transparent",
                top: 160,
                right: 175,
                fontWeight: "900",
                color: "orange",
                fontStyle: "italic",
                fontSize: "27px",
              }}
            >
              FASTOR
            </p>
          </div>
          <div
            style={{
              background: "#fff",
              position: "absolute",
              padding: "20px",
              top: 400,
              width: "375px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              height: "30%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3 style={{ margin: 0 }}>{item[0]?.restaurant_name}</h3>
                <p style={{ color: "#9DABB5", margin: "5px 0px 10px" }}>
                  {item[0]?.location?.location_address}
                </p>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <StarOutlineIcon />
                <p style={{ margin: 0 }}>
                  {item[0]?.rating?.restaurant_avg_rating}
                </p>
              </div>
            </div>
            <p
              style={{
                color: "orange",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <LocalOfferIcon />
              <p>{item[0]?.active_plan}</p>
            </p>
            <p>
              Our delicate vanila cake swirled with chocolate anf filled with
              mocha chocolate chip cream and a layer of dark chocolate ganache
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetailPage;
