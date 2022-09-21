import { PageContainer, ProTable } from "@ant-design/pro-components";
import { Modal, Button } from "antd";
import PostsDetail from "./components/PostsDetails";
import React, { useState } from "react";
import "./components/index.css";
import { dataSource2 } from "../../services/api/api";
import { EyeOutlined } from "@ant-design/icons";

const dataSource = dataSource2;

const Information = () => {
  const [currentRow, setCurrentRow] = useState();
  const [showPosts, setShowPosts] = useState(false);

  const columns = [
    {
      title: "Mã số",
      dataIndex: "index",
      valueType: "index",
    },
    {
      title: "Avatar",
      dataIndex: "img",
      key: "image",
      valueType: "image",
    },
    {
      title: "Name",
      dataIndex: "title",
    },
    {
      title: "Giá trị",
      dataIndex: "price",
    },
    {
      title: "Hành động",
      dataIndex: "option",
      width: 120,
      valueType: "option",
      render: (_, entity) => [
        <Button
          onClick={() => {
            setShowPosts(true);
            setCurrentRow(entity);
          }}
        >
          <EyeOutlined />
        </Button>,
      ],
    },
  ];

  return (
    <PageContainer title="Giá trị các cầu thủ">
      <ProTable
        columns={columns}
        dataSource={dataSource}
        rowKey="key"
        headerTitle="Bảng giá trị"
      />

      <Modal
        width={"50%"}
        open={showPosts}
        onCancel={() => {
          setShowPosts(false);
          setCurrentRow(undefined);
        }}
        footer={false}
      >
        <PostsDetail
          img={currentRow?.img}
          title={currentRow?.title}
          price={currentRow?.price}
        />
      </Modal>
    </PageContainer>
  );
};

export default Information;
