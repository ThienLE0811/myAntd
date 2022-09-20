import { PageContainer } from "@ant-design/pro-components";

const PostsDetail = (props) => {
  return (
    <PageContainer pageHeaderRender={false}>
      <img src={props.img} alt="" style={{ textAlign: "center" }} />
      <h3 style={{ padding: "5px 0" }}>{props.title}</h3>

      <div dangerouslySetInnerHTML={{ __html: props?.content || "" }}></div>
    </PageContainer>
  );
};

export default PostsDetail;
