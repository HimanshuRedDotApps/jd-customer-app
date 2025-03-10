import React, { useState } from 'react'
import { Button, Collapse, Input, Radio } from "antd";
import {

    WhiteImageIcon,
    AuxilleryChecksIcon,
} from "assets/svg/icon";

import {
    EditOutlined,
    HistoryOutlined,
} from "@ant-design/icons";
import EditFreeVolumeCheck from './EditFreeVolumeCheck';

const FreeVolumeCheck = ({
    freeVolumeData, 
    setFreeVolumeData,

    setUploadModal, 
    setUploadImageType,
    setImageMarkings,
    UploadImageMarkingKonva,
    setEditImageId,
    setSelectedImageTemp,
    delSubUploadedPhoto
 }) => {
    const { Panel } = Collapse;
    const [editStatus, setEditStatus] = useState(false);
    const [modalName, setModalName] = useState("");
    const [editKey, setEditKey] = useState("");
    const [editData, setEditData] = useState("");
    const [suffixData, setSuffixData] = useState(
        {
            "Motor Frame inner dia 'a'": 'cm',
            "Motor Core length 'b'": 'cm',
            "Motor Core Length 'f'": 'cm',
            "Width": 'cm',
            "Breadth": 'cm',
            "Height": 'cm',
            "T-box internal width 'w'": 'cm',
            "T-box internal breadth 'b'": 'cm',
            "T-box internal height 'h'": 'cm',
            "T-Box internal breadth 'h'": 'cm',
            "Diameter": 'cm',
            "T-box internal breadth 'h'": 'cm',
        },
    );


    const getSuffixSplitValue = (internalData) => {
        if(suffixData[internalData?.name]) {
            if(internalData.value?.includes('-')) {
                let value = internalData.value?.split('-')
                return value[value.length-1]
            } else {
                return suffixData[internalData?.name]
            }
        } else {
            return ''
        }
    }

    const convertImageToBase64 = async (imageUrl, markings) => {
        try {
            const response = await fetch(imageUrl, { mode: "cors" }); // Ensure CORS is allowed
            const blob = await response.blob(); // Convert response to Blob
            const reader = new FileReader();
            
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
            let base64 = reader.result;
            if(base64) {
                UploadImageMarkingKonva(base64, markings);
            }
          };
        } catch (error) {
          console.error("Error fetching image:", error);
        }
    };

    return (
        <div className="normal-header-color">
            {editStatus && <EditFreeVolumeCheck modalName={modalName} editStatus={editStatus} setEditStatus={setEditStatus} 
            editData={editData} editKey={editKey} suffixData={suffixData} setSuffixData={setSuffixData} 
            freeVolumeData={freeVolumeData} setFreeVolumeData={setFreeVolumeData} />}

            {
                freeVolumeData.map((item, i) => {
                    // console.log("k" + key + " " + JSON.stringify(item))
                    // console.log(item[`data${i + 1}`]?.[`edit${i + 1}`]);
                    
                    return (

                        <Collapse
                            key={i} // Added key prop to Collapse component
                            expandIconPosition={"end"}
                            // onChange={(data) => console.log(data)}
                            className="mb-3"
                        >
                            <Panel
                                key={i}
                                header={
                                    <>
                                        <span className="d-flex align-items-centr" style={{ gap: "5px" }}>
                                            <AuxilleryChecksIcon /> {item?.title}{" "}
                                            <span style={{ color: "grey", fontSize: "14px" }} className="font-weight-300 ml-2">
                                                {" "}
                                                <HistoryOutlined /> Last updated an hour ago{" "}
                                            </span>
                                        </span>
                                        <span className="customEditButton" style={{ gap: "5px" }}>
                                            {/* <Button
                                                className="bg-primary text-white mr-1"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    console.log("add");
                                                }}
                                            >
                                                +
                                            </Button> */}

                                            <Button onClick={(e) => {
                                                // e.stopPropagation();
                                                setUploadModal(true);
                                                setUploadImageType(`Free-Volume ~ ${item?.title}`);
                                            }} className="bg-primary text-white mr-1">
                                                <WhiteImageIcon />
                                            </Button>

                                            <Button onClick={(e) => {
                                                e.stopPropagation();
                                                setEditStatus(true)

                                                setModalName(freeVolumeData[i].title);
                                                setEditKey(freeVolumeData[i].key);
                                                setEditData(freeVolumeData[i].data)
                                                setEditStatus(true);

                                            }} className="bg-primary text-white mr-1">
                                                <EditOutlined />

                                            </Button>
                                        </span>
                                    </>
                                }
                            >
                                {
                                    item.data.map((internalData, k) => {
                                        return (
                                            <>
                                                <div className={`${internalData.check == 1 ? 'green' : (internalData.check == 2 ? 'red' : 'grey')}-radio`} key={k}>

                                                    <div className="mb-4 mt-3 d-flex justify-content-between">
                                                        <Radio
                                                            style={{ width: "30%" }}
                                                            checked={internalData.check}
                                                        >
                                                            {internalData.name}
                                                        </Radio>
                                                        <Input
                                                            style={{ width: "70%" }}
                                                            placeholder="Type here..."
                                                            value={suffixData[internalData.name] ? internalData.value?.split('-')[0] : internalData.value}
                                                            // suffix={internalData.value?.includes('-') ? 
                                                            //     internalData.value?.split('-')[1] : 'cm'}
                                                            suffix={getSuffixSplitValue(internalData)}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })
                                }

                                <div className="mt-5">
                                    <h5>Uploaded Photos</h5>
                                    <div className="dashed-border p-2">
                                        {item?.photos.map((image, index) => (
                                            <div className='mb-2 w-100 d-flex justify-content-start' key={index}>
                                                <div className='w-75 d-flex flex-column align-items-start'>
                                                    <img
                                                    src={image.url}
                                                    alt={`Image ${index}`}
                                                    style={{
                                                    // width: "200px",
                                                    height: "200px",
                                                    marginRight: "10px",
                                                    }}
                                                    />
                                                    <div className='diflex justify-content-start'>
                                                        <Button type='primary' className='mt-2' onClick={() => {
                                                                setEditImageId(image.id);
                                                                setUploadModal(true);
                                                                setUploadImageType(`Free-Volume ~ ${item?.title}`);
                                                                setSelectedImageTemp(image.url_unmodified);
                                                                setImageMarkings(image.image_markings);
                                                                if(image.url_unmodified.includes('http')) {
                                                                    convertImageToBase64(image.url_unmodified, image.image_markings);
                                                                } else {
                                                                    setTimeout(() => {
                                                                        UploadImageMarkingKonva(image.url_unmodified, image.image_markings);
                                                                    }, 500);
                                                                }
                                                            }}>
                                                            {" "}
                                                            Edit Photo
                                                        </Button>

                                                        <Button className='mt-2 ml-2' onClick={() => {
                                                                delSubUploadedPhoto(index, `Free-Volume ~ ${item?.title}`)
                                                            }}>
                                                            {" "}
                                                            Delete Photo
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4>Markings</h4>
                                                    {image.image_markings.length > 0 ?
                                                        image.image_markings.map((marking, index) => (
                                                            marking.text && <div>
                                                                <b>{index+1}. </b>{marking.text}
                                                            </div>
                                                        ))
                                                        : <div><i>No Markings Added</i></div>
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </Panel>
                        </Collapse>
                    )
                })
            }

            
        </div>
    )
}

export default FreeVolumeCheck