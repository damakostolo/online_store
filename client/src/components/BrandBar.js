import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card } from "react-bootstrap";


const BrandBar = observer( () =>{
    const {device} = useContext(Context)
    return(
        <div className="d-flex flex-wrap">
            {device.brands.map(brand =>
                <Card
                key={brand.id}
                className="p-3 ms-2"
                style={{cursor: 'pointer'}}
                onClick = {() => device.setSelectedBrand(brand)}
                border = {brand.id === device.selectedBrand.id ? 'danger' : 'bleck'}
                >
                    {brand.name}
                </Card>
                )}
        </div>
    );
});

export default BrandBar;