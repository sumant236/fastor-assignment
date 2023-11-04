import React from "react";
import { useNavigate } from "react-router-dom";

// product in the list of products on homepage
const Product = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      key={item?.restaurant_id}
      style={{ display: "flex", gap: "20px", cursor: "pointer" }}
      onClick={() => navigate(`/product/${item?.restaurant_id}`)}
    >
      <img
        src={item?.images[0]?.url}
        height={100}
        width={100}
        style={{ borderRadius: "10px" }}
      />
      <div>
        <h5 style={{ margin: 0 }}>{item?.restaurant_name}</h5>
        <div style={{ fontSize: "12px" }}>
          <p style={{ color: "#9DABB5", margin: 0 }}>
            {item?.cuisines[0]?.cuisine_name}
          </p>
          <p style={{ color: "#9DABB5", margin: 0 }}>
            {item?.location?.location_address}
          </p>
          <p style={{ color: "orange" }}>{item?.active_plan}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <p style={{ margin: 0 }}>{item?.rating?.restaurant_avg_rating}</p>
              <p style={{ color: "#9DABB5", margin: 0 }}>Popularity</p>
            </div>
            <div>
              <p style={{ margin: 0 }}>{item?.avg_cost_for_two}</p>
              <p style={{ color: "#9DABB5", margin: 0 }}>Cost for two</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
