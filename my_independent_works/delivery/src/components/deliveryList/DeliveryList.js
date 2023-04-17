
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './deliveryList.css';
import { useDeleteDeliverMutation, useDeleteDistrMutation } from '../../api/apiSlice';
import { Link } from 'react-router-dom';


const DeliveryList = (props) => {
    const { distribution, deliveryItems, isLoading, isError, filteredDeliveries, setFilteredDeliveries } = props;
    const [deleteDeliver] = useDeleteDeliverMutation();
    const [deleteDistribution] = useDeleteDistrMutation();

    const onDelete = (id) => {
        deleteDeliver(id);
        distribution.forEach(item => {
            if (item.check === id) {
                deleteDistribution(item.id);
                console.log(item.id);
            }
        });
        // eslint-disable-next-line  
    }

    if (isLoading) {
        return (
            <div className="spinner-border text-info" style={{ "margin": "100px auto" }} role="status">
                <span className="sr-only">{/* Loading... */}</span>
            </div>
        )
    } else {
        if (isError) {
            return <h5 className="text-center mt-2">Ошибка загрузки</h5>
        }
    }
    function onDeleteOfFilterDeliveries(e) {
                let target = e.target.id
                let result = filteredDeliveries ? filteredDeliveries.filter(item => item.id !== target): null
                setFilteredDeliveries(result);
    }

    const deliveryRender = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Доставок пока нет</h5>
        }
        return arr.map((item) => {
            return (
                <li className="list-group-item d-flex justify-content-between align-items-start" key={item.id}>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.date}</div>
                        {item.name}
                    </div>
                    <Link to={`/delivery/${item.id}`} className="card-link" style={{ "marginRight": "10px" }}>Детали</Link>
                    <button type="button" id={item.id} className="btn btn-danger" onClick={e =>  {onDelete(item.id); onDeleteOfFilterDeliveries(e)} }>удалить</button>
                    {/*    <span className="badge bg-danger rounded-pill" onClick={() => onDelete(item.id)}>удалить</span> */}
                </li>
            )
        });
    }
    const elements = deliveryRender(deliveryItems);

    return (
        <ol className="list-group list-group-numbered">
            {elements}
        </ol>
    )
}

export default DeliveryList;