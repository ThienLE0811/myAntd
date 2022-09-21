import { PageContainer, ProList } from "@ant-design/pro-components";
import { Modal, Input } from "antd";
import PostsDetail from "./components/PostsDetails";
//import { EyeOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./components/index.css";
import { dataSource1 } from "../../services/api/api";

const dataSource = dataSource1;
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
        rowKey="key"
        headerTitle="Top News"
        options={false}
        search={false}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
        onItem={(record) => {
          return {
            onClick: () => {
              // console.log(record);
              setCurrentRow(record), setShowPosts(true);
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
        <PostsDetail
          img={currentRow?.img}
          title={currentRow?.title}
          content={currentRow?.content}
        />
      </Modal>
    </PageContainer>
  );
};

export default Dashboard;
