import { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

export const AdddressContext = createContext();

export function AddressProvider({ children }) {
  const [address, setAddress] = useState([
    {
      id: uuid(),
      name: "Shoaib Ansari",
      mobile: "12345677890",
      pincode: "000001",
      address: "New Lake Palace Hiranandani Gardens Powai",
      city: "Mumbai",
      state: "Maharashtra",
    },
  ]);

  <AdddressContext.Provider value={{ address, setAddress }}>
    {children}
  </AdddressContext.Provider>;
}
