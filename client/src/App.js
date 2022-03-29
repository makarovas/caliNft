import Header from "./components/Header";
import "./app.css";
import axios from "axios";

import { useState, useEffect, useCallback } from "react";
import Collection from "./components/Collection";
import TopCard from "./components/TopCard";

const API_OPENSEA =
  "https://testnets-api.opensea.io/assets?asset_contract_address=0x8c8908ffCFa3cB3b2E21b962c61B2749aaEaa556&order_direction=asc";
function App() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState({});
  console.log(active, "acitve");

  const handleClick = (values) => setActive(values);

  useEffect(() => {
    const getNfts = async () => {
      const openData = await axios.get(API_OPENSEA);
      setData(openData?.data);
    };

    return getNfts();
  }, []);

  // console.log("render", active);

  return (
    <div className="app">
      <Header />
      <TopCard active={active} />
      <Collection data={data.assets} handleClick={handleClick} />
    </div>
  );
}

export default App;
