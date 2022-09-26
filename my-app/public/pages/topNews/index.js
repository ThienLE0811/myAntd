import { PageContainer, ProCard } from "@ant-design/pro-components";
import "./components/index.css";
import { Spin, Card, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React from "react";

const HomePage = () => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 32,
        color: "white",
        textAlign: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
      spin
    />
  );

  const openNotification = () => {
    notification.open({
      message: "Loading !",
      description: "Dữ liệu đang được tải về, vui lòng chờ trong ít phút.",
    });
  };

  return (
    <PageContainer>
      <ProCard
        style={{ marginBlockStart: 8 }}
        gutter={[16, 16]}
        wrap
        title="Nhật ký thể thao"
      >
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          layout="center"
          bordered
          title="MU đang trở lại, thách thức mọi đội bóng tại Ngoại Hạng Anh"
        >
          <Card
            style={{
              width: "600px",
              height: "300px",

              backgroundImage:
                "linear-gradient(to right, #0a9b84, #00af89, #00c389, #00d785, #12eb7d)",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={openNotification}
          >
            <Spin indicator={antIcon} />
          </Card>
        </ProCard>
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          layout="center"
          bordered
          title="MU đang trở lại, thách thức mọi đội bóng tại Ngoại Hạng Anh"
        >
          <Card
            style={{
              width: "600px",
              height: "300px",

              backgroundImage:
                "linear-gradient(to right, #0a9b84, #00af89, #00c389, #00d785, #12eb7d)",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={openNotification}
          >
            <Spin indicator={antIcon} />
          </Card>
        </ProCard>
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          layout="center"
          bordered
          title="MU đang trở lại, thách thức mọi đội bóng tại Ngoại Hạng Anh"
        >
          <Card
            style={{
              width: "600px",
              height: "300px",

              backgroundImage:
                "linear-gradient(to right, #0a9b84, #00af89, #00c389, #00d785, #12eb7d)",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={openNotification}
          >
            <Spin indicator={antIcon} />
          </Card>
        </ProCard>
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          layout="center"
          bordered
          title="MU đang trở lại, thách thức mọi đội bóng tại Ngoại Hạng Anh"
        >
          <Card
            style={{
              width: "600px",
              height: "300px",

              backgroundImage:
                "linear-gradient(to right, #0a9b84, #00af89, #00c389, #00d785, #12eb7d)",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={openNotification}
          >
            <Spin indicator={antIcon} />
          </Card>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default HomePage;
