import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/Mainlayout";
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
