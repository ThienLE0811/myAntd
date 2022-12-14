import { PageContainer, ProList } from "@ant-design/pro-components";
import { Button, Modal, Tag } from "antd";
import PostsDetail from "./components/PostsDetails";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./components/index.css";
import { dataSource1 } from "../../services/api/api";

const dataSource = dataSource1;

const Home1 = () => {
  const [currentRow, setCurrentRow] = useState();
  const [showPosts, setShowPosts] = useState(false);

  return (
    <PageContainer title="Một số bài viết hay về các cầu thủ">
      <ProList
        className="pagecontainer"
        toolBarRender={() => {
          return [
            <Button key="3" type="primary">
              <PlusOutlined />
              Tạo mới
            </Button>,
          ];
        }}
        onItem={(record) => {
          return {
            onClick: () => {
              console.log(record);
              setCurrentRow(record);
              setShowPosts(true);
            },
          };
        }}
        itemLayout="vertical"
        rowKey="id"
        headerTitle="Bài viết"
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
        dataSource={dataSource}
        metas={{
          title: {},
          className: "content-render",

          actions: {
            render: () => {},
          },
          extra: {
            render: (dom, entity) => (
              <img
                width={272}
                className="content-render"
                alt="logo"
                src={entity?.img}
              />
            ),
          },
          description: {
            render: (dom, entity) => (
              <>
                <Tag color="blue">{entity?.author}</Tag>
              </>
            ),
          },
          content: {
            render: (_, entity) => {
              return <div className="content-render">{entity.content}</div>;
            },
          },
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
          author={currentRow?.author}
          content={currentRow?.content}
        />
      </Modal>
    </PageContainer>
  );
};

export default Home1;
