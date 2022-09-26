import { PageContainer, ProList } from "@ant-design/pro-components";
import { Modal, Input, Tag } from "antd";
import PostsDetail from "./components/PostsDetails";
import React, { useState } from "react";
import moment from "moment";
import "./components/index.css";
import { team } from "../../services/api/api";

const dataSource = team;
const { Search } = Input;
const Dashboard = () => {
  const [currentRow, setCurrentRow] = useState();
  const [showPosts, setShowPosts] = useState(false);

  return (
    <PageContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: 100,
          margin: "30px auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
          }}
        >
          Tìm kiếm thông tin
        </h2>
        <Search
          style={{
            maxWidth: 400,
            borderRadius: "20px",
          }}
          allowClear
          // onSearch={(e) => {
          //   setKeyword(e);
          //   actionRef.current?.reload();
          // }}
          onChange={(e) => {}}
          placeholder="Tìm kiếm nội dung..."
          size="large"
          enterButton
        />
      </div>
      <ProList
        dataSource={dataSource}
        className="pagecontainer"
        rowKey="key"
        headerTitle="Top News"
        // actionRef={actionRef}
        // formRef={formRef}
        itemLayout="vertical"
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
        onItem={(record) => {
          return {
            onClick: () => {
              setCurrentRow(record);
              setShowPosts(true);
            },
          };
        }}
        grid={{ gutter: 16, column: 3 }}
        metas={{
          title: {
            dataIndex: "title",
            render: (dom, entity) => (
              <div className="title">{entity.title}</div>
            ),
          },

          actions: {
            render: () => [],
          },
          description: {
            render: (dom, entity) => (
              <>
                <Tag color="blue">
                  {moment(entity?.date).format("DD/MM/YYYY")}
                </Tag>
              </>
            ),
          },
          content: {
            render: (dom, entity) => {
              return (
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: entity?.content }}
                ></div>
              );
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
        <PostsDetail title={currentRow?.title} content={currentRow?.content} />
      </Modal>
    </PageContainer>
  );
};

export default Dashboard;
