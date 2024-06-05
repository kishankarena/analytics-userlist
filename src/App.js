import { useEffect } from "react";
import "./App.css";
import UserComponentWrapper from "./components/componentWrapper/UserComponentWrapper";
import ReactGA from "react-ga4";

ReactGA.initialize("G-KY2K2WN95M");

function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);
  return (
    <div>
      <UserComponentWrapper />
    </div>
  );
}

export default App;
