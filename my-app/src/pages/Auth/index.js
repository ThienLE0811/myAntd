import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons";
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { message, Space, Tabs } from "antd";
import { useState } from "react";
const iconStyles = {
  marginInlineStart: "16px",
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "24px",
  verticalAlign: "middle",
  cursor: "pointer",
};
const FormLogin = () => {
  const [loginType, setLoginType] = useState("login");
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingBottom: "155px",
        paddingTop: "40px",
        boxSizing: "border-box",
      }}
    >
      <LoginForm
        logo="https://vn-live-01.slatic.net/p/513177abc57c4703de97a5ff1abc64ab.png"
        title="Trang đăng nhập"
        subTitle="Vui lòng đăng nhập tài khoản"
        style={{ boxSizing: "border-box" }}
        actions={
          <Space>
            Đăng nhập với
            <AlipayCircleOutlined style={iconStyles} />
            <TaobaoCircleOutlined style={iconStyles} />
            <WeiboCircleOutlined style={iconStyles} />
          </Space>
        }
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey)}
        >
          <Tabs.TabPane key={"login"} tab={"Đăng nhập"} />
          <Tabs.TabPane key={"signup"} tab={"Đăng ký"} />
        </Tabs>
        {loginType === "login" && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: "large",
                prefix: <UserOutlined className={"prefixIcon"} />,
              }}
              placeholder={"Tài khoản: "}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài khoản",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className={"prefixIcon"} />,
              }}
              placeholder={"Mật khẩu: "}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu",
                },
              ]}
            />
            <div
              style={{
                marginBlockEnd: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                Ghi nhớ
              </ProFormCheckbox>
              <a
                href="#"
                style={{
                  float: "right",
                }}
              >
                Quên mật khẩu
              </a>
            </div>
          </>
        )}
        {loginType === "signup" && (
          <>
            <ProFormText
              fieldProps={{
                size: "large",
                prefix: <UserOutlined className={"prefixIcon"} />,
              }}
              name="mobile"
              placeholder={"Nhập email:"}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài khoản",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className={"prefixIcon"} />,
              }}
              placeholder={"Nhập mật khẩu: "}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu",
                },
              ]}
            />
          </>
        )}
      </LoginForm>
    </div>
  );
};

export default FormLogin;
