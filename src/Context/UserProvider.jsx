import React, { useState } from "react";
import { UserContext } from "./UserContext";

// Create a UserProvider component
const UserProvider = ({ children }) => {
  // useState to store mobile number and data
  const [mobile, setMobile] = useState("");
  const [data, setData] = useState([]);

  return (
    <UserContext.Provider value={{ mobile, setMobile, data, setData }}>
      {children}
    </UserContext.Provider>
  );
};

// Export UserProvider component
export default UserProvider;
