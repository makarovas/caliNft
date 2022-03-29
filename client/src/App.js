import Header from "./components/Header";
import "./app.css";
import CollectionCard from "./components/CollectionCard";
import weth from "./assets/weth.png";

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        weth={weth}
        id={0}
        name={"NY"}
        image={
          "https://ipfs.thirdweb.com/ipfs/QmRuAM7yQZewXUWYJqT567ZGC4bojPP39njxRtGFNiPwRT/0.jpg"
        }
        traits={[{ value: "7" }]}
      />
    </div>
  );
}

export default App;
