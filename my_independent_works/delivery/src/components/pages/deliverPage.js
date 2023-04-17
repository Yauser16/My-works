


const DeliverPage = (props) => {
    const { deliveryItem, setDeliveryItem } = props;

    return (
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" 
        style={{"opacity": "1", "display": "block", "backgroundColor": "rgb(128 128 128 / 0.5)", "--bs-modal-width": "1000px"}}>
            <div className="modal-dialog" style={{"transform": "none"}}>
                <div className="modal-content" style={{"opacity": "1", "display": "inline-block"}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Доставка для: {deliveryItem.name}</h1>
                        <button type="button" onClick={() => setDeliveryItem(null)} className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                    </div>
                    <div className="modal-header">
                        <h4 className="modal-title fs-6">Адрес доставки: {deliveryItem.address}</h4>
                    </div>
                    <div className="modal-body" style={{"wordWrap": "break-word"}}>
                        <ul className="list-group list-group-flush" >
                            <li className="list-group-item">Контактное лицо: {deliveryItem.contactName}</li>
                            <li className="list-group-item">Телефон контакьного лица: {deliveryItem.phone}</li>
                            <li className="list-group-item">Дата доставки: {deliveryItem.date}</li>
                            <li className="list-group-item">Округ, район доставки: {deliveryItem.place}</li>
                            <li className="list-group-item">Номера докуметов: {deliveryItem.documents}</li>
                            <li className="list-group-item">Детали доставки: {deliveryItem.description}</li>
                            <li className="list-group-item">Сотрудник, оформивший доставку: {deliveryItem.sender}</li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setDeliveryItem(null)} data-bs-dismiss="modal">Закрыть</button>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default DeliverPage;