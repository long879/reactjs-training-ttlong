import "./App.css";

import { Layout } from "antd";
import HeaderPage from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./assets/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./containers/Students";
import Page404 from "./containers/Page404";

import DemoPageCampus from "./containers/DemoPageCampus";

function App() {
  return (
    <Router>
      <Layout>
        <HeaderPage />
        <Layout>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Student />} />
            <Route path="/chart" element={<DemoPageCampus />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
