import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  ContactsOutlined,
  ContainerOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

import React from "react";
import Home1 from "./Home/index";
import Information from "./Information";
import Dashboard from "./Dashboard/index";

const Home = () => (
  <Router>
    <div>
      <nav className="nav-header">
        <ul className="nav-header-ul">
          <li>
            <Link to="/" className="logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DYpvld1FBoY2pCtwm-RjosSDoFIKojOUyw&usqp=CAU"
                alt=""
                className="logo-img"
              />
            </Link>
          </li>
          <li className="nav-header-ul-li">
            <Link to="/" className="nav-header-ul-li-link">
              <ContactsOutlined /> Trang chủ
            </Link>
          </li>
          <li className="nav-header-ul-li">
            <Link to="/home" className="nav-header-ul-li-link">
              <ContainerOutlined /> Bài viết
            </Link>
          </li>
          <li className="nav-header-ul-li">
            <Link to="/information" className="nav-header-ul-li-link">
              <DatabaseOutlined /> Thông tin chi tiết
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/information" element={<Information />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home1 />} />
      </Routes>
    </div>
  </Router>
);

export default Home;
