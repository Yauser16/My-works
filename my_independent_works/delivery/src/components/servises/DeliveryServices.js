
import { CSVLink } from "react-csv";

const useDeliveryServices = () => {

    const onFilteredItems = (data, stateItem, todo) => {
        if (stateItem === "all") {
            todo(null);
        } else {
            let result = data.filter(item => item.date === stateItem);
            todo(result);
        }
    };

    return { onFilteredItems };
}
export default useDeliveryServices;

export const ExportCSV = ( csvData, fileName ) => {
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
        <button variant="warning">
            <CSVLink data={csvData} headers={headers} filename={fileName}>Export</CSVLink>
        </button>
    )
}


