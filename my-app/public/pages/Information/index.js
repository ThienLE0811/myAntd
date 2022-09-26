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
      width: 80,
    },
    {
      title: "Avatar",
      dataIndex: "img",
      key: "image",
      valueType: "image",
      width: 80,
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
      title: "Năm sinh",
      dataIndex: "age",
      width: 100,
    },
    {
      title: "Quốc tịch",
      dataIndex: "nationality",
    },
    {
      title: "Hành động",
      dataIndex: "option",
      fixed: "right",
      width: 80,
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
    <PageContainer title="Thông tin các cầu thủ">
      <ProTable
        columns={columns}
        className="pagecontainer"
        dataSource={dataSource}
        rowKey="key"
        headerTitle="Bảng giá trị"
        search={false}
        scroll={{ x: "max-content", y: "calc(100vh - 315px)" }}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
      />

      <Modal
        width={"70%"}
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
