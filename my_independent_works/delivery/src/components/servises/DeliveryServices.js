
import { CSVLink } from "react-csv";

const useDeliveryServices = () => {

  /*   const onFilteredItems = (data, stateItem, todo) => {
        if (stateItem === "all") {
            todo(null);
        } else {
            let result = data.filter(item => item.date === stateItem);
            todo(result);
        }
        return  todo ;
    }; */
    const today = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        let day = date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`;
        return `${year}-${month}-${day}`;
    };
    
    const selectData = () => {
        const arrDates = [];
        const todayMs = Date.parse(today());
        for (let i = 0; i < 20; i++) {
            let dateNew = new Date(todayMs + 86400);
            let year = dateNew.getFullYear();
            let month = dateNew.getMonth() + 1 < 10 ? `0${dateNew.getMonth() + 1}` : dateNew.getMonth() + 1;
            let day = dateNew.getDate() + i >= 10 ? dateNew.getDate() + i : `0${dateNew.getDate() + i}`;
            let date = `${year}-${month}-${day}`;
            arrDates.push(date);
        }
        return arrDates.map(item => {
            return <option key={item} value={item}>{item}</option>
        })
    }

const exportCSV = ( csvData, fileName, title ) => {
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
    return  <CSVLink className="dropdown-item" role="button" data={csvData} headers={headers} separator={"\t"} filename={fileName}>{title}</CSVLink>
};     

return {
    today,
    selectData,
    exportCSV
}

}
export default useDeliveryServices;


