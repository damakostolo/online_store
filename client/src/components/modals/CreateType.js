import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";

const CreateType = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addType = () => {
      createType({name: value}).then(data => {
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
            Додати тип
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Form>
                  <Form.Control
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  placeholder={'Вкажіть назву типу'}
                  />
              </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button onClick={onHide} variant="danger" className="p-2">Зарикти</Button>
          <Button onClick={addType} variant="success" className="p-2">Додати</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateType;