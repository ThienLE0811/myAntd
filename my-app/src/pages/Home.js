import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  ContactsOutlined,
  ContainerOutlined,
  DatabaseOutlined,
  MenuOutlined,
  UserOutlined,
  SolutionOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import React, { useState } from "react";
import Home1 from "./Home/index";
import Information from "./Information";
import Dashboard from "./Dashboard/index";
import { Drawer, List, Avatar, message } from "antd";
import HomePage from "./topNews";

const Home = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const error = () => {
    message.error("Bạn không có quyền truy cập");
  };

  const data = [
    {
      title: "Trang chủ",
      path: "/",
      avatar: <HomeOutlined />,
    },
    {
      title: "Tin tức",
      path: "/dashboard",
      avatar: <ContactsOutlined />,
    },
    {
      title: "Bài viết",
      path: "/home",
      avatar: <ContainerOutlined />,
    },
    {
      title: "Thông tin cầu thủ",
      path: "/information",
      avatar: <UserOutlined />,
    },
    {
      title: "Huấn luyện viên",
      path: "/coach",
      avatar: <SolutionOutlined />,
    },
    {
      title: "Câu lạc bộ",
      path: "/team",
      avatar: <DatabaseOutlined />,
    },
  ];
  return (
    <Router>
      <div className="container">
        <nav className="nav-header">
          <ul className="nav-header-ul">
            <li>
              <Link to="/" className="logo">
                <img
                  // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DYpvld1FBoY2pCtwm-RjosSDoFIKojOUyw&usqp=CAU"
                  // src="https://thietke6d.com/wp-content/uploads/2020/12/lg_bongda-01.png"
                  src="https://vn-live-01.slatic.net/p/513177abc57c4703de97a5ff1abc64ab.png"
                  alt=""
                  className="logo-img"
                />
              </Link>
            </li>
            <li className="nav-header-ul-li">
              <Link to="/" className="nav-header-ul-li-link">
                <HomeOutlined /> Trang chủ
              </Link>
            </li>
            <li className="nav-header-ul-li">
              <Link to="/dashboard" className="nav-header-ul-li-link">
                <ContactsOutlined /> Tin tức
              </Link>
            </li>
            <li className="nav-header-ul-li">
              <Link to="/home" className="nav-header-ul-li-link">
                <ContainerOutlined /> Bài viết
              </Link>
            </li>

            <li className="nav-header-ul-li">
              <Link to="/information" className="nav-header-ul-li-link">
                <UserOutlined /> Thông tin cầu thủ
              </Link>
            </li>
            <li className="nav-header-ul-li">
              <Link to="/coach" className="nav-header-ul-li-link">
                <SolutionOutlined /> Huấn luyện viên
              </Link>
            </li>
            <li className="nav-header-ul-li">
              <Link to="/team" className="nav-header-ul-li-link">
                <DatabaseOutlined /> Câu lạc bộ
              </Link>
            </li>
          </ul>
          <span
            className="nav-span"
            onClick={() => {
              setShowDrawer(true);
            }}
          >
            <MenuOutlined />
          </span>
          <span className="nav-span-avatar" onClick={error}>
            <Avatar icon={<UserOutlined />} />
          </span>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/information" element={<Information />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home1 />} />
        </Routes>

        <Drawer
          title={"Menu"}
          width={"40%"}
          placement={"left"}
          open={showDrawer}
          onClose={() => {
            setShowDrawer(false);
          }}
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={item.avatar}
                  title={
                    <Link to={`${item.path}`} style={{ fontSize: "12px" }}>
                      {item.title}
                    </Link>
                  }
                />
              </List.Item>
            )}
          />
        </Drawer>
      </div>
    </Router>
  );
};

export default Home;
