import { PageContainer } from "@ant-design/pro-components";

const PostsDetail = (props) => {
  return (
    <PageContainer pageHeaderRender={false} style={{ textAlign: "center" }}>
      <img
        src={props.img}
        alt=""
        style={{ textAlign: "center", wdth: "100%" }}
        className="img-posts"
      />
      <h3 style={{ padding: "10px 0" }}>{props.title}</h3>

      <div
        dangerouslySetInnerHTML={{ __html: `Giá trị: ${props?.price}` || "" }}
      ></div>
    </PageContainer>
  );
};

export default PostsDetail;
