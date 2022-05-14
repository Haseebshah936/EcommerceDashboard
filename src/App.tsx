import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import { CustomContextProvider } from "./Hooks/useCustomContext";
import { useState } from "react";
import Notification from "./pages/Notification";

export default function App() {
  const [login, setLogin] = useState(false);
  return (
    <CustomContextProvider value={{ login, setLogin }}>
      <Router>
        <Routes>
          {!login ? (
            <Route path="/" element={<Signin />} />
          ) : (
            <Route path="/" element={<Dashboard />} />
          )}
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </Router>
    </CustomContextProvider>
  );
}
