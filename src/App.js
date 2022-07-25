import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes";
import Layout from "./layouts";
import "./App.css";
import { createContext, useState } from "react";
import Popup from "./layouts/Popup";

export const ResultContext = createContext();
function App() {
  const [resultDetail, setResultDetail] = useState("");
  const [getEmail, setEmail] = useState("");
  const [pop, setPop] = useState(false);
  return (
    <Router>
      <div className="container">
        <div
          className="full-screen"
          id="full"
          onClick={(e) => {
            e.target.classList.remove("active");
            document.getElementById("div").classList.remove("active");
          }}
        ></div>
        <ResultContext.Provider
          value={{
            pop,
            setPop,
            resultDetail,
            setResultDetail,
            getEmail,
            setEmail,
          }}
        >
          <div className="content">
            {pop && <Popup />}
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </ResultContext.Provider>
      </div>
    </Router>
  );
}

export default App;
