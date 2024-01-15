import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () =>{
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return(
        <Container className="d-flex flex-column">

            <Button
             variant={'outline-dark'} 
             className="mt-3 p-2"
             onClick={() => setTypeVisible(true)}
            >
                Додати тип
            </Button>
            
            <Button
             variant={'outline-dark'} 
             className="mt-3 p-2"
             onClick={() => setBrandVisible(true)}        
            >
                Додати бренд
            </Button>

            <Button
             variant={'outline-dark'} 
             className="mt-3 p-2"
             onClick={() => setDeviceVisible(true)}                
            >
                Додати пристрій
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;