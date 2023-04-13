import { useState } from "react";
import Header from "../../Header/Header";
import SideMenu from "../../SideMenu/SideMenu";
import * as Styles from "./SearchAndGenerateReportStyles";
import { Button, DatePicker, Form, Input } from "antd";

function antDesignForm() {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [submitting, setSubmitting] = useState(false);

  const onFinish = (values: any) => {
    setSubmitting(true);
    console.log(values);
    setSubmitting(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const validateFields = (_: any, value: any) => {
    switch (_.field) {
      case "citation":
        if (!value) {
          return Promise.reject("Citation is required");
        }
        break;
      case "title":
        if (!value) {
          return Promise.reject("Title is required");
        }
        break;
      case "createdDate":
        if (!value) {
          return Promise.reject("CreatedDate is required");
        }
        break;
      case "referenceID":
        if (!value) {
          return Promise.reject("ReferenceID is required");
        }
        break;
      case "recordId":
        if (!value) {
          return Promise.reject("RecordId is required");
        }
        break;
      case "abstract":
        if (!value) {
          return Promise.reject("Abstract is required");
        }
        break;
      default:
        break;
    }
    return Promise.resolve();
  };

  const initialFieldsValues = {
    // citation: "example citation",
  };

  const handleFormValuesChange = (changedValues: any, allValues: any) => {
    console.log("Form values changed:", changedValues, allValues);
  };

  return (
    <Styles.Container>
      <div className="container">
        <Header />
        <div className="page-wrapper">
          <SideMenu />
          <Styles.SubContainer className="subContainer">
            <Form
              className="form"
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={initialFieldsValues}
              onValuesChange={handleFormValuesChange}
            >
              <div className="textAreasFields">
                <Form.Item
                  label="Citation"
                  name="citation"
                  rules={[
                    {
                      validator: validateFields,
                    },
                  ]}
                >
                  <TextArea
                    autoFocus
                    rows={3}
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    allowClear
                  />
                </Form.Item>
                <Form.Item
                  label="Title"
                  name="title"
                  rules={[
                    {
                      validator: validateFields,
                    },
                  ]}
                >
                  <TextArea
                    rows={3}
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    allowClear
                  />
                </Form.Item>
                <Form.Item
                  label="Abstract"
                  name="abstract"
                  rules={[
                    {
                      validator: validateFields,
                    },
                  ]}
                >
                  <TextArea
                    rows={3}
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    allowClear
                  />
                </Form.Item>
              </div>
              <div className="fields">
                <Form.Item
                  label="Created Date"
                  name="createdDate"
                  rules={[
                    {
                      validator: validateFields,
                    },
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                  label="Reference ID"
                  name="referenceID"
                  rules={[
                    {
                      validator: validateFields,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Record ID"
                  name="recordId"
                  rules={[
                    {
                      validator: validateFields,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={submitting}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Styles.SubContainer>
        </div>
      </div>
    </Styles.Container>
  );
}

export default antDesignForm;
