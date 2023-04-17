
import { useState, useCallback } from 'react';
import { Link, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useCreateDeliverMutation, useDeleteDeliverMutation } from '../../api/apiSlice';
// import { useEffect } from "react";

const DeliverPage = (props) => {
    const [state, setState] = useState(false);
    const { deliveryItems, isError } = props;
    const { id } = useParams();
    const [createDeliver] = useCreateDeliverMutation();
    const [deleteDeliver] = useDeleteDeliverMutation();

    const onDelete = useCallback((id) => {
        deleteDeliver(id);
        // eslint-disable-next-line  
    }, []);

    const deliverItem = (arr) => {
        if (isError) {
            return <h5 className="text-center mt-5">Ошибка загрузки</h5>
        }
        return arr.filter(item => item.id === id);
    };

    const view = (arr) => {
        /* const { name, contactName, phone, address, place, date,
            documentNumbers, description, sender } = data; */
        return (
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Доставка для: {arr.name}</h5>
                    <p className="card-text">Адрес доставки: {arr.address}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Контактное лицо: {arr.contactName}</li>
                    <li className="list-group-item">Телефон контакьного лица: {arr.phone}</li>
                    <li className="list-group-item">Дата доставки: {arr.date}</li>
                    <li className="list-group-item">Округ, район доставки: {arr.place}</li>
                    <li className="list-group-item">Номера докуметов: {arr.documents}</li>
                    <li className="list-group-item">Детали доставки: {arr.description}</li>
                    <li className="list-group-item">Сотрудник, оформивший доставку: {arr.sender}</li>
                </ul>
                <div className="card-body">
                    <button type="button" className="btn btn-primary" onClick={() => setState(true)}>Редактировать</button>
                    <Link to="/" className="card-link" style={{ "marginLeft": "10px" }}>Назад</Link>
                </div>
            </div>
        )
    }

    const deliveryForm = (arr) => {
        const postDelivery = (values) => {
            const newDelivery = {
                name: values.name,
                contactName: values.contactName,
                phone: values.phone,
                address: values.address,
                place: values.place,
                date: values.dateOfDelivery,
                documents: values.documentNumbers,
                description: values.description,
                sender: values.sender,
                id: uuidv4()
            };
            createDeliver(newDelivery).unwrap();
            setTimeout(() => {
                window.location.href = `/delivery/${newDelivery.id}`;
                onDelete(id);
            }, 1000);

        }

        return (
            <Formik
                initialValues={{
                    name: `${arr.name}`,
                    contactName: `${arr.contactName}`,
                    phone: `${arr.phone}`,
                    address: `${arr.address}`,
                    place: `${arr.place}`,
                    dateOfDelivery: `${arr.date}`,
                    documentNumbers: `${arr.documents}`,
                    description: `${arr.description}`,
                    sender: `${arr.sender}`
                }}

                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Минимум 2 символа')
                        .required('Обязательное поле!'),
                    contactName: Yup.string()
                        .min(2, 'Минимум 2 символа')
                        .required('Обязательное поле!'),
                    phone: Yup.string()
                        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'номер не корректен')
                        .required('Обязательное поле!'),
                    address: Yup.string()
                        .min(2, 'Минимум 2 символа')
                        .required('Обязательное поле!'),
                    place: '',
                    dateOfDelivery: Yup.string()
                        .required('Обязательное поле!'),
                    documentNumbers: Yup.string()
                        .min(2, 'Минимум 2 символа'),
                    description: Yup.string()
                        .min(2, 'Минимум 2 символа'),
                    sender: Yup.string()
                        .min(2, 'Минимум 2 символа')
                        .required('Обязательное поле!')

                })}
                onSubmit={(values, { /* setSubmitting, */ resetForm }) => {
                    postDelivery(values);
                    // setSubmitting(false);
                    resetForm();
                }}
            >
                {({ isValid, dirty, isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Получатель</label>
                            <Field
                                name="name"
                                id="name"
                                className="form-control"
                                type="text" />
                            <ErrorMessage className="error" name="name" component="div" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contactName">Контактное лицо получателя</label>
                            <Field
                                name="contactName"
                                id="contactName"
                                className="form-control"
                                type="text" />
                            <ErrorMessage className='error' name="contactName" component='div' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Телефон контактного лица</label>
                            <Field
                                name="phone"
                                id="phone"
                                className="form-control"
                                type="text" />
                            <ErrorMessage className='error' name="phone" component='div' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Адрес доставки</label>
                            <Field
                                name="address"
                                id="address"
                                className="form-control"
                                type="text" />
                            <ErrorMessage className='error' name="address" component='div' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="place">Округ, район (заполняется автоматически)</label>
                            <Field
                                name="place"
                                id="place"
                                className="form-control"
                                type="text" />
                            <ErrorMessage className='error' name="place" component='div' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dateOfDelivery">Дата доставки</label>
                            <Field
                                name="dateOfDelivery"
                                className="form-control"
                                type="text" />
                            <ErrorMessage className='error' name="dateOfDelivery" component='div' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="documentNumbers">Документы</label>
                            <Field
                                name="documentNumbers"
                                id="documentNumbers"
                                className="form-control"
                                type="text" />
                            <ErrorMessage className='error' name="documentNumbers" component='div' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Детали доставки</label>
                            <Field
                                name="description"
                                id="description"
                                as="textarea"
                                className="form-control"
                                type="text" />
                            <ErrorMessage className='error' name="description" component='div' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sender">Отправитель</label>
                            <Field
                                name="sender"
                                id="sender"
                                className="form-control"
                                type="text" />
                            <ErrorMessage className='error' name="sender" component='div' />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" disabled={!(isValid && dirty) || isSubmitting}>Сохранить</button>
                            <button type="button" className="btn btn-secondary" style={{ "marginLeft": "10px" }} onClick={() => setState(false)}>Отмена</button>
                        </div>

                    </Form>
                )}
            </Formik>
        );
    };
    const content = deliverItem(deliveryItems);
    console.log(content[0]);

    return (
        <div className="mt-5" style={{ 'margin': 'auto', 'maxWidth': '1000px' }}>
            {!state ? view(content[0]) : deliveryForm(content[0])}
        </div >
    )
}

export default DeliverPage;