import "./index.css";
import MainLayout from "./layout/Mainlayout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./page/Dashbord";
import Home from "./page/Home";

// SideBar
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
