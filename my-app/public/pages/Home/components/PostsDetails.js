import { PageContainer } from "@ant-design/pro-components";
import { Tag } from "antd";

const PostsDetail = (props) => {
  return (
    <PageContainer pageHeaderRender={false} style={{ textAlign: "center" }}>
      <img
        src={props.img}
        alt=""
        style={{ textAlign: "center" }}
        className="img-posts"
      />
      <h3 style={{ paddingTop: "5px" }}>{props.title}</h3>
      <Tag color="blue">{props?.author}</Tag>
      <div dangerouslySetInnerHTML={{ __html: props?.content || "" }}></div>
    </PageContainer>
  );
};

export default PostsDetail;
