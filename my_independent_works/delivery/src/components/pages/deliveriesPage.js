
import React, { useState, useEffect, memo } from 'react';
import { useCreateDriverMutation } from '../../api/apiSlice';
import { v4 as uuidv4 } from 'uuid';
import DeliverPage from './deliverPage';
import DriverSelections from '../driverSelection/DriverSelection';
import { CSVLink } from 'react-csv';
// import { ExportCSV } from '../servises/DeliveryServices';

const DeliveriesPage = memo((props) => {
    const { distribution, driversNames, deliveryItems, isLoading, isError } = props;
    const [filteredDeliveries, setFilteredDeliveries] = useState(null);
    const [deliveryItem, setDeliveryItem] = useState(null);
    const [newDriver, setNewDriver] = useState('');
    const [createDriver] = useCreateDriverMutation();
    const deliveries = filteredDeliveries ? filteredDeliveries : deliveryItems;

    console.log(deliveries);
    
    const today = () => {
        let date = new Date();
        let year = date.getFullYear();
        let mounth = date.getMonth() + 1;
        let day = date.getDate();
        return mounth < 10 ? `${day}.0${mounth}.${year}` : `${day}.${mounth}.${year}`;
    };

    const [selectedDate, setSelectedDate] = useState(today);
    console.log(today(), selectedDate);

    const onFilteredItems = (data) => {
        if (selectedDate === "all") {
            setFilteredDeliveries(null);
        } else {
            let result = data.filter(item => item.date === selectedDate);
            setFilteredDeliveries(result);
        }
    }

    useEffect(() => onFilteredItems(deliveries),
        // eslint-disable-next-line
        []);

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
        const dates = filteredDate.map(item => {
            return <option key={item} value={item}>{item}</option>
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
                        {item.name}
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
        createDriver(newDriver).unwrap();
    }     

    const elements = deliveryRender(deliveries);
    const headers = [
        { label: "Клиент", key: "name" },
        { label: "Контактное лицо", key: "contactName" },
        { label: "Телефон контактного лица", key: "phone" },
        { label: "Адрес доставки", key: "address" },
        { label: "округ, район", key: "place" },
        { label: "Дата доставки", key: "date" },
        { label: "Документы", key: "documents" },
        { label: "Детали", key: "description" },
        { label: "Отправитель", key: "sender" }
    ];

    return (
        <>
            <div className="d-flex mt-5" style={{ "maxWidth": "1400px", "margin": "auto" }}>
                <div className="p-2 flex-fill">
                    <div className="row justify-content-between ">
                        <div className="col-4">
                            <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={(e) => { onFilteredItems(deliveries); e.preventDefault(); }}>
                                <div className="col-12">
                                    <label className="visually-hidden" htmlFor="inlineFormSelectPref">Предпочтение</label>
                                    <select className="form-select" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/* multiple size="1" */ id="inlineFormSelectPref">
                                        <option value="all">Весь список</option>
                                        {optionsForm(deliveryItems)}
                                    </select>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Отправить</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-4">
                            <form className="row row-cols-lg-auto g-3 align-items-center justify-content-end" onSubmit={(e) => { addNewDriver(newDriver); e.preventDefault(); }}>
                                <div className="col-12">
                                    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Добавить водителя</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" /* value={newDriver} */ onChange={e => setNewDriver(e.target.value)} id="inlineFormInputGroupUsername" placeholder="Добавить водителя" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-success">Добавить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="form-wrapper mt-3">
                        <div style={{ "display": 'flex', "justifyContent": 'center' }}>
                            <h4>СПИСОК ДОСТАВОК</h4>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <CSVLink class="btn btn-outline-secondary" role="button" data={deliveries} headers={headers} separator={','} filename={'Deliveries'}>Выгрузить в CSV</CSVLink>
                        </div>
                        <ul className="list-group" style={{ "marginTop": "30px" }}>
                            {elements}
                        </ul>
                    </div>
                </div>
            </div>
            {deliveryItem ? <DeliverPage deliveryItem={deliveryItem} setDeliveryItem={setDeliveryItem} /> : null}
        </>
    )
})
export default DeliveriesPage;
