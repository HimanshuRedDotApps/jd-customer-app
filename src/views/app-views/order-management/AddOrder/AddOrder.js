import { FileOutlined, FilterOutlined, InboxOutlined, SettingOutlined } from '@ant-design/icons'
import { Card, Form, Input, Upload } from 'antd'
import UploadImage from 'assets/uploadDocument.svg'
import React from 'react'

function AddOrder() {
    const [form] = Form.useForm()
    return (
        <div>

            <h4> <SettingOutlined /><span
                style={{
                    color: "#6a6a6a",
                    fontWeight: "300",
                }}
            >
                {" "}
                Order Management
            </span>{" "}
                / Create New Order{" "}</h4>


            <Card>
                <Form
                    form={form}
                    layout='vertical'
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >
                    <Form.Item style={{
                        width: "45%"
                    }} label="Company Name">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Job Site Name">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Postal Code">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Block Number">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Street Number">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Level Number">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Unit Number">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Country">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Maintenance Service Type">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Machine">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Make">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Model">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Sensor">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Sensor Location">
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        width: "100%"
                    }} label="Machine Fault">
                        <Input style={{
                            width: "45%"
                        }} />
                    </Form.Item>
                    <Form.Item style={{
                        width: "45%"
                    }} label="Fault Details">
                        <Input.TextArea />
                    </Form.Item>
                    <div style={{ width: '100%' }}>
                        <h2>Attachment</h2>
                        <Form.Item name="Documents Upload" valuePropName="fileList" >
                            <Upload.Dragger
                                name="files"
                                listType="picture"
                                beforeUpload={() => false}
                                // onChange={handleUploadChange}
                                accept=".png, .jpg, .jpeg, .pdf"
                            >
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">
                                    Drag and drop files here or <span style={{ color: '#007AFF' }}>Choose files</span>
                                </p>
                                <p className="ant-upload-hint">Files supported: pdf, jpg, png, jpeg, etc.</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </div>

                </Form>
            </Card>

        </div>
    )
}

export default AddOrder