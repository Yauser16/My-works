
import React, { useState, useEffect, memo } from 'react';
import { useCreateDriverMutation, useDeleteDriverMutation } from '../../api/apiSlice';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ModalDelivery from '../modalDeliveryPage/ModalDelivery';
import DriverSelections from '../driverSelection/DriverSelection';
import useDeliveryServices from '../servises/DeliveryServices';
import "./deliveriesPage.css";


const DeliveriesPage = memo((props) => {
    const { distribution, driversNames, deliveryItems, refetch, isLoading, isError, authUsers } = props;
    const [filteredDeliveries, setFilteredDeliveries] = useState(deliveryItems);
    const [deliveryItem, setDeliveryItem] = useState(null);
    const [newDriver, setNewDriver] = useState('');
    const [createDriver] = useCreateDriverMutation();
    const [deleteDriver] = useDeleteDriverMutation();
    const { today, exportCSV, compNum, checkDate} = useDeliveryServices();


    const [selectedDate, setSelectedDate] = useState(today);

    deliveryItems.sort((a, b) => a.date > b.date ? 1 : -1)

    
    const onFilteredItems = (data) => {
        if (selectedDate !== "all") {
            let result = data.filter(item => item.date === selectedDate);
            setFilteredDeliveries(result);
        }
        if (selectedDate === "all") {             
            setFilteredDeliveries(data);
        }
    }

    const onFilteredDistr = (data) => {
        if (selectedDate !== "all") {
            return data.filter(item => item.date === selectedDate);
        }
        if (selectedDate === "all") {
            return data;
        }
    }

    const onRefetch = () => setInterval(() => { refetch(); }, 3000);

    useEffect(() => {
        if (!isLoading) {
            onRefetch();
        }
        return clearInterval(onRefetch);
    },
        // eslint-disable-next-line
        []);
    useEffect(() => {
        onFilteredItems(deliveryItems);
    },
        // eslint-disable-next-line
        [deliveryItems]);

    if (isLoading) {
        return (
            <div className="spinner-border text-info" style={{ "margin": "100px auto" }} role="status">
                <span className="sr-only"></span>
            </div>
        )
    } else {
        if (isError) {
            return <h5 className="text-center mt-2">Ошибка загрузки</h5>
        }
    }

    const optionsForm = (data) => {
        const datesArr = [];
        data.forEach((item) => {
            datesArr.push(item.date);
        });
        function dateList(item, index, arr) {
            return arr.indexOf(item) === index;
        }
        const filteredDate = datesArr.filter(dateList);
        if (!filteredDate.includes(today())) {
            filteredDate.push(today());
        }
        filteredDate.sort(compNum);

        const dates = filteredDate.map(item => {
            if (checkDate(item)) {
                return <option key={item} value={item}>{item}</option>
            } return null;
        });
        return dates;
    };


    const deliveryRender = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">На эту дату доставок нет</h5>
        }             
        return arr.map((item) => {
            return (
                <li className="list-group-item d-flex justify-content-between align-items-start" key={item.id}>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.date}</div>
                        {item.name}  <span className="address" style={{"fontStyle": "italic", "marginLeft": "10px"}}>адрес: {item.address}</span>
                    </div>
                    <button type="button" className="btn btn-link" onClick={() => { setDeliveryItem(item); }}>Детали</button>
                    <DriverSelections distrItem={item} driversNames={driversNames} distribution={distribution} />
                </li>
            )
        });
    }

    const addNewDriver = (driver) => {
        const newDriver = {
            name: driver,
            id: uuidv4()
        }
        if (newDriver.name !== '')
            createDriver(newDriver).unwrap();
    }
    const driversListForDelete = () => driversNames.map(i => {
        return <li key={i.id}><button className="dropdown-item" value={i.name} onClick={(e) => { deleteDriver(i.id); e.preventDefault() }} >{i.name}</button></li>
    });

    const elements = deliveryRender(filteredDeliveries.filter(item => checkDate(item.date)));

    return (
        <>
            <div className="d-flex mt-5" style={{ "maxWidth": "1400px", "margin": "auto" }}>
                <div className="p-2 flex-fill">
                    <div className="row justify-content-between ">
                        <div className="col-4">
                            <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={(e) => { onFilteredItems(deliveryItems); e.preventDefault(); }}>
                                <div className="col-12">
                                    <label className="visually-hidden" htmlFor="inlineFormSelectPref">Предпочтение</label>
                                    <select className="form-select" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/* multiple size="1" */ id="inlineFormSelectPref">
                                        <option value="all">Весь список</option>
                                        {optionsForm(deliveryItems)}
                                    </select>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Выбрать</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-4">
                            <form className="row row-cols-lg-auto g-3 align-items-center justify-content-end">
                                <div className="col-12">
                                    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Добавить водителя</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" /* value={newDriver} */ onChange={e => setNewDriver(e.target.value)} id="inlineFormInputGroupUsername" placeholder="Добавить водителя" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="button" onClick={(e) => { addNewDriver(newDriver); e.preventDefault(); }} className="btn btn-success">Добавить</button>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Удалить водителя
                                    </button>
                                    <ul className="dropdown-menu">
                                        {driversListForDelete()}
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="form-wrapper mt-3">
                        <div style={{ "display": 'flex', "justifyContent": 'center' }}>
                            <h4>СПИСОК ДОСТАВОК</h4>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            {authUsers.admin ? <Link className="btn btn-outline-primary" style={{"height": "40px", "width": "150px"}} role="button" to="/admin">Пользователи</Link> : null}
                            <div className="dropdown">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Выгрузить в CSV
                                </button>
                                <ul className="dropdown-menu">
                                    <li>{exportCSV(filteredDeliveries, 'Deliveries', 'Доставки на дату')}</li>
                                    <li>{exportCSV(onFilteredDistr(distribution), 'Drivers', 'Выбор водитетей')}</li>
                                </ul>
                            </div>
                        </div>
                        <ul className="list-group" style={{ "marginTop": "30px" }}>
                            {elements}
                        </ul>
                    </div>
                </div>
            </div>
            {deliveryItem ? <ModalDelivery display={'block'} btnDisplay={'none'} deliveryItem={deliveryItem} setDeliveryItem={setDeliveryItem} /> : null}
        </>
    )
})
export default DeliveriesPage;