import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {createBrand} from "../../http/deviceAPI";


const CreateBrand = ({show, onHide}) =>{

  const [value, setValue] = useState('')

  const addBrand = () => {
      createBrand({name: value}).then(data => {
          setValue('')
          onHide()
      })
  }
    return (
        <Modal
        show={show}
        onHide={onHide}
        centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Додати бренд
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form>
                    <Form.Control
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={'Вкажіть назву бренду'}
                    />
                </Form>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <Button onClick={onHide} variant="danger" className="p-2">Зарикти</Button>
            <Button onClick={addBrand} variant="success" className="p-2">Додати</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default CreateBrand;