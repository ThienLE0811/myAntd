import { ModalForm } from "@ant-design/pro-form";

const ModalFormPosts = (props) => {
  const { visible, initiateData, onVisibleChange } = props;
  return (
    <ModalForm
      visible={visible}
      initialValues={initiateData}
      onVisibleChange={onVisibleChange}
    ></ModalForm>
  );
};

export default ModalFormPosts;
