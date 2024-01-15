import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../..";
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";
import { observer } from "mobx-react-lite";


const CreateDevice = observer( ({show, onHide}) =>{
    const {device} = useContext(Context)

    const [name , setName] = useState('')
    const [price , setPrice] = useState(10)
    const [file , setFile] = useState(null)
    const [info, setInfo] = useState([])


    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const changeInfo = (key , value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
}
    const addInfo = () => {
        setInfo([...info, {title:'', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        
        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Додати девайс
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Dropdown className="mt-2">
                <Dropdown.Toggle> {device.selectedType.name  || "Оберати тип" }</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map(type =>
                    <Dropdown.Item 
                    onClick={() => device.setSelectedType(type)} 
                    key={type.id}>
                        {type.name}
                    </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mt-2">
                <Dropdown.Toggle>{device.selectedBrand.name || "Оберати бренд"  }</Dropdown.Toggle>
                 <Dropdown.Menu>
                    {device.brands.map(brand =>
                    <Dropdown.Item 
                    onClick={() => device.setSelectedBrand(brand)}
                     key={brand.id}>
                    {brand.name}
                    </Dropdown.Item> 
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <Form.Control 
                className="mt-2"
                placeholder="Введіть назву пристроя"
                onChange = {e => setName(e.target.value)}
                value={name}
                />

            <Form.Control 
                className="mt-2"
                placeholder="Введіть ціну пристроя"
                type="number"
                onChange = {e => setPrice(Number(e.target.value))}
                value={price}
                />

            <Form.Control 
                className="mt-2"
                type="file"
                onChange={selectFile}
                />
            
            <hr/>
            <Button 
            className="mt-2" 
            variant="warning "
            onClick={addInfo}
            >
                Додати нову властивість
            </Button>
            {
                info.map(i =>
                            <Row className="mt-2" key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Назва властивості"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Опис властивості"
                                    />
                                </Col>
                                <Col>
                                <Button
                                variant="danger"
                                onClick={() => removeInfo(i.number)}>
                                    X
                                </Button>
                                </Col>
                            </Row>
            )}
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <Button onClick={onHide} variant="danger" className="p-2">Зарикти</Button>
            <Button onClick={addDevice} variant="success" className="p-2">Додати</Button>
          </Modal.Footer>
        </Modal>
      );
})

export default CreateDevice;