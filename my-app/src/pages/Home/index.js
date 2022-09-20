import { PageContainer, ProList } from "@ant-design/pro-components";
import { Button, Modal } from "antd";
import PostsDetail from "./components/PostsDetails";
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
        toolBarRender={() => {
          return [
            <Button key="3" type="primary">
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
          description: {
            render: () => <></>,
          },
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
          content={currentRow?.content}
        />
      </Modal>
    </PageContainer>
  );
};

export default Home1;
