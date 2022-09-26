import { PageContainer } from "@ant-design/pro-components";
import { Tag } from "antd";
import moment from "moment";
const PostsDetail = (props) => {
  return (
    <PageContainer pageHeaderRender={false}>
      <h3 style={{ marginBottom: "5px" }}>{props.title}</h3>
      <Tag color="blue" style={{ marginBottom: "10px" }}>
        {moment(props?.date).format("DD/MM/YYYY")}
      </Tag>
      <div dangerouslySetInnerHTML={{ __html: props?.content || "" }}></div>
    </PageContainer>
  );
};

export default PostsDetail;
