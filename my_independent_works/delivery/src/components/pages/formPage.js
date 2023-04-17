
import DeliveryForm from "../addForm/DeliveryForm";
import DeliveryList from "../deliveryList/DeliveryList";
import SearchDeliveries from "../searchDeliveries/SearchDeliveries";
import React, { useState } from "react";


const FormPage = (props) => {
    const { distribution, deliveryItems, isLoading, isError } = props;
    const [filteredDeliveries, setFilteredDeliveries] = useState(null);
    const deliveries = filteredDeliveries ? filteredDeliveries : deliveryItems;


    return (
        <div className="d-flex mt-5" style={{ "maxWidth": "1400px", "margin": "auto" }}>
            <div className="p-2 flex-fill">
                <div className="form-wrapper">
                    <h4>Сведения о доставке</h4>
                    <DeliveryForm setFilteredDeliveries={setFilteredDeliveries} />
                </div>
            </div>
            <div className="p-2 flex-fill">
                <div className="form-wrapper">
                    <h4>Последние добавления</h4>
                    <ul className="list-group" style={{ "marginTop": "30px" }}>
                        <SearchDeliveries
                            deliveryItems={deliveryItems}
                            setFilteredDeliveries={setFilteredDeliveries} />
                        <DeliveryList
                            distribution={distribution}
                            deliveryItems={deliveries}
                            setFilteredDeliveries={setFilteredDeliveries}
                            filteredDeliveries={filteredDeliveries}
                            isLoading={isLoading}
                            isError={isError} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FormPage;