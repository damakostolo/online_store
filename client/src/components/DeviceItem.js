import React from "react";
import Image from 'react-bootstrap/Image'
import { Card, Col } from "react-bootstrap";
import star from "../assets/star.png"
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts"

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <Col md={3} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor:'pointer'}} border="light" >
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between aling-items-center">
                    <div>Apple...</div>
                    <div className="d-flex aling-items-center">
                        <div>{device.rating}</div><Image className="mt-1" src={star} width={18} height={18}/>
                    </div>      
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;